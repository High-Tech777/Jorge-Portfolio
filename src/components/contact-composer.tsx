"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState, type FormEvent } from "react";
import { Mail, Send, Trash2, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function openContactComposer() {
  window.dispatchEvent(new Event("open-contact-composer"));
}

export function ContactComposer() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [draft, setDraft] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("open-contact-composer", show);
    return () => window.removeEventListener("open-contact-composer", show);
  }, []);
  function change(field: keyof typeof draft, value: string) {
    setDraft(current => ({ ...current, [field]: value }));
    if (status !== "sending") { setStatus("idle"); setFeedback(""); }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending"); setFeedback("");
    try {
      const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
      const response = await fetch(`${base}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(draft) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Message could not be sent. Please try again.");
      setStatus("sent"); setFeedback("Your message was sent to Jorge. Thank you!");
      setDraft({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (error) {
      setStatus("error"); setFeedback(error instanceof Error ? error.message : "Unable to send. Please try again.");
    }
  }
  const fieldClass = "w-full bg-transparent outline-none text-sm py-3 disabled:opacity-60";
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" />
      <Dialog.Content className="fixed z-[101] bottom-4 right-4 left-4 sm:left-auto sm:w-[620px] max-h-[90dvh] overflow-y-auto rounded-2xl border border-border bg-background text-foreground shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b bg-muted/50">
          <Dialog.Title className="font-semibold flex items-center gap-2"><Mail className="w-4 h-4" /> New message</Dialog.Title>
          <Dialog.Close asChild><button type="button" aria-label="Close message" className="p-2 rounded-full hover:bg-muted"><X className="w-4 h-4" /></button></Dialog.Close>
        </div>
        <Dialog.Description className="sr-only">Write a message to Jorge Joshua Neyra Caldas.</Dialog.Description>
        <form onSubmit={submit} className="px-5 pb-5">
          <p className="py-3 border-b text-sm break-all"><span className="text-muted-foreground mr-3">To</span>{SITE_CONFIG.links.email}</p>
          <label className="block border-b"><span className="sr-only">Your name</span><input className={fieldClass} placeholder="Your name" autoComplete="name" required maxLength={100} value={draft.name} disabled={status === "sending"} onChange={e => change("name", e.target.value)} /></label>
          <label className="block border-b"><span className="sr-only">Your email</span><input className={fieldClass} type="email" placeholder="Your email" autoComplete="email" required maxLength={254} value={draft.email} disabled={status === "sending"} onChange={e => change("email", e.target.value)} /></label>
          <label className="block border-b"><span className="sr-only">Subject</span><input className={fieldClass} placeholder="Subject" required maxLength={160} value={draft.subject} disabled={status === "sending"} onChange={e => change("subject", e.target.value)} /></label>
          <label className="block"><span className="sr-only">Message</span><textarea className={`${fieldClass} min-h-[220px] resize-y`} placeholder="Write your message…" required maxLength={10000} value={draft.message} disabled={status === "sending"} onChange={e => change("message", e.target.value)} /></label>
          <div className="hidden" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={draft.website} onChange={e => change("website", e.target.value)} /></label></div>
          {feedback && <p role={status === "error" ? "alert" : "status"} className={`mb-4 text-sm ${status === "error" ? "text-destructive" : "text-primary"}`}>{feedback}</p>}
          {status === "error" && <a className="block text-sm text-primary underline mb-4" target="_blank" rel="noopener noreferrer" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_CONFIG.links.email)}&su=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(`Name: ${draft.name}\nEmail: ${draft.email}\n\n${draft.message}`)}`}>Open this draft in Gmail</a>}
          <div className="flex items-center justify-between gap-3">
            <Button type="submit" disabled={status === "sending"} className="rounded-full px-6"><Send className="w-4 h-4" />{status === "sending" ? "Sending…" : "Send"}</Button>
            <button type="button" aria-label="Discard message" disabled={status === "sending"} className="p-2 rounded-full hover:bg-muted" onClick={() => { setDraft({ name: "", email: "", subject: "", message: "", website: "" }); setFeedback(""); setStatus("idle"); setOpen(false); }}><Trash2 className="w-5 h-5" /></button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}

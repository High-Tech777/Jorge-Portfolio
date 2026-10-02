"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const label = !mounted ? "Change color theme" : resolvedTheme === "light" ? "Switch to dark mode" : "Switch to light mode";
  return <Button size="icon" variant="ghost" className="rounded-full shrink-0 ml-auto xl:ml-0" aria-label={label} title={label} disabled={!mounted} onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
    <Sun className="hidden dark:block h-5 w-5" /><Moon className="block dark:hidden h-5 w-5" />
  </Button>;
}

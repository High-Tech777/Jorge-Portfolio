import type { Metadata } from "next";
import { Career } from "@/components/sections/career";

export const metadata: Metadata = {
  title: "Career",
  description: "Jorge Joshua Neyra Caldas’s professional experience and education.",
};

export default function CareerPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Career />
    </div>
  );
}

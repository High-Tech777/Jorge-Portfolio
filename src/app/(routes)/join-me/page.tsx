import { Metadata } from "next";

import { JoinMe } from "@/components/sections/join-me";

export const metadata: Metadata = {
  title: "Join Me | Jorge Joshua Neyra Caldas",
  description: "Come and join me in building the future!",
};

export default function JoinMePage() {
  return (
    <div className="pt-20">
      <JoinMe />
    </div>
  );
}
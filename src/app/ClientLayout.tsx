import Navbar from "@/components/navbar/Navbar";
import React, { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

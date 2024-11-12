import React from "react";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full dark:bg-[#000]">
      <main className="h-full">{children}</main>
    </div>
  );
}

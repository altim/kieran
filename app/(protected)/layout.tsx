import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("kieranhurleyauth");
  if (!authCookie) {
    redirect("/login");
  }

  return children;
}

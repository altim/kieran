"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function IsNotLoginPage({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const isNotLoginPage = pathname !== "/login";
  return isNotLoginPage ? children : null;
}

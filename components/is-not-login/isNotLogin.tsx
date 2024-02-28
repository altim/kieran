"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function IsNotLogin({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const isNotLogin = pathname !== "/login";
  return isNotLogin ? children : null;
}

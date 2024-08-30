"use client";
import { useAppStore } from "@/store/app";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  return children || redirect("/en");
}

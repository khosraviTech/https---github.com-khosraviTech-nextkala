"use client";
import Link from "next/link";
import Logo from "./Logo";
import LogInInfo from "./LogInInfo";
import { SessionProvider } from "next-auth/react";

export default function Menu() {
  return (
    <div className="flex items-center gap-6 p-2 bg-white w-full h-15  shadow-lg outline-0 ">
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <SessionProvider>
        <LogInInfo />
      </SessionProvider>

      {/* Search bar */}
      <Link href="/cart">Cart</Link>
      {/* Cart Icon */}
    </div>
  );
}

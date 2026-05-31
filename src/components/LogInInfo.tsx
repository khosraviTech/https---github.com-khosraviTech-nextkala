"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LogInInfo() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        <div>👤 {session.user.name}</div>
        <button onClick={() => signOut()}>Log Out</button>
      </>
    );
  } else {
    return <Link href="/login">Log In</Link>;
  }
}

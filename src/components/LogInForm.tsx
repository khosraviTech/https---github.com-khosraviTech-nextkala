"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const router = useRouter();

  const handleGithubLogin = () => {
    signIn("github", { callbackUrl: "/" });
    // ↑ Redirects to GitHub. No email/password needed.
  };

   async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");


    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });



    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center border-2 border-black  rounded-4xl w-80
       h-auto p-3"
      >
        <div className="w-full">
          <label htmlFor="name">Email:</label>
          <input
            placeholder="admin@gmail.com"
            className="border-2 rounded-3xl m-1 ml-7 p-1"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="admin"
            className="border-2 rounded-3xl m-1 p-1"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            
            className=" border-2 rounded-4xl m-1 p-1 w-full h-10"
          >
            LogIn
          </button>
          {/* Error message */}
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
        </div>
        <button
          onClick={handleGithubLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Continue with GitHub
        </button>

        <div className="">
          <h1>Don&apos;t have an account?</h1>
          <Link href="/signup" className="underline ">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

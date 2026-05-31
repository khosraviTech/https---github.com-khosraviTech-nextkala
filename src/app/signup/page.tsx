import Link from "next/link";

export default function signUp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10! border-2 border-amber-600 w-96">
        <div className="flex flex-col gap-4">
          {/* First name & Last name - side by side */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-1">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-1">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Email - full width */}
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Password - full width */}
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Confirm Password - full width */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-black text-white py-2 rounded-md mt-2">
            Create Account
          </button>

          {/* Sign in link */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

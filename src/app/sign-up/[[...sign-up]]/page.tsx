import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your PROWEB account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link href="/sign-in" className="font-medium text-red-800 hover:text-red-700">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: 'bg-red-800 hover:bg-red-700 text-white',
                footerActionLink: 'text-red-800 hover:text-red-700'
              }
            }}
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
          />
        </div>
      </div>
    </div>
  );
}
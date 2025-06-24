import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="PROWEB Logo"
              width={80}
              height={80}
              className="mb-4"
            />
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Sign in to PROWEB</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link href="/sign-up" className="font-medium text-red-800 hover:text-red-700">
              create a new account
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 'bg-red-800 hover:bg-red-700 text-white',
                footerActionLink: 'text-red-800 hover:text-red-700',
                card: 'rounded-lg shadow-md',
                headerTitle: 'text-2xl font-bold text-gray-900',
                headerSubtitle: 'text-gray-600',
                socialButtonsBlockButton: 'border border-gray-300 hover:border-gray-400',
                formFieldInput: 'border-gray-300 focus:ring-red-800 focus:border-red-800',
                identityPreviewEditButton: 'text-red-800 hover:text-red-700'
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
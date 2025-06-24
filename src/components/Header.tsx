"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="PROWEB Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="font-bold text-xl text-red-800">
              PROWEB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/about') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/services') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              Services
            </Link>
            <Link
              href="/membership"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/membership') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              Membership
            </Link>
            <Link
              href="/projects"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/projects') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/news"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/news') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              News
            </Link>
            <Link
              href="/gallery"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/gallery') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
                isActive('/contact') 
                  ? 'border-2 border-red-800 text-red-800 font-medium' 
                  : 'hover:text-red-800 hover:bg-red-50'
              }`}
            >
              Contact
            </Link>
            
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="text-gray-800 hover:text-red-800 transition-colors"
                >
                  My Profile
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md ${
                isActive('/') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md ${
                isActive('/about') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md ${
                isActive('/services') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/membership"
              className={`block px-3 py-2 rounded-md ${
                isActive('/membership') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="/projects"
              className={`block px-3 py-2 rounded-md ${
                isActive('/projects') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/news"
              className={`block px-3 py-2 rounded-md ${
                isActive('/news') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/gallery"
              className={`block px-3 py-2 rounded-md ${
                isActive('/gallery') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md ${
                isActive('/contact') 
                  ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium' 
                  : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isSignedIn ? (
              <>
                <Link
                  href="/profile"
                  className="block text-gray-800 hover:text-red-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <div className="pt-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="block bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors w-full text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
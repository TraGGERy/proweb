"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { memo } from "react";

const OptimizedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  // Memoize the scroll handler to prevent recreation on each render
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Only add/remove event listener when component mounts/unmounts
  useEffect(() => {
    // Add the event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Memoize the isActive function to prevent recreation on each render
  const isActive = useCallback((path: string) => {
    return pathname === path;
  }, [pathname]);

  // Memoize the mobile menu toggle to prevent recreation on each render
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Memoize the mobile menu close function
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Memoize the header class to prevent recalculation on each render
  const headerClass = useMemo(() => {
    return `fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white shadow-md py-2"
        : "bg-white/95 shadow-sm py-4"
    }`;
  }, [isScrolled]);

  // Memoize the navigation links to prevent recreation on each render
  const navLinks = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/membership", label: "Membership" },
    { href: "/projects", label: "Projects" },
    { href: "/news", label: "News" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ], []);

  // Render desktop navigation links
  const renderDesktopNavLinks = useMemo(() => {
    return navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`text-gray-800 transition-colors px-3 py-1 rounded-md ${
          isActive(link.href)
            ? 'border-2 border-red-800 text-red-800 font-medium'
            : 'hover:text-red-800 hover:bg-red-50'
        }`}
      >
        {link.label}
      </Link>
    ));
  }, [navLinks, isActive]);

  // Render mobile navigation links
  const renderMobileNavLinks = useMemo(() => {
    return navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`block px-3 py-2 rounded-md ${
          isActive(link.href)
            ? 'bg-red-50 text-red-800 border-l-4 border-red-800 font-medium'
            : 'text-gray-800 hover:text-red-800 hover:bg-red-50'
        }`}
        onClick={closeMobileMenu}
      >
        {link.label}
      </Link>
    ));
  }, [navLinks, isActive, closeMobileMenu]);

  return (
    <header className={headerClass}>
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
              priority
            />
            <span className="font-bold text-xl text-red-800">
              PROWEB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {renderDesktopNavLinks}
            
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
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
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
            {renderMobileNavLinks}
            
            {isSignedIn ? (
              <>
                <Link
                  href="/profile"
                  className="block text-gray-800 hover:text-red-800 transition-colors"
                  onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

// Wrap the component with memo to prevent unnecessary re-renders
export default memo(OptimizedHeader);
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-semibold">ViteLearn</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button className="text-sm font-medium bg-black hover:bg-gray-800">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 
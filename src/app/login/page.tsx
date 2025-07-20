"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-between p-12 relative">
        <div className="flex-1 flex flex-col justify-center">
          <Link href="/" className="flex items-center space-x-2 mb-12">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-2xl font-bold">ViteLearn</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 mt-8">Welcome to the <br />Future of Learning</h1>
          <p className="text-lg text-gray-300 mb-10">Join our community of learners and unlock your potential with cutting-edge educational technology.</p>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10h8M8 14h6"/></svg>
              </div>
              <div>
                <div className="font-semibold">Smart Note Taking</div>
                <div className="text-gray-400 text-sm">Create notes from YouTube, PDFs, audio recordings, and live sessions</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7"/></svg>
              </div>
              <div>
                <div className="font-semibold">AI Study Tools</div>
                <div className="text-gray-400 text-sm">Generate flashcards, quizzes, detailed notes, and summaries automatically</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
              </div>
              <div>
                <div className="font-semibold">Chat with Materials</div>
                <div className="text-gray-400 text-sm">Have interactive conversations with your YouTube videos, PDFs, and notes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 text-xs mt-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>Enterprise Security</span>
        </div>
        <div className="absolute bottom-4 left-12 text-gray-500 text-xs">© 2025 ViteLearn</div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white relative">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-center">Sign In</h2>
          <p className="text-gray-600 mb-6 text-center">Continue your learning journey</p>
          <button className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 hover:bg-gray-100 transition">
            <img src="/google.svg" alt="Google" className="w-6 h-6 mr-3" />
            <span className="flex-1 text-left">Sign in with Google</span>
          </button>
          <div className="w-full flex flex-col items-center mt-2">
            <div className="text-xs text-gray-500 mb-2">Secure OAuth Authentication</div>
            <div className="flex items-center w-full bg-gray-100 rounded-lg p-3 mb-2">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2l4-4"/></svg>
              <div>
                <div className="font-semibold text-xs">Enterprise Grade Security</div>
                <div className="text-xs text-gray-500">Your data is protected with industry-standard encryption</div>
              </div>
            </div>
            <div className="text-xs text-gray-400 text-center mt-2">
              By signing in, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-xs text-center w-full">
          <div className="mb-1">Trusted by educators worldwide</div>
          <div className="flex justify-center space-x-6">
            <span>10,000+ Students</span>
            <span>• 500+ Courses</span>
            <span>• 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
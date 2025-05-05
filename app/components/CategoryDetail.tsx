"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import WebDevForm from "./WebDevForm";

export default function CategoryDetail({ category }) {
  // Render different forms based on category ID
  const renderCategoryForm = () => {
    switch (category.id) {
      case 1: // Web Development
        return <WebDevForm />;
      case 2: // iOS Development
        return <div className="text-white">iOS Development form coming soon</div>;
      case 3: // Android Development
        return <div className="text-white">Android Development form coming soon</div>;
      default:
        return <div className="text-white">Form not available for this category</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1923] flex flex-col font-['Rajdhani',sans-serif] relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f1923]"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #7b34dd 1px, transparent 1px), linear-gradient(to bottom, #7b34dd 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Scanlines effect */}
      <div className="scanlines"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#7b34dd] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#00c2cb] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>

      {/* Header - reduced height */}
      <header className="w-full aws-header py-2 px-6 flex items-center border-b border-[#7b34dd] relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/aws-logo.svg"
                  alt="AWS Logo"
                  width={100}
                  height={30}
                  priority
                  className="mr-2"
                />
                <span className="text-[#00c2cb] font-bold text-2xl ml-2 glow-text">
                  Q
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="aws-link text-base font-medium">
              Home
            </Link>
            <a href="#" className="aws-link text-base font-medium">
              About
            </a>
            <a href="#" className="aws-link text-base font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16 relative z-10">
        <Link href="/" className="aws-link mb-8 inline-block">
          ← Back to Categories
        </Link>
        
        <div className="max-w-4xl mx-auto bg-[#131e29] rounded-lg p-8 border border-[#7b34dd]/30">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7b34dd] to-[#00c2cb] rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              {category.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white glow-text text-center md:text-left">
                {category.name}
              </h1>
              <p className="text-gray-300 mt-2 text-center md:text-left">
                {category.description}
              </p>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-[#7b34dd] to-[#00c2cb] mb-8"></div>
          
          {/* Render the appropriate form based on category */}
          {renderCategoryForm()}
          
          {/* Generated Prompt Section */}
          <div className="bg-[#0f1923]/50 p-6 rounded-lg border border-[#7b34dd]/20 mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Generated Prompt
            </h2>
            <div className="bg-[#131e29] border border-[#7b34dd]/30 rounded-md p-4 text-gray-300">
              <p className="mb-4">
                Your prompt will appear here after generation.
              </p>
              <div className="flex justify-end">
                <button className="text-[#00c2cb] hover:text-[#7b34dd] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1923] text-white py-6 px-6 border-t border-[#7b34dd] relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Image
                src="/aws-logo.svg"
                alt="AWS Logo"
                width={70}
                height={20}
              />
              <span className="text-[#00c2cb] font-bold text-xl ml-2 glow-text">
                Q
              </span>
            </div>
            <div className="text-sm text-gray-400 flex flex-col items-end">
              <div className="mb-2">Made by Chinmay with ❤️ Amazon Q</div>
              <div>&copy; {new Date().getFullYear()} AWS Q Prompt Creator. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
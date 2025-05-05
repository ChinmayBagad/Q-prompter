import Image from "next/image";
import CategorySlider from "./components/CategorySlider";

export default function Home() {
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
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="aws-link text-base font-medium">
              Home
            </a>
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7b34dd] to-[#00c2cb]">
            Create Detail Promts
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#7b34dd] to-[#00c2cb] mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leverage the power of AWS Q to generate detailed, effective prompts
            for your projects.
          </p>
        </div>

        {/* Card Slider Component */}
        <CategorySlider />

        {/* Decorative tech elements */}
        <div className="absolute top-1/3 left-10 w-4 h-20 bg-gradient-to-b from-[#7b34dd] to-transparent opacity-70"></div>
        <div className="absolute top-1/3 left-16 w-4 h-12 bg-gradient-to-b from-[#00c2cb] to-transparent opacity-70"></div>
        <div className="absolute top-1/3 left-22 w-4 h-32 bg-gradient-to-b from-[#7b34dd] to-transparent opacity-70"></div>

        <div className="absolute bottom-1/3 right-10 w-4 h-20 bg-gradient-to-b from-[#7b34dd] to-transparent opacity-70"></div>
        <div className="absolute bottom-1/3 right-16 w-4 h-12 bg-gradient-to-b from-[#00c2cb] to-transparent opacity-70"></div>
        <div className="absolute bottom-1/3 right-22 w-4 h-32 bg-gradient-to-b from-[#7b34dd] to-transparent opacity-70"></div>
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
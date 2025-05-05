import Link from "next/link";

export default function NotFound() {
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

      <main className="flex-grow flex flex-col items-center justify-center px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7b34dd] to-[#00c2cb]">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">
            Category Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            The category you're looking for doesn't exist or is not yet available.
          </p>
          <Link 
            href="/" 
            className="aws-button py-3 px-8 rounded-md font-medium text-white text-lg inline-block"
          >
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
}
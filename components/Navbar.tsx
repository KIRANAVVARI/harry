"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">
          Harry ❤️
        </h1>

        <div className="flex gap-6">
          <a href="#about" className="text-sm hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#timeline" className="text-sm hover:text-blue-400 transition-colors">
            Memories
          </a>
          <a href="#gallery" className="text-sm hover:text-blue-400 transition-colors">
            Gallery
          </a>
          <a href="#birthday" className="text-sm hover:text-blue-400 transition-colors">
            Birthday
          </a>
          <a href="#letter" className="text-sm hover:text-blue-400 transition-colors">
            Letter
          </a>
        </div>
      </div>
    </nav>
  );
}
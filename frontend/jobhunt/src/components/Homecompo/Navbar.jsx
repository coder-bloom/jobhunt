import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full max-w-auto z-50 flex items-center justify-between px-6 md:px-10 py-4 shadow-2xl transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } shadow-gray-200`}
    >
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#213b73]">JOB HUNT</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-600 text-lg">
        <li>
          <Link to="/" className="hover:text-[#1A936F]">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#1A936F]">About</Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        <Link to="/login">
          <button className="border-2 border-[#1A936F] rounded text-[#1A936F] px-4 py-2 hover:scale-105 hover:bg-[#188766] hover:text-white transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-[#1A936F] text-white hover:bg-[#34A88A] hover:text-black hover:scale-105 px-4 py-2 rounded transition">
            Register
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-[#213b73]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <Link
            to="/"
            className="text-lg text-gray-600 hover:text-[#1A936F]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-600 hover:text-[#1A936F]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="border-2 border-[#1A936F] rounded text-[#1A936F] px-6 py-2 hover:bg-[#188766] hover:text-white transition">
              Login
            </button>
          </Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            <button className="bg-[#1A936F] text-white hover:bg-[#34A88A] hover:text-black px-6 py-2 rounded transition">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

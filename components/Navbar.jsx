// components/Navbar.js

"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-4">
        {/* Logo */}
        <div>
          <a href="#">
            <Image
              src="/images/medical-equipment-logo.png"
              alt="Medical Equipment Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Brand
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

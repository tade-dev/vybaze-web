
import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Upload", href: "#" },
  { name: "Feedback", href: "#" },
  { name: "Sales Analytics", href: "#" },
  { name: "FAQ", href: "#" },
];

const TopNavbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 z-40">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-pink-600">Vybaze</div>
        <ul className="hidden sm:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-pink-500 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger menu placeholder if needed later */}
      </nav>
    </header>
  );
};

export default TopNavbar;

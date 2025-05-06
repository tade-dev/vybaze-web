
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "#faq" },
];

const APP_STORE_URL = "https://apps.apple.com/app"; // Replace with your actual link

const TopNavbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Handle "FAQ" click to smoothly scroll to FAQ section
  const handleFaqClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`w-full bg-white border-b border-gray-200 fixed top-0 z-40 transition-transform duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/a3d34f09-eebd-4dff-a091-48f9fb1942b6.png" 
              alt="Vybaze Logo" 
              className="h-8 w-auto"
              style={{ maxHeight: '32px' }}
              width="1024"
              height="1024"
            />
          </Link>
        </div>
        <ul className="hidden sm:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li key={item.name} className={`transition-all duration-700`} style={{ transitionDelay: `${index * 100 + 200}ms`, opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)' }}>
              {item.name === "Home" || item.name === "Pricing" ? (
                <Link
                  to={item.href}
                  className="hover:text-pink-500 hover:underline focus:text-pink-600 focus:underline transition-colors duration-200 px-2 py-1 rounded"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={
                    item.name === "FAQ" ? handleFaqClick : undefined
                  }
                  className="hover:text-pink-500 hover:underline focus:text-pink-600 focus:underline transition-colors duration-200 px-2 py-1 rounded"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-md shadow hover:scale-105 active:bg-pink-700 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          Download now
        </a>
      </nav>
    </header>
  );
};

export default TopNavbar;


import { Home, FileMusic, Settings } from "lucide-react";

const nav = [
  { name: "Home", icon: Home, href: "#", active: true },
  { name: "Feedbacks", icon: FileMusic, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];

const MobileNavbar = () => (
  <nav className="fixed inset-x-0 bottom-0 z-30 bg-white border-t border-gray-200 shadow-xl h-16 flex justify-around items-center sm:hidden">
    {nav.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={`flex flex-col items-center justify-center flex-1 h-full transition text-xs font-medium ${
          item.active
            ? "text-pink-500"
            : "text-gray-500 hover:text-pink-400"
        }`}
      >
        <item.icon size={26} className="mb-0.5" />
        {item.name}
      </a>
    ))}
  </nav>
);

export default MobileNavbar;

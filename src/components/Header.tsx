import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Photos", path: "/" },
    { name: "Videos", path: "/videos" },
    { name: "Projects in Progress", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-4">
      <div className="flex justify-between items-center">
        {/* Left side - Brand */}
        <div className="flex flex-col ml-4 sm:ml-8">
          <h1 className="text-xl sm:text-2xl font-light tracking-[0.2em] text-foreground">
            NARENDRA SHARMA
          </h1>
          <p className="text-xs sm:text-sm font-light tracking-[0.15em] text-muted-foreground mt-1">
            Interior Designer
          </p>
        </div>

        {/* Right side - Navigation */}
        <div className="relative">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1  mr-4 sm:mr-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-light tracking-wide transition-colors duration-200 ${
                  currentPath === item.path
                    ? "bg-nav-active text-foreground"
                    : "text-muted-foreground hover:bg-nav-hover hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl px-2 py-1"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            ☰
          </button>
          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-background border rounded shadow-md flex flex-col gap-2 p-4 md:hidden z-50">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-light tracking-wide transition-colors duration-200 ${
                    currentPath === item.path
                      ? "bg-nav-active text-foreground"
                      : "text-muted-foreground hover:bg-nav-hover hover:text-foreground"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
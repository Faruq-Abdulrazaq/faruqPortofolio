"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
    setTheme(current ?? "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Faruq Abdulrazaq home">
          <span className="brand-name">Faruq Abdulrazaq</span>
          <span className="brand-suffix">/ platform.eng</span>
        </a>

        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <a className="nav-link" href="/#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-link" href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a className="nav-link" href="/#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a className="nav-link" href="/#stack" onClick={() => setMenuOpen(false)}>Stack</a>
          <a className="nav-link" href="/blogs" onClick={() => setMenuOpen(false)}>Blog</a>
          <a className="nav-link" href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <button
            className="nav-burger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

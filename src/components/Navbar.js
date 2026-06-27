import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Research', '#research'],
    ['Projects', '#work'],
    ['Contact', '#contact'],
  ];

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.4s ease;
        }
        .nav-root.scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.15);
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2.5rem;
        }
        .nav-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #F8F9FF;
          letter-spacing: -0.03em;
          text-decoration: none;
        }
        .nav-logo span { color: #6366F1; }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 768px) { .nav-links { display: none; } }
        .nav-link {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8892A4;
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #6366F1;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #F8F9FF; }
        .nav-link:hover::after { width: 100%; }
        .hamburger {
          display: none;
          cursor: pointer;
          color: #F8F9FF;
          background: none;
          border: none;
          padding: 0;
        }
        @media (max-width: 768px) { .hamburger { display: block; } }
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 75%;
          max-width: 320px;
          height: 100%;
          background: #0D0D15;
          border-right: 1px solid rgba(99,102,241,0.2);
          z-index: 40;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          padding: 2rem;
        }
        .mobile-drawer.open { transform: translateX(0); }
        .mobile-drawer-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #F8F9FF;
          margin-bottom: 3rem;
          display: block;
        }
        .mobile-drawer-logo span { color: #6366F1; }
        .mobile-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mobile-link {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: #8892A4;
          text-decoration: none;
          display: block;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-link:hover { color: #6366F1; padding-left: 0.5rem; }
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 30;
          backdrop-filter: blur(4px);
        }
      `}</style>

      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">S.Laxshika<span>.</span></a>

          <ul className="nav-links">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>

          <button className="hamburger" onClick={handleNav} aria-label="Toggle menu">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer${nav ? ' open' : ''}`}>
        <span className="mobile-drawer-logo">S.Laxshika<span>.</span></span>
        <ul className="mobile-links">
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} className="mobile-link" onClick={handleNav}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {nav && <div className="overlay" onClick={handleNav} />}
    </>
  );
};

export default Navbar;
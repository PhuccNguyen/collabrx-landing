'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Menu, X, Cloud, Shield } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Team', href: '#team' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Process', href: '#process' },
    { name: 'Security', href: '#security' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <Cloud size={20} color="white" />
            <div className={styles.floatingBadge}>
              <Shield size={8} />
            </div>
          </div>
          <div className={styles.logoText}>
            Collab<span className={styles.logoAccent}>Rx</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navigation}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={styles.navLink}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className={styles.ctaButtons}>
          <a href="#contact" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={styles.mobileNavLink}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className={styles.mobileCtaButtons}>

            <a href="#contact" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

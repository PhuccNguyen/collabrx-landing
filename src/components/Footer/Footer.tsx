'use client';

import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { Cloud, Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from 'lucide-react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const footerLinks = {
    product: [
      { name: 'Platform Overview', href: '#' },
      { name: 'Genomics Analysis', href: '#solutions' },
      { name: 'Clinical Trials', href: '#solutions' },
      { name: 'Security Features', href: '#security' },
    ],
    company: [
      { name: 'About Us', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'News & Press', href: '#' },
      { name: 'Investor Relations', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Integration Guide', href: '#' },
      { name: 'Support Center', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'HIPAA Compliance', href: '#security' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@collabrx.com' },
    { icon: MapPin, label: 'Address', value: 'San Francisco, CA, USA' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  if (!mounted) return null;

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        {/* Newsletter Section */}
        <div className={styles.footerNewsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3 className={styles.newsletterTitle}>
                Stay Updated with CollabRx
              </h3>
              <p className={styles.newsletterDescription}>
                Get the latest insights on healthcare innovation and platform updates.
              </p>
            </div>
            
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                <Send size={16} />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>
                <Cloud size={24} color="white" />
                <div className={styles.footerLogoBadge}>
                  <Shield size={8} color="white" />
                </div>
              </div>
              <div className={styles.footerLogoText}>
                Collab<span className={styles.footerLogoAccent}>Rx</span>
              </div>
            </div>

            <p className={styles.footerDescription}>
              Pioneering the future of healthcare through secure, transparent, and intelligent 
              cloud-based solutions powered by blockchain technology.
            </p>

            {/* Contact Info */}
            <div className={styles.footerContact}>
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className={styles.contactItem}>
                    <IconComponent className={styles.contactIcon} size={16} />
                    <span>{item.value}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className={styles.footerSocial}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Product</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.product.map((link, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={link.href} className={styles.footerLinkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.company.map((link, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={link.href} className={styles.footerLinkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.resources.map((link, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={link.href} className={styles.footerLinkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Legal</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.legal.map((link, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={link.href} className={styles.footerLinkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()} CollabRx. All rights reserved.
            </div>
            
            <div className={styles.footerBottomLinks}>
              <a href="#" className={styles.footerBottomLink}>
                Privacy Policy
              </a>
              <a href="#" className={styles.footerBottomLink}>
                Terms of Service
              </a>
              <a href="#" className={styles.footerBottomLink}>
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

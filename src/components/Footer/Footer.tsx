'use client'

import React from 'react'
import { Cloud, Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: [
      { name: 'Genomics Annotation', href: '#genomics' },
      { name: 'Oncology Support', href: '#oncology' },
      { name: 'Clinical Trials', href: '#trials' },
      { name: 'RWE Analytics', href: '#rwe' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'Whitepapers', href: '#papers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'HIPAA Compliance', href: '#hipaa' },
      { name: 'Security', href: '#security' },
    ]
  }

  return (
    <footer className={styles.footer}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Company Info */}
          <div className={styles.companySection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Cloud className="w-8 h-8 text-primary-500" />
                <Shield className="w-6 h-6 text-primary-500 absolute -top-1 -right-1" />
              </div>
              <span className={styles.logoText}>CollabRx</span>
            </div>
            
            <p className={styles.companyDescription}>
              Pioneering the future of precision medicine through cloud computing 
              and blockchain technology. Secure, transparent, and patient-centric 
              healthcare solutions.
            </p>
            
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={styles.socialLink}>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className={styles.linksGrid}>
            <div className={styles.linkSection}>
              <h3 className={styles.linkTitle}>Solutions</h3>
              <ul className={styles.linkList}>
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3 className={styles.linkTitle}>Company</h3>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3 className={styles.linkTitle}>Resources</h3>
              <ul className={styles.linkList}>
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3 className={styles.linkTitle}>Legal</h3>
              <ul className={styles.linkList}>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className={styles.contactSection}>
            <h3 className={styles.contactTitle}>Get in Touch</h3>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>San Francisco, CA, USA</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className="w-5 h-5 text-primary-500" />
                <span>hello@collabrx.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterDescription}>
                Get the latest insights on precision medicine and blockchain technology.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeButton}>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className={styles.complianceSection}>
          <div className={styles.complianceBadges}>
            <div className={styles.badge}>
              <Shield className="w-5 h-5" />
              <span>HIPAA Compliant</span>
            </div>
            <div className={styles.badge}>
              <Shield className="w-5 h-5" />
              <span>GDPR Ready</span>
            </div>
            <div className={styles.badge}>
              <Shield className="w-5 h-5" />
              <span>SOC 2 Certified</span>
            </div>
            <div className={styles.badge}>
              <Shield className="w-5 h-5" />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© {currentYear} CollabRx. All rights reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="#privacy" className={styles.bottomLink}>Privacy</a>
            <a href="#terms" className={styles.bottomLink}>Terms</a>
            <a href="#cookies" className={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </footer>
  )
}

export default Footer

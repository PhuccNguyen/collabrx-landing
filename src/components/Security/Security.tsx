'use client';

import { useState, useEffect } from 'react';
import styles from './Security.module.css';
import { Lock, Shield, Eye, Award, Key, FileCheck, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  details: string[];
}

const securityFeatures: SecurityFeature[] = [
  {
    id: 'e2e-encryption',
    title: 'End-to-End Encryption',
    description: 'Military-grade AES-256 encryption protecting data at rest, in transit, and during processing with zero-knowledge architecture.',
    icon: Lock,
    color: 'red',
    details: [
      'AES-256 encryption standard',
      'Zero-knowledge architecture',
      'Encrypted data transmission',
      'Secure key management protocols'
    ]
  },
  {
    id: 'compliance',
    title: 'HIPAA/GDPR Compliance',
    description: 'Full compliance with international healthcare privacy regulations and data protection laws with continuous monitoring.',
    icon: Shield,
    color: 'orange',
    details: [
      'HIPAA compliant infrastructure',
      'GDPR data protection compliance',
      'SOC 2 Type II certification',
      'Regular compliance auditing'
    ]
  },
  {
    id: 'audit-trail',
    title: 'Transparent Audit Trail',
    description: 'Immutable blockchain-based audit logs providing complete transparency and forensic investigation capabilities.',
    icon: Eye,
    color: 'yellow',
    details: [
      'Immutable transaction logging',
      'Real-time audit monitoring',
      'Comprehensive access tracking',
      'Forensic investigation tools'
    ]
  },
];

const certifications = [
  { name: 'HIPAA', icon: Shield },
  { name: 'GDPR', icon: Eye },
  { name: 'SOC 2', icon: Award },
  { name: 'ISO 27001', icon: Key },
  { name: 'FIPS 140-2', icon: Lock },
  { name: 'FDA 21 CFR', icon: FileCheck }
];

const securityStats = [
  { 
    value: '99.99%', 
    label: 'Security Uptime',
    description: 'Zero security incidents in 5+ years'
  },
  { 
    value: '256-bit', 
    label: 'Encryption Standard',
    description: 'Military-grade data protection'
  },
  { 
    value: '<1ms', 
    label: 'Threat Detection',
    description: 'Real-time security monitoring'
  }
];

export default function Security() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="security" className={styles.securitySection}>
      <div className={styles.securityContainer}>
        {/* Header */}
        <div className={styles.securityHeader}>
          <div className={styles.securityBadge}>
            <ShieldCheck size={16} />
            Enterprise Security
          </div>
          
          <h2 className={styles.securityTitle}>
            Enterprise-Grade <span className={styles.securityTitleGradient}>Security</span>
          </h2>
          
          <p className={styles.securitySubtitle}>
            Built with security-first principles, our platform ensures the highest levels of data protection, 
            regulatory compliance, and transparent audit trails for complete peace of mind.
          </p>
        </div>

        {/* Security Features */}
        <div className={styles.securityFeatures}>
          {securityFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className={styles.securityFeature}>
                {/* Icon */}
                <div className={`${styles.securityFeatureIcon} ${styles[`icon${feature.color.charAt(0).toUpperCase()}${feature.color.slice(1)}`]}`}>
                  <IconComponent size={36} color="white" />
                </div>

                {/* Content */}
                <div className={styles.securityFeatureContent}>
                  <h3 className={styles.securityFeatureTitle}>{feature.title}</h3>
                  <p className={styles.securityFeatureDescription}>{feature.description}</p>

                  {/* Details */}
                  <ul className={styles.securityFeatureDetails}>
                    {feature.details.map((detail, index) => (
                      <li key={index} className={styles.securityDetailItem}>
                        <div className={`${styles.detailIcon} ${styles[`detailIcon${feature.color.charAt(0).toUpperCase()}${feature.color.slice(1)}`]}`} />
                        <span className={styles.detailText}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className={styles.certificationsSection}>
          <h3 className={styles.certificationsTitle}>
            Certifications & Compliance Standards
          </h3>
          
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className={styles.certificationItem}>
                  <div className={styles.certificationIcon}>
                    <IconComponent size={24} />
                  </div>
                  <div className={styles.certificationName}>{cert.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Statistics */}
        <div className={styles.securityStats}>
          {securityStats.map((stat, index) => (
            <div key={index} className={styles.securityStat}>
              <span className={styles.statValue}>{stat.value}</span>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDescription}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import styles from './ValuePropositions.module.css';
import type { LucideIcon } from 'lucide-react';

import { Link, Shield, Lock, FileCheck, Award } from 'lucide-react';

interface ValueProp {
  id: string;
  title: string;
  description: string;
 icon: LucideIcon;  
color: string;
  features: string[];
}

const valueProps: ValueProp[] = [
  {
    id: 'data-provenance',
    title: 'On-chain Data Provenance',
    description: 'Complete traceability and immutable audit trails for all medical data transactions, ensuring unprecedented transparency and accountability.',
    icon: Link,
    color: 'blue',
    features: [
      'Immutable blockchain ledger tracking',
      'Real-time data lineage visualization',
      'Cryptographic proof of authenticity',
      'Comprehensive audit trail reporting'
    ]
  },
  {
    id: 'consent-service',
    title: 'Consent-as-a-Service',
    description: 'Advanced consent management platform providing patients with granular control over their data usage and sharing permissions.',
    icon: Shield,
    color: 'teal',
    features: [
      'Granular permission controls',
      'Dynamic consent management',
      'Patient-controlled data sharing',
      'Automated compliance monitoring'
    ]
  },
  {
    id: 'privacy-compute',
    title: 'Privacy-first Compute',
    description: 'State-of-the-art encryption and secure multi-party computation protecting sensitive health information throughout processing.',
    icon: Lock,
    color: 'purple',
    features: [
      'Zero-knowledge computation protocols',
      'End-to-end encryption everywhere',
      'Secure multi-party computation',
      'Homomorphic encryption support'
    ]
  },
  {
    id: 'fhir-ready',
    title: 'FHIR & HL7 Ready',
    description: 'Seamless integration with existing healthcare systems through industry-standard protocols and comprehensive API support.',
    icon: FileCheck,
    color: 'orange',
    features: [
      'FHIR R4 full compliance',
      'HL7 message processing',
      'RESTful API architecture',
      'Legacy system integration'
    ]
  },
];

export default function ValuePropositions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="values" className={styles.valueSection}>
      <div className={styles.valueContainer}>
        {/* Header */}
        <div className={styles.valueHeader}>
          <div className={styles.valueBadge}>
            <Award size={16} />
            Core Value Propositions
          </div>
          
          <h2 className={styles.valueTitle}>
            Revolutionary <span className={styles.valueTitleGradient}>Healthcare Technology</span>
          </h2>
          
          <p className={styles.valueSubtitle}>
            Advanced features that position CollabRx at the forefront of healthcare innovation, 
            delivering unmatched security, transparency, and interoperability.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className={styles.valueGrid}>
          {valueProps.map((prop) => {
            const IconComponent = prop.icon;
            return (
              <div key={prop.id} className={styles.valueCard}>
                {/* Icon */}
                <div className={`${styles.valueCardIcon} ${styles[`icon${prop.color.charAt(0).toUpperCase()}${prop.color.slice(1)}`]}`}>
                  <IconComponent size={32} color="white" />
                </div>

                {/* Content */}
                <div className={styles.valueCardContent}>
                  <h3 className={styles.valueCardTitle}>{prop.title}</h3>
                  <p className={styles.valueCardDescription}>{prop.description}</p>

                  {/* Features */}
                  <ul className={styles.valueCardFeatures}>
                    {prop.features.map((feature, index) => (
                      <li key={index} className={styles.valueCardFeature}>
                        <div className={`${styles.featureIcon} ${styles[`featureIcon${prop.color.charAt(0).toUpperCase()}${prop.color.slice(1)}`]}`} />
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className={styles.valueBottom}>
          <h3 className={styles.valueBottomTitle}>
            Enterprise-Ready Integration
          </h3>
          <p className={styles.valueBottomText}>
            All value propositions work seamlessly together to create a comprehensive healthcare 
            technology platform that scales with your organization&apos;s needs while maintaining 
            the highest standards of security and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client'

import React, { useRef } from 'react'
import { Shield, Lock, Eye, FileCheck, Zap, CheckCircle, AlertTriangle, Globe } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import styles from './Security.module.css'

interface SecurityFeature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  compliance: string[]
  gradient: string
  delay: number
}

const securityFeatures: SecurityFeature[] = [
  {
    id: '1',
    icon: <Lock className="w-8 h-8" />,
    title: 'End-to-End Encryption (E2EE)',
    description: 'Military-grade AES-256 encryption protecting data throughout its entire lifecycle, from transmission to storage and processing.',
    details: [
      'AES-256 encryption standard',
      'RSA-4096 key exchange protocol',
      'Perfect Forward Secrecy (PFS)',
      'Hardware Security Module (HSM) integration',
      'Quantum-resistant cryptography preparation'
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL4+'],
    gradient: 'from-blue-500 to-cyan-400',
    delay: 0.1
  },
  {
    id: '2',
    icon: <Shield className="w-8 h-8" />,
    title: 'HIPAA/GDPR Compliance',
    description: 'Comprehensive regulatory compliance framework ensuring adherence to global healthcare privacy standards and data protection laws.',
    details: [
      'HIPAA Security Rule compliance',
      'GDPR Article 32 technical measures',
      'Data minimization principles',
      'Right to be forgotten implementation',
      'Cross-border data transfer safeguards'
    ],
    compliance: ['HIPAA Certified', 'GDPR Compliant', 'SOC 2 Type II'],
    gradient: 'from-primary-500 to-emerald-400',
    delay: 0.2
  },
  {
    id: '3',
    icon: <Eye className="w-8 h-8" />,
    title: 'Transparent Audit Trail',
    description: 'Immutable blockchain-based audit logging providing complete visibility into all data access and processing activities.',
    details: [
      'Blockchain-immutable logs',
      'Real-time activity monitoring',
      'Tamper-proof audit records',
      'Automated compliance reporting',
      'Forensic investigation capabilities'
    ],
    compliance: ['21 CFR Part 11', 'ISO 27001', 'GxP Validated'],
    gradient: 'from-purple-500 to-pink-400',
    delay: 0.3
  }
]

const complianceCertifications = [
  { name: 'HIPAA', description: 'Healthcare data protection', icon: <Shield className="w-5 h-5" /> },
  { name: 'GDPR', description: 'EU data privacy regulation', icon: <Globe className="w-5 h-5" /> },
  { name: 'SOC 2', description: 'Service organization controls', icon: <CheckCircle className="w-5 h-5" /> },
  { name: 'ISO 27001', description: 'Information security standard', icon: <Lock className="w-5 h-5" /> },
  { name: 'FDA 21 CFR Part 11', description: 'Electronic records compliance', icon: <FileCheck className="w-5 h-5" /> },
  { name: 'FedRAMP', description: 'Federal cloud security', icon: <AlertTriangle className="w-5 h-5" /> },
]

const Security: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="security" className={styles.section}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <Shield className="w-5 h-5" />
            <span>Enterprise-Grade Security</span>
          </div>
          <h2 className={styles.title}>
            Uncompromising Security
            <span className="gradient-text"> & Compliance</span>
          </h2>
          <p className={styles.subtitle}>
            Built with security-first architecture, our platform ensures the highest levels of 
            data protection, privacy, and regulatory compliance for healthcare organizations worldwide.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className={styles.featuresGrid}>
          {securityFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -15 }}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.iconContainer} bg-gradient-to-r ${feature.gradient}`}>
                  {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>

              <p className={styles.cardDescription}>{feature.description}</p>

              <div className={styles.detailsList}>
                <h4 className={styles.detailsTitle}>Key Features:</h4>
                {feature.details.map((detail, idx) => (
                  <div key={idx} className={styles.detailItem}>
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className={styles.complianceSection}>
                <h4 className={styles.complianceTitle}>Compliance Standards:</h4>
                <div className={styles.complianceTags}>
                  {feature.compliance.map((standard, idx) => (
                    <span key={idx} className={styles.complianceTag}>
                      {standard}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className={`${styles.cardGlow} bg-gradient-to-r ${feature.gradient}`}></div>
            </motion.div>
          ))}
        </div>

        {/* Security Metrics */}
        <motion.div
          className={styles.metricsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.metricsHeader}>
            <h3 className={styles.metricsTitle}>Security by the Numbers</h3>
            <p className={styles.metricsDescription}>
              Industry-leading security metrics that demonstrate our commitment to protecting your data
            </p>
          </div>
          
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>99.99%</div>
              <div className={styles.metricLabel}>Uptime SLA</div>
              <div className={styles.metricDescription}>Guaranteed availability</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}> 1ms</div>
              <div className={styles.metricLabel}>Threat Detection</div>
              <div className={styles.metricDescription}>Real-time response</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>256-bit</div>
              <div className={styles.metricLabel}>AES Encryption</div>
              <div className={styles.metricDescription}>Military-grade security</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>Zero</div>
              <div className={styles.metricLabel}>Data Breaches</div>
              <div className={styles.metricDescription}>Perfect track record</div>
            </div>
          </div>
        </motion.div>

        {/* Compliance Certifications */}
        <motion.div
          className={styles.certificationsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className={styles.certificationsHeader}>
            <h3 className={styles.certificationsTitle}>Industry Certifications</h3>
            <p className={styles.certificationsDescription}>
              Certified and compliant with the most stringent global standards
            </p>
          </div>
          
          <div className={styles.certificationsGrid}>
            {complianceCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className={styles.certificationCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.certIcon}>
                  {cert.icon}
                </div>
                <h4 className={styles.certName}>{cert.name}</h4>
                <p className={styles.certDescription}>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Architecture Diagram */}
        <motion.div
          className={styles.architectureSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className={styles.architectureHeader}>
            <h3 className={styles.architectureTitle}>Multi-Layer Security Architecture</h3>
          </div>
          
          <div className={styles.architectureLayers}>
            <div className={styles.layer}>
              <div className={styles.layerIcon}>
                <Globe className="w-6 h-6" />
              </div>
              <div className={styles.layerContent}>
                <h4>Application Layer</h4>
                <p>Web application firewall, API security, input validation</p>
              </div>
            </div>
            <div className={styles.layer}>
              <div className={styles.layerIcon}>
                <Lock className="w-6 h-6" />
              </div>
              <div className={styles.layerContent}>
                <h4>Data Layer</h4>
                <p>Encryption at rest, tokenization, data masking</p>
              </div>
            </div>
            <div className={styles.layer}>
              <div className={styles.layerIcon}>
                <Shield className="w-6 h-6" />
              </div>
              <div className={styles.layerContent}>
                <h4>Infrastructure Layer</h4>
                <p>Network segmentation, intrusion detection, DDoS protection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.securityGrid}></div>
        <div className={styles.glowEffect1}></div>
        <div className={styles.glowEffect2}></div>
      </div>
    </section>
  )
}

export default Security

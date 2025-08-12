'use client'

import React, { useRef } from 'react'
import { Shield, Database, Lock, Activity, CheckCircle, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import styles from './ValuePropositions.module.css'

interface ValueProp {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  gradient: string
  delay: number
}

const valueProps: ValueProp[] = [
  {
    id: '1',
    icon: <Database className="w-8 h-8" />,
    title: 'On-chain Data Provenance',
    description: 'Immutable audit trails for all medical data interactions, ensuring complete transparency and accountability in healthcare processes.',
    features: [
      'Blockchain-based data lineage tracking',
      'Cryptographic proof of data integrity',
      'Tamper-proof medical records',
      'Real-time provenance verification'
    ],
    gradient: 'from-blue-500 to-cyan-400',
    delay: 0.1
  },
  {
    id: '2',
    icon: <Shield className="w-8 h-8" />,
    title: 'Consent-as-a-Service',
    description: 'Dynamic, granular consent management with smart contracts that automatically enforce patient privacy preferences.',
    features: [
      'Smart contract-based consent',
      'Granular permission controls',
      'Automated compliance enforcement',
      'Patient-controlled data sharing'
    ],
    gradient: 'from-primary-500 to-emerald-400',
    delay: 0.2
  },
  {
    id: '3',
    icon: <Lock className="w-8 h-8" />,
    title: 'Privacy-first Compute',
    description: 'Advanced encryption and secure multi-party computation ensuring data remains private during processing and analysis.',
    features: [
      'Homomorphic encryption support',
      'Zero-knowledge proof integration',
      'Secure multi-party computation',
      'Private federated learning'
    ],
    gradient: 'from-purple-500 to-pink-400',
    delay: 0.3
  },
  {
    id: '4',
    icon: <Activity className="w-8 h-8" />,
    title: 'FHIR & HL7 Ready',
    description: 'Full interoperability with existing healthcare systems through standardized protocols and seamless integration capabilities.',
    features: [
      'FHIR R4 compliance',
      'HL7 message processing',
      'EMR system integration',
      'API-first architecture'
    ],
    gradient: 'from-orange-500 to-red-400',
    delay: 0.4
  }
]

const ValuePropositions: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="values" className={styles.section}>
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
            <span>Core Value Propositions</span>
          </div>
          <h2 className={styles.title}>
            Revolutionary Healthcare Technology
            <span className="gradient-text"> Built on Trust</span>
          </h2>
          <p className={styles.subtitle}>
            Our platform combines cutting-edge cloud computing with blockchain security 
            to deliver unprecedented transparency, privacy, and interoperability in healthcare.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className={styles.grid}>
          {valueProps.map((prop) => (
            <motion.div
              key={prop.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: prop.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.iconContainer} bg-gradient-to-r ${prop.gradient}`}>
                  {prop.icon}
                </div>
                <h3 className={styles.cardTitle}>{prop.title}</h3>
              </div>
              
              <p className={styles.cardDescription}>{prop.description}</p>
              
              <div className={styles.featureList}>
                {prop.features.map((feature, index) => (
                  <div key={index} className={styles.feature}>
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.cardFooter}>
                <button className={styles.learnMoreButton}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className={styles.statsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Data Integrity</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>256-bit</div>
              <div className={styles.statLabel}>Encryption</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Healthcare Partners</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.glowEffect1}></div>
        <div className={styles.glowEffect2}></div>
        <div className={styles.particleField}></div>
      </div>
    </section>
  )
}

export default ValuePropositions

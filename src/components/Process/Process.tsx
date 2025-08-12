'use client'

import React, { useRef } from 'react'
import { Upload, Cloud, Shield, Download, ArrowRight, CheckCircle, Clock, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import styles from './Process.module.css'

interface ProcessStep {
  id: string
  number: string
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  technologies: string[]
  duration: string
  delay: number
}

const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    icon: <Upload className="w-8 h-8" />,
    title: 'Data Input & Validation',
    description: 'Secure ingestion of healthcare data through multiple channels with comprehensive validation and standardization.',
    details: [
      'Multi-format data ingestion (FHIR, HL7, DICOM)',
      'Real-time data validation and cleansing',
      'Automated quality scoring',
      'Blockchain-based data integrity verification'
    ],
    technologies: ['FHIR R4', 'HL7 MLLP', 'DICOM', 'Smart Contracts'],
    duration: '< 5 minutes',
    delay: 0.1
  },
  {
    id: '2',
    number: '02',
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud-based Analysis',
    description: 'Advanced AI/ML processing in secure cloud environments with distributed computing and privacy preservation.',
    details: [
      'Distributed AI/ML model execution',
      'Homomorphic encryption processing',
      'Federated learning capabilities',
      'Real-time analytics and insights'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Kubernetes', 'NVIDIA GPUs'],
    duration: '2-30 minutes',
    delay: 0.2
  },
  {
    id: '3',
    number: '03',
    icon: <Shield className="w-8 h-8" />,
    title: 'Blockchain Recording',
    description: 'Immutable audit trail creation with smart contract execution and transparent governance protocols.',
    details: [
      'Transaction hash generation',
      'Smart contract execution',
      'Consensus mechanism validation',
      'Immutable audit trail creation'
    ],
    technologies: ['Ethereum', 'IPFS', 'Smart Contracts', 'Zero-Knowledge Proofs'],
    duration: '10-30 seconds',
    delay: 0.3
  },
  {
    id: '4',
    number: '04',
    icon: <Download className="w-8 h-8" />,
    title: 'Results & Reporting',
    description: 'Comprehensive report generation with actionable insights, compliance documentation, and secure delivery.',
    details: [
      'Interactive dashboard generation',
      'PDF/API report delivery',
      'Compliance documentation',
      'Secure result transmission'
    ],
    technologies: ['React Dashboards', 'PDF Generation', 'RESTful APIs', 'OAuth 2.0'],
    duration: '< 2 minutes',
    delay: 0.4
  }
]

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="process" className={styles.section}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <Zap className="w-5 h-5" />
            <span>Streamlined Workflow</span>
          </div>
          <h2 className={styles.title}>
            From Data to Insights:
            <span className="gradient-text"> Our 4-Step Process</span>
          </h2>
          <p className={styles.subtitle}>
            Experience seamless healthcare data processing through our optimized workflow 
            that ensures security, compliance, and rapid insights delivery.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className={styles.processFlow}>
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.stepContainer}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: step.delay }}
            >
              {/* Step Card */}
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepIconContainer}>
                    {step.icon}
                  </div>
                </div>
                
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  {/* Duration Badge */}
                  <div className={styles.durationBadge}>
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                  
                  {/* Details */}
                  <div className={styles.detailsList}>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className={styles.detailItem}>
                        <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className={styles.technologiesSection}>
                    <h4 className={styles.techTitle}>Technologies Used:</h4>
                    <div className={styles.techTags}>
                      {step.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Card Glow Effect */}
                <div className={styles.cardGlow}></div>
              </div>
              
              {/* Connection Arrow */}
              {index < processSteps.length - 1 && (
                <div className={styles.connectionArrow}>
                  <ArrowRight className="w-6 h-6 text-primary-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          className={styles.benefitsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.benefitsHeader}>
            <h3 className={styles.benefitsTitle}>Why Our Process Works</h3>
            <p className={styles.benefitsDescription}>
              Built for healthcare professionals who demand reliability, security, and speed.
            </p>
          </div>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Zap className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className={styles.benefitTitle}>Lightning Fast</h4>
              <p className={styles.benefitDescription}>
                Complete analysis cycles in under 30 minutes with parallel processing
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Shield className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className={styles.benefitTitle}>Enterprise Security</h4>
              <p className={styles.benefitDescription}>
                Military-grade encryption with blockchain immutability
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <CheckCircle className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className={styles.benefitTitle}>100% Compliance</h4>
              <p className={styles.benefitDescription}>
                HIPAA, GDPR, and FDA-compliant by design
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.waveEffect1}></div>
        <div className={styles.waveEffect2}></div>
        <div className={styles.gridOverlay}></div>
      </div>
    </section>
  )
}

export default Process

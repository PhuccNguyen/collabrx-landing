'use client'

import React, { useRef } from 'react'
import { Dna, Brain, Users, TrendingUp, ArrowRight, Sparkles, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import styles from './Solutions.module.css'

interface Solution {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  keyFeatures: string[]
  benefits: string[]
  useCases: string[]
  gradient: string
  delay: number
}

const solutions: Solution[] = [
  {
    id: '1',
    icon: <Dna className="w-10 h-10" />,
    title: 'Genomics Annotation',
    description: 'AI-powered genomic data analysis with blockchain-verified annotations for precise genetic insights and personalized treatment recommendations.',
    keyFeatures: [
      'Multi-omics data integration',
      'AI-driven variant classification',
      'Population genetics analysis',
      'Real-time annotation updates'
    ],
    benefits: [
      'Faster diagnosis accuracy',
      '40% reduction in analysis time',
      'Improved treatment precision',
      'Enhanced research insights'
    ],
    useCases: [
      'Rare disease diagnosis',
      'Pharmacogenomics testing',
      'Cancer genome profiling',
      'Hereditary risk assessment'
    ],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    id: '2',
    icon: <Brain className="w-10 h-10" />,
    title: 'Oncology Decision Support',
    description: 'Comprehensive cancer treatment optimization using machine learning algorithms and real-world evidence to guide clinical decisions.',
    keyFeatures: [
      'Treatment pathway optimization',
      'Drug interaction analysis',
      'Outcome prediction modeling',
      'Clinical trial matching'
    ],
    benefits: [
      'Personalized treatment plans',
      '30% better patient outcomes',
      'Reduced adverse effects',
      'Evidence-based decisions'
    ],
    useCases: [
      'Treatment protocol selection',
      'Drug dosage optimization',
      'Combination therapy planning',
      'Resistance prediction'
    ],
    gradient: 'from-primary-500 via-emerald-500 to-teal-500',
    delay: 0.2
  },
  {
    id: '3',
    icon: <Users className="w-10 h-10" />,
    title: 'Clinical Trial Matching',
    description: 'Intelligent patient-trial matching system leveraging blockchain-verified patient data and AI-powered eligibility screening.',
    keyFeatures: [
      'Automated eligibility screening',
      'Real-time trial updates',
      'Geographic optimization',
      'Consent management'
    ],
    benefits: [
      'Faster patient enrollment',
      '60% improved matching accuracy',
      'Reduced screening costs',
      'Better trial diversity'
    ],
    useCases: [
      'Patient recruitment',
      'Eligibility assessment',
      'Protocol optimization',
      'Site selection'
    ],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    delay: 0.3
  },
  {
    id: '4',
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'RWE Analytics',
    description: 'Real-World Evidence analytics platform providing comprehensive insights from diverse healthcare data sources with privacy preservation.',
    keyFeatures: [
      'Multi-source data aggregation',
      'Privacy-preserving analytics',
      'Longitudinal studies',
      'Comparative effectiveness'
    ],
    benefits: [
      'Comprehensive insights',
      '50% faster evidence generation',
      'Regulatory compliance',
      'Market access support'
    ],
    useCases: [
      'Post-market surveillance',
      'Health economics research',
      'Regulatory submissions',
      'Comparative studies'
    ],
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
    delay: 0.4
  }
]

const Solutions: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="solutions" className={styles.section}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <Sparkles className="w-5 h-5" />
            <span>Advanced Healthcare Solutions</span>
          </div>
          <h2 className={styles.title}>
            Transforming Healthcare with
            <span className="gradient-text"> AI-Powered Solutions</span>
          </h2>
          <p className={styles.subtitle}>
            Our comprehensive suite of solutions leverages cutting-edge AI, blockchain technology, 
            and cloud computing to revolutionize precision medicine and healthcare delivery.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={styles.solutionCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: solution.delay }}
              whileHover={{ y: -15 }}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.iconContainer} bg-gradient-to-r ${solution.gradient}`}>
                  {solution.icon}
                </div>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
              </div>

              <p className={styles.cardDescription}>{solution.description}</p>

              <div className={styles.tabContainer}>
                <div className={styles.tabs}>
                  <div className={`${styles.tab} ${styles.active}`}>Features</div>
                </div>
                
                <div className={styles.tabContent}>
                  <div className={styles.featureGrid}>
                    {solution.keyFeatures.map((feature, idx) => (
                      <div key={idx} className={styles.featureItem}>
                        <Zap className="w-4 h-4 text-primary-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.metricsSection}>
                <h4 className={styles.metricsTitle}>Key Benefits</h4>
                <div className={styles.metricsList}>
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className={styles.metric}>
                      <div className={styles.metricDot}></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.ctaButton}>
                  <span>Explore Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Card Background Effects */}
              <div className={`${styles.cardGlow} bg-gradient-to-r ${solution.gradient}`}></div>
            </motion.div>
          ))}
        </div>

        {/* Integration Showcase */}
        <motion.div
          className={styles.integrationShowcase}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={styles.showcaseHeader}>
            <h3 className={styles.showcaseTitle}>
              Seamless Integration Ecosystem
            </h3>
            <p className={styles.showcaseDescription}>
              All solutions work together in a unified platform with standardized APIs 
              and blockchain-verified data flows.
            </p>
          </div>
          
          <div className={styles.integrationFlow}>
            <div className={styles.flowStep}>
              <div className={styles.stepIcon}>
                <Dna className="w-6 h-6" />
              </div>
              <span>Data Input</span>
            </div>
            <div className={styles.flowArrow}>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepIcon}>
                <Brain className="w-6 h-6" />
              </div>
              <span>AI Analysis</span>
            </div>
            <div className={styles.flowArrow}>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepIcon}>
                <Users className="w-6 h-6" />
              </div>
              <span>Clinical Decision</span>
            </div>
            <div className={styles.flowArrow}>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepIcon}>
                <TrendingUp className="w-6 h-6" />
              </div>
              <span>Outcome Tracking</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.meshGradient1}></div>
        <div className={styles.meshGradient2}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
    </section>
  )
}

export default Solutions

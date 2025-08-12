'use client';

import { useState, useEffect } from 'react';
import styles from './Solutions.module.css';
import type { LucideIcon } from 'lucide-react';

import { Dna, Stethoscope, Users, BarChart3, ArrowRight, Beaker } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon; 
    color: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    id: 'genomics',
    title: 'Genomics Annotation',
    subtitle: 'AI-Powered Genetic Analysis',
    description: 'Advanced genomic analysis with AI-powered annotations for personalized medicine insights and precision treatment recommendations.',
    icon: Dna,
    color: 'dna',
    features: [
      'Whole genome sequencing analysis',
      'Variant interpretation & significance',
      'Pharmacogenomics recommendations',
      'Population genetics insights'
    ]
  },
  {
    id: 'oncology',
    title: 'Oncology Decision Support',
    subtitle: 'Comprehensive Cancer Care',
    description: 'Intelligent cancer care decision support system powered by real-world evidence and clinical guidelines integration.',
    icon: Stethoscope,
    color: 'stethoscope',
    features: [
      'Treatment protocol recommendations',
      'Drug interaction analysis',
      'Outcome prediction modeling',
      'Clinical guideline integration'
    ]
  },
  {
    id: 'clinical-trials',
    title: 'Clinical Trial Matching',
    subtitle: 'Intelligent Patient Matching',
    description: 'Advanced patient-trial matching system optimizing clinical research participation and accelerating drug discovery.',
    icon: Users,
    color: 'users',
    features: [
      'Patient eligibility screening',
      'Automated trial recommendations',
      'Geographic proximity matching',
      'Real-time trial updates'
    ]
  },
  {
    id: 'rwe-analytics',
    title: 'RWE Analytics',
    subtitle: 'Real-World Evidence Platform',
    description: 'Comprehensive real-world evidence analytics platform for population health insights and regulatory compliance.',
    icon: BarChart3,
    color: 'chart',
    features: [
      'Population health analytics',
      'Treatment effectiveness analysis',
      'Cost-benefit assessments',
      'Regulatory compliance reporting'
    ]
  },
];

export default function Solutions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="solutions" className={styles.solutionsSection}>
      <div className={styles.solutionsContainer}>
        {/* Header */}
        <div className={styles.solutionsHeader}>
          <div className={styles.solutionsBadge}>
            <Beaker size={16} />
            Healthcare Solutions
          </div>
          
          <h2 className={styles.solutionsTitle}>
            Comprehensive <span className={styles.solutionsTitleGradient}>AI-Powered Solutions</span>
          </h2>
          
          <p className={styles.solutionsSubtitle}>
            Revolutionary healthcare solutions designed to transform patient care, accelerate research, 
            and optimize clinical outcomes through advanced AI and blockchain technology.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className={styles.solutionsGrid}>
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div key={solution.id} className={styles.solutionCard}>
                {/* Header */}
                <div className={styles.solutionCardHeader}>
                  <div className={`${styles.solutionCardIcon} ${styles[`icon${solution.color.charAt(0).toUpperCase()}${solution.color.slice(1)}`]}`}>
                    <IconComponent size={36} color="white" />
                  </div>
                  
                  <div className={styles.solutionCardHeaderText}>
                    <h3 className={styles.solutionCardTitle}>{solution.title}</h3>
                    <p className={styles.solutionCardSubtitle}>{solution.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.solutionCardContent}>
                  <p className={styles.solutionCardDescription}>
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className={styles.solutionCardFeatures}>
                    <h4 className={styles.solutionCardFeaturesTitle}>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {solution.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <div className={`${styles.featureIcon} ${styles[`featureIcon${solution.color.charAt(0).toUpperCase()}${solution.color.slice(1)}`]}`} />
                          <span className={styles.featureText}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <a href={`#${solution.id}`} className={styles.solutionCardAction}>
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className={styles.solutionsBottom}>
          <h3 className={styles.solutionsBottomTitle}>
            Integrated Healthcare Ecosystem
          </h3>
          <p className={styles.solutionsBottomText}>
            All solutions work seamlessly together, creating a unified healthcare technology platform 
            that scales with your organization while maintaining the highest standards of security, 
            compliance, and performance. Experience the future of precision medicine today.
          </p>
          <a href="#contact" className={styles.solutionsBottomAction}>
            Request Demo
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

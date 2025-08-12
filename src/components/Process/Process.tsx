'use client';

import { useState, useEffect } from 'react';
import styles from './Process.module.css';
import { Upload, Cloud, Shield, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: LucideIcon; 
  color: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 'data-input',
    number: 1,
    title: 'Secure Data Input',
    description: 'Secure ingestion of medical data from multiple sources with automated validation, quality checks, and compliance verification.',
    icon: Upload,
    color: 'blue',
    details: [
      'FHIR-compliant data ingestion',
      'Real-time validation protocols',
      'Multi-format support (HL7, DICOM)',
      'Automated quality assurance'
    ]
  },
  {
    id: 'cloud-analysis',
    title: 'AI-Powered Cloud Analysis',
    number: 2,
    description: 'Advanced AI-powered analysis leveraging scalable cloud infrastructure for rapid insights and predictive modeling.',
    icon: Cloud,
    color: 'teal',
    details: [
      'Machine learning algorithms',
      'Scalable processing power',
      'Real-time analytics engine',
      'Predictive modeling capabilities'
    ]
  },
  {
    id: 'blockchain-recording',
    number: 3,
    title: 'Blockchain Recording & Output',
    description: 'Immutable blockchain recording ensuring complete data provenance while generating comprehensive, actionable reports.',
    icon: Shield,
    color: 'green',
    details: [
      'Immutable audit trails',
      'Cryptographic security protocols',
      'Consensus verification',
      'Transparent transaction logging'
    ]
  },
];

const metrics = [
  { value: '<2 sec', label: 'Average Processing Time' },
  { value: '99.99%', label: 'Data Accuracy Rate' },
  { value: '100%', label: 'Audit Trail Coverage' },
  { value: '24/7', label: 'System Availability' }
];

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="process" className={styles.processSection}>
      <div className={styles.processContainer}>
        {/* Header */}
        <div className={styles.processHeader}>
          <div className={styles.processBadge}>
            <Workflow size={16} />
            Process Workflow
          </div>
          
          <h2 className={styles.processTitle}>
            How Our <span className={styles.processTitleGradient}>Platform Works</span>
          </h2>
          
          <p className={styles.processSubtitle}>
            A streamlined three-step process that transforms healthcare data into actionable insights 
            while maintaining the highest security standards and regulatory compliance throughout.
          </p>
        </div>

        {/* Process Flow */}
        <div className={styles.processFlow}>
          <div className={styles.processConnection} />
          
          <div className={styles.processSteps}>
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className={styles.processStep}>
                  {/* Step Number */}
                  <div className={`${styles.processStepNumber} ${styles[`number${step.color.charAt(0).toUpperCase()}${step.color.slice(1)}`]}`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`${styles.processStepIcon} ${styles[`icon${step.color.charAt(0).toUpperCase()}${step.color.slice(1)}`]}`}>
                    <IconComponent size={36} color="white" />
                  </div>

                  {/* Content */}
                  <div className={styles.processStepContent}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepDescription}>{step.description}</p>

                    {/* Details */}
                    <ul className={styles.processStepDetails}>
                      {step.details.map((detail, index) => (
                        <li key={index} className={styles.processDetailItem}>
                          <div className={`${styles.detailIcon} ${styles[`detailIcon${step.color.charAt(0).toUpperCase()}${step.color.slice(1)}`]}`} />
                          <span className={styles.detailText}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Metrics */}
        <div className={styles.processMetrics}>
          <h3 className={styles.processMetricsTitle}>
            Performance Metrics
          </h3>
          
          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <div key={index} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

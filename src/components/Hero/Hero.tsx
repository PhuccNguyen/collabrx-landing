'use client'

import React from 'react'
import { ArrowRight, Play, Cloud, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'
import styles from './Hero.module.css'

const CloudBlockchainScene = dynamic(
  () => import('../3D/CloudBlockchainScene'),
  { ssr: false }
)

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <Cloud className="w-4 h-4" />
              <span>Next-Gen Healthcare Technology</span>
            </div>
            
            <h1 className={styles.title}>
              <span className="gradient-text">Cloud & Blockchain</span>
              <br />
              for Precision Medicine
            </h1>
            
            <p className={styles.description}>
              Transform healthcare with our cutting-edge platform that combines 
              cloud computing power and blockchain security to deliver personalized, 
              transparent, and secure medical solutions.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <Zap className="w-5 h-5 text-primary-500" />
                <span>Real-time Analytics</span>
              </div>
              <div className={styles.feature}>
                <Cloud className="w-5 h-5 text-primary-500" />
                <span>Cloud-Native Architecture</span>
              </div>
            </div>
            
            <div className={styles.cta}>
              <button className={styles.primaryButton}>
                <span>Request Demo</span>
                <Play className="w-5 h-5" />
              </button>
              <button className={styles.secondaryButton}>
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Right 3D Scene */}
          <div className={styles.sceneContainer}>
            <CloudBlockchainScene />
            <div className={styles.floatingElements}>
              <div className={`${styles.floatingElement} ${styles.element1}`}>
                <Cloud className="w-6 h-6 text-primary-500" />
              </div>
              <div className={`${styles.floatingElement} ${styles.element2}`}>
                <Zap className="w-6 h-6 text-primary-500" />
              </div>
              <div className={`${styles.floatingElement} ${styles.element3}`}>
                <Cloud className="w-6 h-6 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowEffect1}></div>
        <div className={styles.glowEffect2}></div>
      </div>
    </section>
  )
}

export default Hero

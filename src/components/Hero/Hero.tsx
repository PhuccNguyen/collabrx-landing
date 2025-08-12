'use client';

import { Suspense, useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import để tránh SSR issues
const CloudBlockchainScene = dynamic(
  () => import('@/components/3D/CloudBlockchainScene'),
  { 
    ssr: false,
    loading: () => (
      <div className={styles.sceneLoader}>
        <div className={styles.loaderPulse} />
      </div>
    )
  }
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Header Spacer để không bị che */}
      <div className={styles.headerSpacer} />
      
      {/* Enhanced 3D Background - Làm nổi bật hơn */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundGlow} />
        {mounted && (
          <Suspense 
            fallback={
              <div className={styles.sceneFallback}>
                <div className={styles.fallbackGradient} />
              </div>
            }
          >
            <CloudBlockchainScene />
          </Suspense>
        )}
      </div>
      
      {/* Improved Overlay */}
      <div className={styles.heroOverlay} />
      
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Enhanced Badge */}
          <div className={styles.heroBadge}>
            <div className={styles.heroIndicator} />
            <span>Revolutionary Healthcare Technology Platform</span>
          </div>

          {/* Enhanced Title */}
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Cloud & Blockchain</span>
            <span 
              className={styles.heroTitleGradient}
              data-text="for Precision Medicine"
            >
              for Precision Medicine
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className={styles.heroSubtitle}>
            Revolutionizing healthcare through secure, transparent, and intelligent 
            cloud-based solutions powered by blockchain technology. Transform patient 
            care with unparalleled data security and precision medicine insights.
          </p>

          {/* Enhanced Action Buttons */}
          <div className={styles.heroActions}>
            <a 
              href="#about" 
              className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
            >
              Explore Solutions
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Enhanced Statistics Grid */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>500K+</span>
              <span className={styles.heroStatLabel}>Patients Served</span>
              <div className={styles.statGlow} />
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>99.99%</span>
              <span className={styles.heroStatLabel}>System Uptime</span>
              <div className={styles.statGlow} />
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>256-bit</span>
              <span className={styles.heroStatLabel}>Encryption</span>
              <div className={styles.statGlow} />
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>100%</span>
              <span className={styles.heroStatLabel}>HIPAA Compliant</span>
              <div className={styles.statGlow} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './FounderTeam.module.css';
import { Crown, Linkedin, Mail, Twitter, Users, Award, Star, Globe } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  organization: string;
  image: string;
  isFounder?: boolean;
  isHighlighted?: boolean;
  quote: string;
  expertise: string[];
  yearsExperience?: number;
}

const teamMembers: TeamMember[] = [
  {
    id: 'marty-tenenbaum',
    name: 'Marty Tenenbaum',
    title: 'Founder & CEO',
    organization: 'CollabRx',
    image: '/image/MartyTenenbaum.png',
    isFounder: true,
    isHighlighted: true,
    quote: 'Leading the revolution in precision medicine through innovative blockchain solutions.',
    expertise: ['Precision Medicine', 'Healthcare Innovation', 'Strategic Leadership'],
    yearsExperience: 25
  },
  {
    id: 'robert-pham',
    name: 'Robert Pham',
    title: 'Asia Development Director',
    organization: 'CollabRx',
    image: '/image/RobertPham.png',
    isHighlighted: true,
    quote: 'Expanding our mission across Asia-Pacific to transform global healthcare delivery.',
    expertise: ['Business Development', 'Market Expansion', 'Partnership Strategy'],
    yearsExperience: 18
  },
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'Chief Medical Officer',
    organization: 'CollabRx',
    image: '/image/Person3.png',
    quote: 'Ensuring clinical excellence and patient safety in every technological innovation.',
    expertise: ['Clinical Research', 'Medical Affairs', 'Regulatory Compliance'],
    yearsExperience: 22
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    title: 'Head of Blockchain Engineering',
    organization: 'CollabRx',
    image: '/image/Person4.png',
    quote: 'Building the most secure and scalable healthcare blockchain infrastructure.',
    expertise: ['Blockchain Architecture', 'Smart Contracts', 'Cryptography'],
    yearsExperience: 15
  },
  {
    id: 'emma-johnson',
    name: 'Emma Johnson',
    title: 'VP of Clinical Operations',
    organization: 'CollabRx',
    image: '/image/Person5.png',
    quote: 'Streamlining clinical workflows to deliver better patient outcomes worldwide.',
    expertise: ['Clinical Operations', 'Process Optimization', 'Quality Assurance'],
    yearsExperience: 20
  },
];

export default function FounderTeam() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="team" className={styles.teamSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb} style={{ '--delay': '0s' } as React.CSSProperties} />
        <div className={styles.floatingOrb} style={{ '--delay': '2s' } as React.CSSProperties} />
        <div className={styles.floatingOrb} style={{ '--delay': '4s' } as React.CSSProperties} />
      </div>

      <div className={styles.teamContainer}>
        {/* Enhanced Header */}
        <div className={styles.teamHeader}>
          <div className={styles.teamBadge}>
            <div className={styles.badgeGlow} />
            <Users size={16} />
            <span>Leadership Excellence</span>
          </div>
          
          <h2 className={styles.teamTitle}>
            Meet Our{' '}
            <span className={styles.teamTitleGradient}>
              Visionary Leaders
            </span>
          </h2>
          
          <p className={styles.teamSubtitle}>
            Pioneering the convergence of Cloud Computing and Blockchain Technology 
            to revolutionize precision medicine and transform healthcare delivery globally.
          </p>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <Award size={20} />
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Years Combined</span>
            </div>
            <div className={styles.statItem}>
              <Star size={20} />
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Awards</span>
            </div>
            <div className={styles.statItem}>
              <Globe size={20} />
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>

        {/* Enhanced Team Grid */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`
                ${styles.memberCard} 
                ${member.isHighlighted ? styles.memberCardHighlighted : ''}
                ${activeCard === member.id ? styles.memberCardActive : ''}
              `}
              onMouseEnter={() => setActiveCard(member.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              {/* Card Background Glow */}
              <div className={styles.cardGlow} />

              {/* Founder Badge */}
              {member.isFounder && (
                <div className={styles.founderBadge}>
                  <Crown size={14} />
                  <span>Founder</span>
                </div>
              )}

              {/* Experience Badge */}
              {member.yearsExperience && (
                <div className={styles.experienceBadge}>
                  {member.yearsExperience}+ Years
                </div>
              )}

              {/* Member Image */}
              <div className={styles.memberImageContainer}>
                <div className={styles.imageGlow} />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                  sizes="(max-width: 480px) 80px, (max-width: 768px) 100px, 120px"
                  priority={index < 3}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Member Info */}
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
                <p className={styles.memberOrganization}>{member.organization}</p>

                {/* Expertise Tags */}
                <div className={styles.expertiseTags}>
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className={styles.expertiseTag}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <div className={styles.memberQuote}>
                  <div className={styles.quoteIcon}> &apos;  </div>
                  <p>{member.quote}</p>
                </div>

                {/* Social Links */}
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Twitter">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Email">
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={styles.hoverOverlay} />
            </div>
          ))}
        </div>

        {/* Enhanced Vision Section */}
        <div className={styles.visionSection}>
          <div className={styles.visionBackground} />
          <div className={styles.visionContent}>
            <div className={styles.visionIcon}>
              <Users size={32} />
            </div>
            <h3 className={styles.visionTitle}>Our Collective Vision</h3>
            <p className={styles.visionText}>
              We envision a future where{' '}
              <span className={styles.visionHighlight}>Cloud and Blockchain technologies</span>{' '}
              unite to deliver personalized medical treatments while ensuring complete data security 
              and transparency. Our mission is to revolutionize healthcare delivery through 
              cutting-edge technology that puts{' '}
              <span className={styles.visionHighlight}>patient privacy and outcomes first</span>, 
              creating a global ecosystem of precision medicine accessible to all.
            </p>
            
            <div className={styles.visionStats}>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNumber}>500K+</span>
                <span className={styles.visionStatLabel}>Lives Impacted</span>
              </div>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNumber}>15+</span>
                <span className={styles.visionStatLabel}>Countries</span>
              </div>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNumber}>99.9%</span>
                <span className={styles.visionStatLabel}>Security Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

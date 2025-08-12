'use client'

import React from 'react'
import Image from 'next/image'
import { Linkedin, Mail, Globe } from 'lucide-react'
import styles from './FounderTeam.module.css'

interface TeamMember {
    id: string
    name: string
    title: string
    organization?: string
    image: string
    isFounder?: boolean
    isHighlighted?: boolean
    linkedin?: string
    email?: string
    website?: string
}

const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Marty Tenenbaum',
        title: 'Founder & CEO',
        organization: 'CollabRx',
        image: '/image/MartyTenenbaum.png',
        isFounder: true,
        isHighlighted: true,
        linkedin: '#',
        email: 'marty@collabrx.com',
    },
    {
        id: '2',
        name: 'Robert Phạm',
        title: 'Asia Development Director',
        organization: 'CollabRx',
        image: '/image/RobertPham.png',
        isHighlighted: true,
        linkedin: '#',
        email: 'robert@collabrx.com',
    },
    {
        id: '3',
        name: 'Dr. Sarah Chen',
        title: 'Chief Medical Officer',
        organization: 'CollabRx',
        image: '/image/Person3.png',
        linkedin: '#',
    },
    {
        id: '4',
        name: 'Michael Rodriguez',
        title: 'Head of Engineering',
        organization: 'CollabRx',
        image: '/image/Person4.png',
        linkedin: '#',
    },
    {
        id: '5',
        name: 'Dr. Emily Watson',
        title: 'VP of Research & Innovation',
        organization: 'CollabRx',
        image: '/image/Person5.png',
        linkedin: '#',
    },
]

const FounderTeam: React.FC = () => {
    return (
        <section id="team" className={styles.section}>
            <div className="container-custom">
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Meet Our <span className="gradient-text">Visionary Team</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Led by industry pioneers applying Cloud + Blockchain to personalize
                        treatment, secure medical data, and ensure transparent healthcare delivery
                    </p>
                </div>

                {/* Highlighted Founders */}
                <div className={styles.foundersGrid}>
                    {teamMembers
                        .filter(member => member.isHighlighted)
                        .map((member) => (
                            <div key={member.id} className={styles.founderCard}>
                                <div className={styles.founderImageContainer}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={styles.founderImage}
                                        />
                                    </div>
                                    <div className={styles.founderGlow}></div>
                                </div>

                                <div className={styles.founderInfo}>
                                    <h3 className={styles.founderName}>{member.name}</h3>
                                    <p className={styles.founderTitle}>{member.title}</p>
                                    {member.organization && (
                                        <p className={styles.founderOrg}>{member.organization}</p>
                                    )}

                                    <div className={styles.founderSocials}>
                                        {member.linkedin && (
                                            <a href={member.linkedin} className={styles.socialLink}>
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} className={styles.socialLink}>
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Vision Statement */}
                <div className={styles.visionStatement}>
                    <div className={styles.visionContent}>
                        <h3 className={styles.visionTitle}>Our Vision</h3>
                        <blockquote className={styles.visionQuote}>
                            &quot;Harnessing Cloud + Blockchain to personalize treatment protocols,
                            secure patient data integrity, and create transparent healthcare ecosystems
                            that put patients first while advancing medical innovation.&quot;
                        </blockquote>

                    </div>
                </div>

                {/* Full Team Grid */}
                <div className={styles.teamGrid}>
                    <h3 className={styles.teamSectionTitle}>Complete Leadership Team</h3>
                    <div className={styles.teamCards}>
                        {teamMembers.map((member) => (
                            <div key={member.id} className={styles.teamCard}>
                                <div className={styles.teamImageContainer}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className={styles.teamImage}
                                    />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h4 className={styles.teamName}>{member.name}</h4>
                                    <p className={styles.teamTitle}>{member.title}</p>
                                    {member.organization && (
                                        <p className={styles.teamOrg}>{member.organization}</p>
                                    )}
                                    <div className={styles.teamSocials}>
                                        {member.linkedin && (
                                            <a href={member.linkedin} className={styles.teamSocialLink}>
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderTeam

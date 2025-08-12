'use client';

import { useEffect } from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import FounderTeam from '@/components/FounderTeam/FounderTeam';
import ValuePropositions from '@/components/ValuePropositions/ValuePropositions';
import Solutions from '@/components/Solutions/Solutions';
import Process from '@/components/Process/Process';
import Security from '@/components/Security/Security';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <FounderTeam />
      <ValuePropositions />
      <Solutions />
      <Process />
      <Security />
      <Footer />
    </main>
  );
}

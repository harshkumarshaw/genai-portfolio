'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './ResumeSystem.module.css';

const resumes = [
  {
    role: "GenAI Engineer",
    target: "AI Startups, ML Teams",
    strengths: [
      "LangGraph & Claude API",
      "NL2BQ enterprise AI",
      "Agentic workflows"
    ],
    updated: "April 2026",
    link: "/resume/harsh-kumar-shaw-genai.pdf"
  },
  {
    role: "Data Science & AI Researcher",
    target: "Research Labs, Healthcare",
    strengths: [
      "PyTorch & Deep Learning",
      "HCC-AI drug discovery",
      "Published research methodology"
    ],
    updated: "April 2026",
    link: "/resume/harsh-kumar-shaw-research.pdf"
  },
  {
    role: "Full-Stack AI Engineer",
    target: "Product Teams, SaaS",
    strengths: [
      "NL2BQ & VaultCall",
      "Backend & infrastructure",
      "AI system architecture"
    ],
    updated: "April 2026",
    link: "/resume/harsh-kumar-shaw-fullstack.pdf"
  }
];

export default function ResumeSystem() {
  return (
    <section id="resume" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Resume" subtitle="Tailored for the role" />
        
        <div className={styles.resumeGrid}>
          {resumes.map((resume, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={styles.resumeCard}
            >
              <div className={styles.header}>
                <h3 className={styles.role}>{resume.role}</h3>
                <div className={styles.target}>Best for: {resume.target}</div>
              </div>
              
              <ul className={styles.strengths}>
                {resume.strengths.map((strength, i) => (
                  <li key={i}>{strength}</li>
                ))}
              </ul>
              
              <div className={styles.footer}>
                <div className={styles.updated}>Updated: {resume.updated}</div>
                <Button href={resume.link} variant="outline" className={styles.downloadBtn}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={styles.downloadIcon}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download PDF
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

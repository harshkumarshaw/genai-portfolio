'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import CategoryTabs from '@/components/ui/CategoryTabs';
import ProjectCard from '@/components/ui/ProjectCard';
import FlagshipCard from '@/components/ui/FlagshipCard';
import styles from './FeaturedProjects.module.css';
import projectsData from '@/data/projects.json';

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = ['All', 'AI Systems', 'Full Stack', 'Research'];
  
  const filteredProjects = projectsData.filter(project => 
    activeTab === 'All' ? true : project.category === activeTab
  );

  // The first project of the filtered list becomes the flagship (if we want to dynamically assign it)
  // Or we can designate a specific project as flagship in the data.
  // Assuming the first project in 'projectsData' is always the flagship when 'All' is selected.
  const flagshipProject = projectsData.find(p => p.isFlagship);
  
  // If we are on 'All', show the flagship specifically, then the rest.
  // If we are on a specific tab, check if the flagship matches that tab.
  const showFlagship = flagshipProject && (activeTab === 'All' || flagshipProject.category === activeTab);
  
  const regularProjects = filteredProjects.filter(p => p.id !== (flagshipProject?.id));

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Moving from experimentation to deployment" 
        />
        
        <CategoryTabs 
          categories={categories}
          activeCategory={activeTab}
          onSelect={setActiveTab}
        />
        
        <motion.div 
          layout
          className={styles.projectsGrid}
        >
          {showFlagship && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={styles.flagshipWrapper}
            >
              <FlagshipCard project={flagshipProject} />
            </motion.div>
          )}
          
          <div className={styles.grid}>
            {regularProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

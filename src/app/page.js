import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatImSolving from '@/components/sections/WhatImSolving';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Experience from '@/components/sections/Experience';
import Research from '@/components/sections/Research';
import BuildTimeline from '@/components/sections/BuildTimeline';
import Skills from '@/components/sections/Skills';
import ResumeSystem from '@/components/sections/ResumeSystem';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Harsh Kumar Shaw',
    jobTitle: 'GenAI Engineer',
    description: 'I build production-ready GenAI systems and explore research-driven solutions.',
    url: 'https://harshkumarshaw.com', // Update with actual URL
    sameAs: [
      'https://github.com/harshkumarshaw',
      'https://linkedin.com/in/harshkumarshaw',
      'https://x.com/Scientist_Harsh'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CurrentlyBuilding />
      <Hero />
      <About />
      <WhatImSolving />
      <FeaturedProjects />
      <Experience />
      <Research />
      <BuildTimeline />
      <Skills />
      <ResumeSystem />
      <Contact />
    </>
  );
}

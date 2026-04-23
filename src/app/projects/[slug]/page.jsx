import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'projects');
  
  try {
    const files = fs.readdirSync(contentDir);
    const slugs = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
      }));
    return slugs;
  } catch (error) {
    console.error("Error reading projects directory:", error);
    return [];
  }
}

async function getProject(slug) {
  const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return { frontmatter: data, content };
}

export async function generateMetadata(props) {
  const params = await props.params;
  const project = await getProject(params.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.frontmatter.title} — Case Study | Harsh Kumar Shaw`,
    description: project.frontmatter.abstract || 'Project case study',
  };
}

const components = {
  h1: (props) => <h1 className={styles.h1} {...props} />,
  h2: (props) => <h2 className={styles.h2} {...props} />,
  h3: (props) => <h3 className={styles.h3} {...props} />,
  p: (props) => <p className={styles.p} {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
  a: (props) => <a className={styles.a} {...props} />,
  blockquote: (props) => <blockquote className={styles.blockquote} {...props} />,
};

export default async function ProjectPage(props) {
  const params = await props.params;
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>
      
      <header className={styles.header}>
        <h1 className={styles.title}>{project.frontmatter.title}</h1>
        {project.frontmatter.abstract && (
          <p className={styles.abstract}>{project.frontmatter.abstract}</p>
        )}
      </header>

      <article className={styles.content}>
        <MDXRemote source={project.content} components={components} />
      </article>
      
      <div className={styles.footer}>
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Interested in this approach?</h3>
          <p className={styles.ctaText}>Let's discuss how these concepts can be applied to your specific challenges.</p>
          <Button href="/#contact" variant="primary">Get in Touch</Button>
        </div>
      </div>
    </div>
  );
}

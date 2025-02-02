import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { ContentSection, ChangeType } from '../components/ContentSection';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

const platformSections = [
  {
    title: "Enterprise-Grade Workflow Automation",
    description: "Transform your business processes with powerful automation that combines AI, APIs, and data integration into streamlined workflows. Reduce manual work and operational costs while improving accuracy and efficiency.",
    icon: "🔄"
  },
  {
    title: "Seamless Integration Framework",
    description: "Connect your existing systems, AI models, databases, and third-party services without complex coding. Our platform handles the integration complexity, letting you focus on business logic.",
    icon: "🔌"
  },
  {
    title: "Flexible Deployment & Control",
    description: "Deploy workflows your way - via REST API for system integration, web interface for business users, or automated scheduling. Maintain full control with comprehensive monitoring, logging, and analytics.",
    icon: "🚀"
  },
  {
    title: "Security & Compliance Ready",
    description: "Built with enterprise security in mind, featuring role-based access control, audit logging, and secure data handling. Deploy on-premise or in your private cloud environment.",
    icon: "🔒"
  }
];

const docItems = [
  {
    title: "Task Types",
    link: "/docs/task-types",
    changeType: ChangeType.Added,
    changeDate: "December 20, 2024",
    description: "List of all currently available task types."
  },
  {
    title: "Workflows",
    link: "/docs/workflows",
    changeType: ChangeType.Updated,
    changeDate: "January 1, 2025",
    description: "Learn how to create, execute, and monitor workflows with the Data Flow Platform."
  },
  {
    title: "Tasks",
    link: "/docs/tasks",
    changeType: ChangeType.Updated,
    changeDate: "January 16, 2025",
    description: "Learn how to define and execute tasks."
  },
  {
    title: "New Web and Text Task Types",
    link: "/docs/task-types/web-download",
    changeType: ChangeType.Added,
    changeDate: "January 31, 2025",
    description: "New task types for downloading web pages and extracting text from them."
  }
];

const blogPosts = [
  {
    title: "Building AI-Powered Workflows with Data Flow Platform",
    link: "/blog/build-ai-workflows-with-data-flow-platform",
    changeType: ChangeType.Added,
    changeDate: "December 18, 2024",
    description: "Learn how to create automated workflows that combine AI models, application integrations, and ETL processes using the Data Flow Platform. This tutorial demonstrates how to build and deploy intelligent workflows as standalone AI agents accessible via API or web interface."
  },
  {
    title: "Get YouTube Video Transcription via API",
    link: "/blog/workflow-to-download-and-transcribe-youtube-videos-via-api",
    changeType: ChangeType.Added,
    changeDate: "January 1, 2025",
    description: "Learn how to create an automated workflow to download and transcribe YouTube videos via DataFlow Platform's API."
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Data Flow Platform"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>

        <div className={styles.platformSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              Why Choose Our Platform
            </Heading>
            <div className="row">
              {platformSections.map((section, index) => (
                <div key={index} className="col col--6">
                  <div className={styles.platformCard}>
                    <div className={styles.platformHeader}>
                      <div className={styles.platformIcon}>{section.icon}</div>
                      <p className={styles.platformDescriptionHighlight}>
                        {section.title}
                      </p>
                    </div>
                    <p className={styles.platformDescription}>
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContentSection
          title="Latest Documentation Updates"
          className={styles.latestDocsSection}
          items={docItems}
        />

        <ContentSection
          title="Latest Blog Posts"
          className={styles.latestBlogSection}
          items={blogPosts}
        />
      </main>
    </Layout >
  );
}

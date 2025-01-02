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

const docItems = [
  {
    title: "Dummy Workflow Example",
    link: "/docs/development",
    changeType: ChangeType.Added,
    changeDate: "December 20, 2024",
    description: "Learn how to create a simple 3-step workflow that processes text input, including static text generation, text operations, and output handling."
  },
  {
    title: "Task Types",
    link: "/docs/task-types",
    changeType: ChangeType.Added,
    changeDate: "December 20, 2024",
    description: "Learn how to use the Data Flow Platform's task types to create workflows."
  },
  {
    title: "Workflows",
    link: "/docs/workflows",
    changeType: ChangeType.Updated,
    changeDate: "January 1, 2025",
    description: "Learn how to create, execute, and monitor workflows with the Data Flow Platform."
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
            <div className="row">
              <div className="col col--8 col--offset-2">
                <p className={styles.platformDescriptionHighlight}>
                  Build automated workflows.
                </p>

                <p className={styles.platformDescription}>
                  Create workflows by chaining automated tasks with dynamic input and output configuration.
                </p>

                <p className={styles.platformDescriptionHighlight}>
                  Connect anything with everything.
                </p>

                <p className={styles.platformDescription}>
                  Integrate AI models, web APIs, databases, external services, various data sources, and data transformations into a single workflow.
                </p>

                <p className={styles.platformDescriptionHighlight}>
                  Run workflows via API or web interface.
                </p>

                <p className={styles.platformDescription}>
                  Execute workflows via API or Web UI, monitor execution performance, and get detailed logs and metrics.
                </p>

                <p className={styles.platformDescriptionHighlight}>
                  Schedule automated processes.
                </p>

                <p className={styles.platformDescription}>
                  Plan and schedule workflows to run at specific times, intervals or events (external triggers, webhooks, etc.), ensuring timely execution of automated processes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContentSection
          title="Latest Documentation Articles"
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

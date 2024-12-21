import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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

function LatestBlogPost() {
  return (
    <div className={styles.latestBlogSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              Latest Blog Posts
            </Heading>
            <div className={styles.blogPost}>
              <Heading as="h3">
                <Link to="/blog/build-ai-workflows-with-data-flow-platform">
                  Building AI-Powered Workflows with Data Flow Platform
                </Link>
              </Heading>
              <p>
                Learn how to create automated workflows that combine AI models,
                application integrations, and ETL processes using the Data Flow Platform.
                This tutorial demonstrates how to build and deploy intelligent workflows
                as standalone AI agents accessible via API or web interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestDocs() {
  return (
    <div className={styles.latestDocsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              Latest Documentation Articles
            </Heading>
            <div className={styles.docsEntry}>
              <Heading as="h3">
                <Link to="/docs/development">
                  Dummy Workflow Example
                </Link>
              </Heading>
              <p>
                Explore our dummy workflow tutorial that demonstrates the core concepts
                of the workflow engine. Learn how to create a simple 3-step workflow
                that processes text input, including static text generation, text
                operations, and output handling. Perfect for getting started with
                the Data Flow Platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


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
                <p className={styles.platformDescription}>
                  Our platform empowers developers to build and orchestrate AI-powered applications
                  with ease. Through intuitive visual workflows and robust integration capabilities,
                  you can connect multiple AI services, manage data flows, and create sophisticated
                  AI solutions without getting bogged down by complex infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <LatestBlogPost />
        <LatestDocs />
      </main>
    </Layout>
  );
}

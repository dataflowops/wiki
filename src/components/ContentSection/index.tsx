import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './ContentSection.module.css';

export enum ChangeType {
  Added = "Added",
  Updated = "Updated",
}

interface ContentItem {
  title: string;
  link: string;
  changeType: ChangeType;
  changeDate: string;
  description: string;
}

interface ContentSectionProps {
  title: string;
  className?: string;
  items: ContentItem[];
}

export function ContentSection({ title, className, items }: ContentSectionProps) {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              {title}
            </Heading>
            {items.slice().reverse().map((item, index) => (
              <div key={index} className={styles.contentEntry}>
                <Heading as="h3">
                  <Link to={item.link}>
                    {item.title}
                  </Link>
                </Heading>
                <p className={styles.changeType}>{item.changeType} on {item.changeDate}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

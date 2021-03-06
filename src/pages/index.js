import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Register</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        This page was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Why Accessibility Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        People with disabilities should be able to perceive, understand, navigate, and interact with, and contribute to your website.
    Tourism and travel is something that should be enjoyed by everyone i.e. young, elderly and people with disabilities.
      </>
    ),
  },
  {
    title: <>Integrated Knowledge Centre</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Our world is constantly changing due to factors such as global economic upheaval and technological developments. 
    Our Knowledge centre helps to keep you up to date on matters which impact on sustainability in the Tourism Sector and require insights and knowledge in order to position ourselves to take advantage of opportunities and mitigate risks in our organisation.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

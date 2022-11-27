import React from 'react';
import { useRouter } from "next/router";
import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import styles from './index.module.css';

const BlogPage = (props) => {
  const router = useRouter();
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={'/blogCover.png'}
          title={`The new standard of Closing`}
          ctaLink={'read story'}
          ctahref={'/blog/sample'}
          header={'design'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => router.push('/blog/sample')}
            href={'/blog/sample'}
          >
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => router.push('/blog/sample')}
            href={'/blog/sample'}
          >
            Design
          </ThemeLink>
          <ThemeLink
            onClick={() => router.push('/blog/sample')}
            href={'/blog/sample'}
          >
            Collaboration
          </ThemeLink>
          <ThemeLink
            onClick={() => router.push('/blog/sample')}
            href={'/blog/sample'}
          >
            Interview
          </ThemeLink>
          <ThemeLink
            onClick={() => router.push('/blog/sample')}
            href={'/blog/sample'}
          >
            News
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

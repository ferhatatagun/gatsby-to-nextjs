import React from 'react';
import Link from 'next/link'
import * as styles from './BlogPreview.module.css';
import { useRouter } from "next/router";
import Image from 'next/image'

const BlogPreview = (props) => {
  const router = useRouter();
  const { image, altImage, title, link, category, showExcerpt, excerpt } = props;

  const handleClick = () => {
    router.push(link);
  };

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div className={styles.root} onClick={handleClick}>
      <Image
        width="410"
        height="520"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        loading="lazy"
        objectFit="contain"
        className={styles.blogPreviewImage}
        alt={altImage}
        src={image}
        role={'figure'}
      />
      <span className={styles.category}>{category}</span>
      <h4 className={styles.title}>
        <Link passHref href={link}>{title}</Link>
      </h4>
      {showExcerpt && <p className={styles.excerpt}>{excerpt}</p>}
    </div>
  );
};

export default BlogPreview;

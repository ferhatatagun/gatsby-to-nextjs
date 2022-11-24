import Link from 'next/link';
import React from 'react';
import styles from './Highlight.module.css';
import Image from 'next/image'

const Highlight = (props) => {
  const {
    image,
    altImage,
    miniImage,
    miniImageAlt,
    title,
    description,
    textLink,
    link,
  } = props;

  return (
    <div className={styles.root}>
      <Image fill  alt={altImage} src={image} className={styles.highlightImage} />
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link ?? ''}>{textLink}</Link>
        <Image fill 
          className={styles.miniImage}
          alt={miniImageAlt}
          src={miniImage}
        />
      </div>
    </div>
  );
};

export default Highlight;

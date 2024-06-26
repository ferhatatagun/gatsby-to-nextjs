import Link from 'next/link';
import React from 'react';
import styles from './Title.module.css';

const Title = (props) => {
  const {
    name,
    subtitle,
    link,
    textLink,
    maxWidth,
    color = 'var(--standard-black)',
    hideSubtitleOnMobile = false,
    marginBottom = '32px',
  } = props;

  return (
    <div
      className={`${styles.root} ${
        hideSubtitleOnMobile === true ? styles.hideSubtitleOnMobile : ''
      }`}
      style={{ maxWidth: maxWidth, marginBottom: marginBottom }}
    >
      <h2 className={styles.title} style={{ color: color }}>
        {name}
      </h2>
      {subtitle && <span className={`${styles.subtitle}`}>{subtitle}</span>}
      {link && textLink && (
        <Link className={styles.link} href={link ?? ''}>
          {textLink}
        </Link>
      )}
    </div>
  );
};

export default Title;

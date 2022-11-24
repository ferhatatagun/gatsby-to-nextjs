import React from 'react';
import Link from 'next/link';

import * as styles from './ThemeLink.module.css';

const ThemeLink = ({ children, to, onClick, isActive, themeRef }) => {
  return (
    <div
      onClick={onClick}
      role={'presentation'}
      className={`${styles.root} ${isActive === true ? styles.active : ''}`}
      ref={themeRef}
    >
      <Link className={`${styles.link}`} href={to}>
        {children}
      </Link>
    </div>
  );
};

export default ThemeLink;

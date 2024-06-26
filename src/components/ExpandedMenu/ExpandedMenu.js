import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import styles from './ExpandedMenu.module.css';

const ExpandedMenu = (props) => {
  const { menu } = props;

  if (menu === null || menu === undefined) return <React.Fragment />;
  return (
    <div className={styles.root}>
      <div className={styles.linkContainers}>
        {menu?.map((item, index) => {
          return (
            <div key={index} className={styles.categoryContainer}>
              <span className={styles.categoryName}>{item.categoryLabel}</span>
              <ul>
                {item.submenu.map((link, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <Link className={styles.menuLink} href={link.menuLink}>
                        {link.menuLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <Image width="230" height="305" src={'/headerPic1.png'} alt={'header 1'}/>
        <Image width="230" height="305" src={'/headerPic2.png'} alt={'header 2'}/>
      </div>
    </div>
  );
};

export default ExpandedMenu;

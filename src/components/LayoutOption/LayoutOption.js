import React from 'react';
import { useRouter } from "next/router";
import Icon from '../Icons/Icon';
import styles from './LayoutOption.module.css';

const LayoutOption = (props) => {
  const router = useRouter();

  return (
    <div className={styles.root}>
      <div
        className={styles.layoutIconContainer}
        onClick={() => router.push('/shopV2')}
        role={'presentation'}
      >
        <Icon symbol={'list'}></Icon>
      </div>
      <div
        className={styles.layoutIconContainer}
        onClick={() => router.push('/shop')}
        role={'presentation'}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <Icon symbol={'list'}></Icon>
      </div>
    </div>
  );
};

export default LayoutOption;

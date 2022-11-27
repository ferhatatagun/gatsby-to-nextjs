import React from 'react';
import styles from './ActionCard.module.css';
import Icon from '../Icons/Icon';
import { useRouter } from "next/router";

const ActionCard = (props) => {
  const { title, icon, subtitle, link, size } = props;
  const router = useRouter();
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => router.push(link)}
    >
      <div className={`${styles.iconContainer} ${styles[size]}`}>
        <Icon symbol={icon} />
      </div>
      <span className={styles.actionName}>{title}</span>
      <span className={styles.link}>
        {subtitle}
        <Icon symbol={'caret'}></Icon>
      </span>
    </div>
  );
};

export default ActionCard;

import React from 'react';

import { useRouter } from "next/router";
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';
import Image from 'next/image'
import styles from './MiniCartItem.module.css';

const MiniCartItem = (props) => {
  const { image, alt, name, price, color, size } = props;
  const router = useRouter();
  return (
    <div className={styles.root} suppressHydrationWarning>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => router.push('/product/sample')}
      >
        <Image fill  src={image} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={price} />
          </div>
          <span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>
            Size:
            <span className={styles.size}>{size}</span>
          </span>
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem />
        </div>
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem />
      </div>
    </div>
  );
};

export default MiniCartItem;

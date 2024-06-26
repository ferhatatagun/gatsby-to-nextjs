import React, { useState } from 'react';

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';
import QuickView from '../QuickView';
import Image from 'next/image'
import styles from './CartItem.module.css';
import { useRouter } from "next/router";

const CartItem = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const { image, alt, color, name, size, price } = props;
  const router = useRouter();
  
  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => router.push('/product/sample')}
      >
        <Image fill  src={image} alt={alt}/>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
        <div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>
        <div
          className={styles.editContainer}
          role={'presentation'}
          onClick={() => setShowQuickView(true)}
        >
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price} appendZero />
      </div>
      <div className={styles.removeContainer}>
        <RemoveItem />
      </div>
      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};

export default CartItem;

import Link from 'next/link'
import React from 'react';
import { useRouter } from "next/router";
import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const router = useRouter();

  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Lambswool Crew Neck Jumper',
    price: 220,
    color: 'Anthracite Melange',
    size: 'xs',
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        <MiniCartItem {...sampleCartItem} />
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => router.push('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          <div className={styles.linkContainer}>
            <Link href={'/shop'}>continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;

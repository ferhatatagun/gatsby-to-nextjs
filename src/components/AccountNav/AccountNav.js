import Link from 'next/link'
import React from 'react';
import styles from './AccountNav.module.css';
import { useRouter } from "next/router";

const AccountNav = (props) => {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem('key');
    router.push('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          passHref
          activeClassName={styles.activeLink}
          href={'/account/orders/'}
          className={styles.webLink}
        >
          Orders
        </Link>
        <Link
          passHref
          activeClassName={styles.activeLink}
          href={'/account/address/'}
          className={styles.webLink}
        >
          Addresses
        </Link>
        <Link
          passHref
          activeClassName={styles.activeLink}
          href={'/account/settings/'}
          className={styles.webLink}
        >
          Settings
        </Link>
        <Link
          passHref
          activeClassName={styles.activeLink}
          href={'/account/viewed/'}
          className={styles.webLink}
        >
          Recently Viewed
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AccountNav;

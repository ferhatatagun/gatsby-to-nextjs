import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'

import Config from '../../config.json';
import Icon from '../Icons/Icon';
import { isAuth } from '../../helpers/general';

//TO DO: refactor this to handle multiple nested links to avoid hardcoding 'depth'
// have to restructure config.json
// refactor this

import styles from './MobileNavigation.module.css';

const MobileNavigation = (props) => {
  const { close } = props;
  const router = useRouter();
  const [subMenu, setSubMenu] = useState();
  const [category, setCategory] = useState();
  const [depth, setDepth] = useState(0);

  const handleLogout = () => {
    window.localStorage.removeItem('key');
    router.push('/');
    close();
  };

  return (
    <div className={styles.root}>
      <nav>
        <div className={styles.headerAuth}>
          {depth === 0 && isAuth() === false && (
            <div className={styles.authLinkContainer}>
              <Link href={'/signup'}>Sign Up</Link>
              <Link href={'/login'}>Login</Link>
            </div>
          )}

          {depth === 0 && isAuth() === true && (
            <div
              className={styles.welcomeContainer}
              role={'presentation'}
              onClick={() => setDepth(-1)}
            >
              <span className={styles.welcomeMessage}>Welcome, John</span>
              <Icon symbol={'caret'}></Icon>
            </div>
          )}

          {depth === -1 && isAuth() === true && (
            <div
              className={styles.previousLinkContainer}
              onClick={() => setDepth(0)}
              role={'presentation'}
            >
              <div className={styles.previousIcon}>
                <Icon symbol={'caret'}></Icon>
              </div>
              <span>my account</span>
            </div>
          )}

          {depth === 1 && (
            <div
              className={styles.previousLinkContainer}
              onClick={() => setDepth(0)}
              role={'presentation'}
            >
              <div className={styles.previousIcon}>
                <Icon symbol={'caret'}></Icon>
              </div>
              <span>{category.menuLabel}</span>
            </div>
          )}

          {depth === 2 && (
            <div
              className={styles.previousLinkContainer}
              onClick={() => setDepth(1)}
              role={'presentation'}
            >
              <div className={styles.previousIcon}>
                <Icon symbol={'caret'}></Icon>
              </div>
              <span>{subMenu.categoryLabel}</span>
            </div>
          )}
        </div>

        <div className={styles.mobileNavContainer}>
          {/* dynamic portion */}
          {depth === 0 && (
            <div>
              {Config.headerLinks.map((navObject) => {
                const hasSubmenu =
                  navObject.category?.length !== undefined ? true : false;
                return (
                  <Link
                    key={navObject.menuLink}
                    className={`${styles.mobileLink}`}
                    href={hasSubmenu === true ? '' : navObject.menuLink ?? ''}
                    onClick={() => {
                      if (hasSubmenu) {
                        setDepth(1);
                        setCategory(navObject);
                      }
                    }}
                  >
                    {navObject.menuLabel}
                    {hasSubmenu && <Icon symbol={'caret'}></Icon>}
                  </Link>
                );
              })}
              <div className={styles.navFooter}>
                <Link href={'/favorites'}>
                  <Icon symbol={'heart'} />
                  Favorites (0)
                </Link>
              </div>
            </div>
          )}

          {depth === 1 &&
            category.category.map((menuItem) => {
              return (
                <Link
                  passHref
                  key={menuItem.categoryLabel}
                  href={'/'}
                  onClick={() => {
                    setDepth(2);
                    setSubMenu(menuItem);
                  }}
                  className={`${styles.mobileLink}`}
                >
                  {menuItem.categoryLabel}
                  <Icon symbol={'caret'}></Icon>
                </Link>
              );
            })}

          {depth === 2 &&
            subMenu.submenu.map((menuItem) => {
              return (
                <Link
                  key={menuItem.menuLabel}
                  href={menuItem.menuLink ?? ''}
                  className={`${styles.edgeLink}`}
                >
                  {menuItem.menuLabel}
                </Link>
              );
            })}

          {depth === -1 && (
            <>
              <div>
                <Link href={'/account/orders/'} className={styles.mobileLink}>
                  Orders
                </Link>
                <Link href={'/account/address/'} className={styles.mobileLink}>
                  Addresses
                </Link>
                <Link href={'/account/settings/'} className={styles.mobileLink}>
                  Settings
                </Link>
                <Link href={'/account/viewed/'} className={styles.mobileLink}>
                  Recently Viewed
                </Link>
              </div>
              <div className={styles.navFooter}>
                <div
                  className={styles.logoutContainer}
                  role={'presentation'}
                  onClick={handleLogout}
                >
                  <Icon symbol={'logout'} />
                  <span>Sign out </span>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;

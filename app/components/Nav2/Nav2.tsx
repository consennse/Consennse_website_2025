"use client";
import React, { useState, useEffect } from 'react';
import styles from './Nav2.module.css';
import Image from 'next/image';
import Name from './Name.svg';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Nav2 = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY); // Hide on scroll down, show on scroll up
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (linkName: string) => setActiveLink(linkName);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
        <div className={styles.navmain}>
      {menuOpen && <div className={styles.blurBackground}></div>}
  
      <div className={`${styles.top} ${isHidden ? styles.hidden : ''}`}>
        <div className={styles.img}>
          <Image src={Name} alt="logo" height={27} className={styles.broimg} />
        </div>
        <div className={styles.right}>
          <Link href='/'>
            <div
              className={`${styles.home} ${activeLink === 'home' ? styles.active : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </div>
          </Link>
          <Link href='/users/Page4'>
            <div
              className={`${styles.serv} ${activeLink === 'services' ? styles.active : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </div>
          </Link>
          <Link href='/users/Page3'>
            <div
              className={`${styles.sup} ${activeLink === 'support' ? styles.active : ''}`}
              onClick={() => handleLinkClick('support')}
            >
              Support
            </div>
          </Link>
          <div
            className={`${styles.sol} ${activeLink === 'solutions' ? styles.active : ''}`}
            onClick={() => handleLinkClick('solutions')}
          >
            {t('5')}
          </div>
          <Link href='/users/Page2'>
            <div
              className={`${styles.con} ${activeLink === 'contact' ? styles.active : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              {t('6')}
            </div>
          </Link>
        </div>
        <div className={styles.but}>
          <button className={styles.drop}>
            {i18n.language === 'en' ? 'EN' : 'DE'}
          </button>
          <div className={styles.ic2} onClick={toggleDropdown}>
            <FaChevronDown style={{ transform: 'scale(0.8)' }} />
          </div>
          {isOpen && (
            <ul className={styles.DropDown}>
              {i18n.language === 'en' ? (
                <li onClick={() => handleLanguageChange('de')}>DE</li>
              ) : (
                <li onClick={() => handleLanguageChange('en')}>EN</li>
              )}
            </ul>
          )}
        </div>
        <div className={styles.menu}>
          <div className={styles.menuIcon}>
            <FaBars className={styles.menustyle} onClick={toggleMenu} />
          </div>
          {menuOpen && (
            <div className={`${styles.menuOverlay} ${menuOpen ? styles.slideDown : styles.slideUp}`}>
              <div className={styles.closeBar} onClick={toggleMenu}>
                &times;
              </div>
              <ul className={styles.menuList}>
                <Link href='/'>
                  <li>Home</li>
                </Link>
                <Link href='/users/Page4'>
                  <li>Services</li>
                </Link>
                <Link href='/users/Page3'>
                  <li>Support</li>
                </Link>
                <li>{t('5')}</li>
                <Link href='/users/Page2'>
                  <li>{t('6')}</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav2;

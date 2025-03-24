"use client"; // Ensure the component runs on the client side
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import styles from "./Nav.module.css";
import Image from 'next/image';
import Name from "./Name.png";
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageChanger from '@/app/components/LanguageChanger/LanguageChanger'; 
const Nav = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown2 = () => {
    console.log('Dropdown toggled:', !isDropdownVisible2); // Debugging
    setDropdownVisible2(!isDropdownVisible2);
  };

  const pathname = usePathname(); // Access the current pathname using usePathname

  let lastScrollY = 0;

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsHidden(true); // Scrolling down
      } else {
        setIsHidden(false); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to add underline for active link
  const isActiveLink = (href: string) => {
    return pathname === href ? styles.activeLink : '';
  };
  const isActiveLink2 = (href: string) => {
    return pathname === href ? styles.activeLink2 : '';
  };

  return (
    <div className={styles.navmain}>
      {menuOpen && <div className={styles.blurBackground}></div>}
      <div className={`${styles.top} ${isHidden ? styles.hidden : ""}`}>
        <div className={styles.fordesk}>
          <div className={styles.img}>
            <Link href='/'>
              <Image src={Name} alt="logo" height={27} className={styles.broimg}  />
            </Link>
          </div>
          <div className={styles.right}>
            <Link href='/'>
              <div className={`${styles.home}  ${isActiveLink('/') || isActiveLink('/de')}` }>
                Home
              </div>
            </Link>
            <Link href='/content/services'>
              <div className={`${styles.serv} ${isActiveLink('/content/services') || isActiveLink('/de/content/services')}`}>
                Services
              </div>
            </Link>
            <Link href='/content/support'>
              <div className={`${styles.sup} ${isActiveLink('/content/support')  || isActiveLink('/de/content/support')}`}>
                Support
              </div>
            </Link>
            <div
        className={`${styles.sol} ${isActiveLink('/sol')}`}
        onClick={toggleDropdown2}
      >
        {t('5')}
      </div>
      {isDropdownVisible2 && (
        <div className={styles.dropdown2}>
          <ul>
            <Link href = '/content/swissedition'>
            <li className = {`${styles.sE} ${isActiveLink2('/content/swissedition') || isActiveLink2('/de/content/swissedition')}`}>Propertybase SWISS EDITION</li>
            </Link>
            <Link href = '/content/weboffice'>
            <li className = {`${styles.wE} ${isActiveLink2('/content/weboffice')|| isActiveLink2('/de/content/weboffice')}`}>WEB OFFICE for Propertybase</li>
            </Link>
            <Link href = '/content/expose'>
            <li className = {`${styles.E} ${isActiveLink2('/content/expose') || isActiveLink2('/de/content/expose')}`}>EXPOSE for Propertybase</li>
            </Link>
          </ul>
        </div>
      )}

<Link href='/content/aboutus'>
              <div className={`${styles.con1} ${isActiveLink('/content/aboutus') || isActiveLink('/de/content/aboutus')}`}>
                {t('601')}
              </div>
            </Link>
            <Link href='/content/contact'>
              <div className={`${styles.con} ${isActiveLink('/content/contact') || isActiveLink('/de/content/contact')}`}>
                {t('6')}
              </div>
            </Link>
          </div>
          {/* <div className={styles.but}>
            <button className={styles.drop} onClick={toggleDropdown}>
              {language === 'en' ? 'EN' : 'DE'}
              <div className={styles.ic2}>
                <FaChevronDown style={{ transform: 'scale(0.8)' }} />
              </div>
            </button>
            {isOpen && (
              <ul className={styles.DropDown}>
                {language === 'en' ? (
                  <li onClick={() => changeLanguage('de')}>DE</li>
                ) : (
                  <li onClick={() => changeLanguage('en')}>EN</li>
                )}
              </ul>
            )}
          </div> */}
                    <LanguageChanger/>
          <div className={styles.menu}>
            <div className={styles.menuIcon}>
              <FaBars className={styles.menustyle} onClick={toggleMenu} />
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>

            {/* Menu Overlay */}
            {menuOpen && (
              <div
                className={`${styles.menuOverlay} ${
                  menuOpen ? styles.slideDown : styles.slideUp
                }`}
              >
                <div className={styles.closeBar} onClick={toggleMenu}>
                  &times;
                </div>
                <ul className={styles.menuList}>
                  <Link href='/'>
                    <li className={isActiveLink('/')}>Home</li>
                  </Link>
                  <Link href='/content/services'>
                    <li className={isActiveLink('/content/services')}>Services</li>
                  </Link>
                  <Link href='/content/support'>
                    <li className={isActiveLink('/content/support')}>Support</li>
                  </Link>
                  <li className={isActiveLink('/sol')} onClick={toggleDropdown2}>{t('5')} </li>
          <ul className = {styles.menu2}>
            <Link href = '/content/swissedition' className = {`${styles.sE} ${isActiveLink2('/content/swissedition')|| isActiveLink2('/de/content/swissedition')}`} >
            <li>
          
              Propertybase SWISS EDITION</li>
            </Link>
            <Link href = '/content/weboffice' className = {`${styles.wE} ${isActiveLink2('/content/weboffice')|| isActiveLink2('/de/content/weboffice')}`}>
            <li>
       
              WEB OFFICE for Propertybase</li>
            </Link>
            <Link href = '/content/expose' className = {`${styles.wE} ${isActiveLink2('/content/expose')|| isActiveLink2('/de/content/expose')}`}>
            <li>
            EXPOSE for Propertybase</li>
            </Link>
          </ul>
          <Link href='/content/aboutus'>
                    <li className={isActiveLink('/content/aboutus')}>{t('601')}</li>
                  </Link>
                  <Link href='/content/contact'>
                    <li className={isActiveLink('/content/contact')}>{t('6')}</li>
                  </Link>
                </ul>
              </div>
            )}
                 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

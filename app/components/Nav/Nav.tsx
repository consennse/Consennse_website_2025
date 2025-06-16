"use client"; // Ensure the component runs on the client side
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import styles from "./Nav.module.css";
import Image from 'next/image';
import Name from "./Name.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import icon from "./Icon.png"
import LanguageChanger from '@/app/components/LanguageChanger/LanguageChanger'; 
import { FaGlobe } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
const Nav = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);


  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
const openDropdown2 = () => setDropdownVisible2(true);
const closeDropdown2 = () => setDropdownVisible2(false);

  const toggleSubMenu = () => setShowSubMenu(prev => !prev);
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };
  
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
              {/* packages link */}
            </Link>
            <Link href='/content/support'>
              <div className={`${styles.sup} ${isActiveLink('/content/support')  || isActiveLink('/de/content/support')}`}>
                Packages
              </div>
            </Link>
            <div
  className={`${styles.sol} ${isActiveLink('/sol')}`}
  onMouseEnter={openDropdown2}
  onClick={toggleDropdown2} // still works on click
>


        {t('5')}
        <FaChevronDown
  className={`${styles.fadown} ${isDropdownVisible2 ? styles.rotate : ''}`}
/>
      </div>
      {isDropdownVisible2 && (
  <div className={styles.dropdown2} 
  onMouseLeave={closeDropdown2}
>

    <ul>
      <li className={`${styles.sE} ${isActiveLink('/content/swissedition') || isActiveLink('/de/content/swissedition')}`}>
        <Link href="/content/swissedition">Propertybase SWISS EDITION
        </Link>
        <div className = {styles.icon1}>
        <Image src={icon} alt="icon" height={9} className={styles.broimg}  />
        </div>
      </li>
      <li className={`${styles.wE} ${isActiveLink('/content/weboffice') || isActiveLink('/de/content/weboffice')}`}>
        <Link href="/content/weboffice">WEB OFFICE for Propertybase</Link>
        <div className = {styles.icon1}>
        <Image src={icon} alt="icon" height={9} className={styles.broimg}  />
        </div>
      </li>
      <li className={`${styles.eE} ${isActiveLink('/content/expose') || isActiveLink('/de/content/expose')}`}>
        <Link href="/content/expose">EXPOSE for Propertybase</Link>
        <div className = {styles.icon1}>
        <Image src={icon} alt="icon" height={9} className={styles.broimg}  />
        </div>
      </li>
    </ul>
  </div>
)}


<Link href='/content/aboutus'>
              <div className={`${styles.con1} ${isActiveLink('/content/aboutus') || isActiveLink('/de/content/aboutus')}`}>
                {t('601')}
              </div>
            </Link>
            
          </div>
          <Link href='/content/contact'>
              <div className={styles.con}>
                {t('6')}
              </div>
            </Link>
            <div className={styles.languageWrapper}>
  <div className={styles.languageChanger} onClick={toggleDropdown}
    onMouseEnter={openDropdown}
  //here 
  >
    <FaGlobe className={styles.globe} />
    <FaChevronDown
      className={`${styles.chevron} ${isDropdownOpen ? styles.rotate : ''}`}
    />
  </div>

  {isDropdownOpen && (
    <div className={styles.dropdownMenu}   onMouseLeave={closeDropdown}>
      <div className={styles.dropdownItem1}>{t('624')}</div>
      <div className={styles.dropdownItem2}>
        <LanguageChanger/>
      </div>
    </div>
  )}
</div>

{/* lang changer goes here  */}
            {/* <LanguageChanger/> */}
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
                 

        </div>
        <div className={styles.menu}>
      {/* Only show FaBars when menu is closed */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
  {!menuOpen ? (
    <>
      <FaBars className={styles.menustyle} />
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </>
  ) : (
    <FaTimes className={styles.closeIcon} />
  )}
</div>

      {/* Only show dropdown when menuOpen is true */}
      {menuOpen && (
        <div className={`${styles.dropdownMenu2} ${styles.slideDown}`}>
       

          <ul className={styles.menuList}>
          <li className={`${styles.hom} ${isActiveLink2('/') || isActiveLink2('/de')}`}>
          <Link href="/">
              Home
              </Link>
              </li>
              <li className={`${styles.serv2} ${isActiveLink2('/content/services') || isActiveLink2('/de/content/services')}`}>
              <Link href="/content/services">
              Services
              </Link>
              </li>
              <li className={`${styles.serv2} ${isActiveLink2('/content/support') || isActiveLink2('/de/content/support')}`}>
              <Link href="/content/support">
              Support </Link>
              </li>
              <li className={`${styles.serv2} ${isActiveLink2('/content/support') || isActiveLink2('/de/content/support')}`}>
              <Link href="/content/support">
              Packages</Link> </li>
            <li onClick={toggleSubMenu} className={styles.clickable}>
              <div className = {styles.click1}>
              Solutions 
              <FaChevronDown
  className={`${styles.fadown2} ${showSubMenu ? styles.rotate : ''}`}
/>
</div>
              {showSubMenu && (
                <ul className={styles.subDropdown}>
                    <li className={`${styles.serv3} ${isActiveLink2('/content/swissedition') || isActiveLink2('/de/content/swissedition')}`}>
              <Link href="/content/swissedition">
                    Propertybase SWISS EDITION
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.rightdiag} />
                  </Link>
                  </li>
                  <li className={`${styles.serv3} ${isActiveLink2('/content/weboffice') || isActiveLink2('/de/content/weboffice')}`}>
              <Link href="/content/weboffice">
                    WEB OFFICE for Propertybase 
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.rightdiag}  />
                  </Link>
                  </li>
                  <li className={`${styles.serv3} ${isActiveLink2('/content/expose') || isActiveLink2('/de/content/expose')}`}>
              <Link href="/content/expose">
                    EXPOSE for Propertybase 
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}className={styles.rightdiag}  />
                  </Link>
                  </li>

                  
                </ul>
              )}
            </li>

            <li className={`${styles.serv2} ${isActiveLink2('/content/aboutus') || isActiveLink2('/de/content/aboutus')}`}>
              <Link href="/content/aboutus">
              About Us
              </Link>
              </li>
            <li>
              <button className = {styles.contactmob}>
              <Link href='/content/contact'>
                Contact
                </Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
      </div>
    </div>
  );
};

export default Nav;

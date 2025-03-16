'use client' ; 
import React from 'react'
import Image from 'next/image';
import lin from "./Facebook.svg"
import st12 from "./Footer.module.css"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className = {st12.main12}>
      <div className = {st12.bot12}>
        <div className={st12.botcontent}>
        <div className = {st12.bott}>
      <div className = {st12.bot1}>
      <div className = {st12.bottext12}>Consennse GmbH</div>
      <div className = {st12.bots1}>
      {/* Ringwilerstrasse 4 8620 Wetzikon ZH  */}
      Switzerland
      </div>
      <div className = {st12.bots2}>info@consennse.com</div>
      <div className = {st12.img12} >
      <Link href = "https://www.linkedin.com/company/consennse"   target="_blank" 
        rel="noopener noreferrer">
         <Image src ={lin} alt = "linkedin" height={35} className ={st12.img123}/>
         </Link>
         </div>
      </div>
      
      <div className = {st12.bottombox2}>
        <div className = {st12.bot2}>
        <div className = {st12.bots21}>
          {t('96A')}
          </div>
        <div className = {st12.bots223}>
          <div className = {st12.botts}>
          <Link href = '/content/aboutus'>
            {t('601')}
            </Link>
            </div>
          <div className = {st12.botts}>
          <Link href = '/content/contact'>
            {t('6')}
            </Link>
            </div>
          <div className = {st12.botts}>
          <Link href = '/content/support'>
            Support
            </Link>
            </div>
        </div>
        </div>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>Services</div>
        <div className = {st12.bots223}>
          <Link href = '/content/services'>
          {t('82')}
          </Link>
          </div> 
        <div className = {st12.bots224}>
        <Link href = '/content/services'>
          {t('81A')}
          </Link>
          </div>
      </div>
      <div className={st12.bot22}>
        <div className = {st12.bots21}>{t('83')}</div>
        <div className = {st12.bots22}>
          <Link href = '/content/swissedition'>
          {t('84')}
          </Link>
          </div>
        <div className = {st12.bots22}>
          <Link href = '/content/weboffice'>
          {t('84A')}
          </Link>
          </div>
        <div className = {st12.bots22}>
          <Link href = '/content/expose'>
          EXPOSE for Propertybase
          </Link>
          </div>
      </div>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>{t('85')}</div>
        <div className = {st12.bots23}>
        <Link href = "https://www.propertybase.com/"   target="_blank" 
        rel="noopener noreferrer">
          {t('86')} </Link></div>
        <div className = {st12.bots23}>
        <Link href = "  https://www.salesforce.com/"   target="_blank" 
        rel="noopener noreferrer">
          {t('87B')}
          </Link>
          </div>
      </div>
      </div>
      
      </div>
      <div className = {st12.botline}></div>
      <footer className={st12.foot1}>
        <div className = {st12.footdiv1}>
        2025 © Consennse - {t('89')}
        </div>
        <div className = {st12.footdiv2}>
          <Link href = '/content/privacypolicy'>
          {t('90')}
          </Link>
          </div>
        </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer

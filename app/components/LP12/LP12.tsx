'use client';
import React from 'react'
import st12 from "./LP12.module.css"
import Image from 'next/image'
// import container from "./Container.svg"; 
import { useTranslation } from 'react-i18next';
import lin from "./Facebook.svg";
const LP12 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className = {st12.main12}> 
      {/* <div className = {st12.top12}> 
      <div className = {st12.ttext12}>
      {t('79')}
      </div>
      <div className = {st12.timg12}>
      <Image src ={container} alt = "sponsors" width={900} className ={st12.img122}/>
      </div>
      </div> */}
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
      <div className = {st12.img12} > <Image src ={lin} alt = "linkedin" height={35} className ={st12.img123}/></div>
      </div>
      <div className = {st12.bottombox2}>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>Services</div>
        <div className = {st12.bots223}>{t('82')}</div>
        <div className = {st12.bots224}>{t('81A')}</div>
      </div>
      <div className={st12.bot22}>
        <div className = {st12.bots21}>{t('83')}</div>
        <div className = {st12.bots22}>{t('84')}</div>
        <div className = {st12.bots22}>EXPOSE for Propertybase</div>
      </div>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>{t('85')}</div>
        <div className = {st12.bots23}>{t('86')}</div>
      </div>
      </div>
      </div>
      <div className = {st12.botline}></div>
      <footer className={st12.foot1}>
        <div className = {st12.footdiv1}>
        2025 © Consennse - {t('89')}
        </div>
        <div className = {st12.footdiv2}>{t('90')}</div>
        </footer>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LP12

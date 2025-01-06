'use client';
import React from 'react'
import Image from 'next/image';
import back from "./Image 2-2.svg"
import st6 from "./LP6.module.css"
import { useTranslation } from 'react-i18next'
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
const LP6 = () => {
  const{t} = useTranslation();
  return (
    <div className = {st6.mainish}>
      <div className={st6.body6}>
      <div className={st6.leftwa}>
        <div className = {st6.left6}>
          <div className= {st6.lt1}>{t('35')}</div>
          <div className = {st6.lt2}>{t('36')}</div>
          <div className = {st6.sline}></div>
          <div className = {st6.lt3}>{t('37')}</div>
        </div>
        </div>
        <div className = {st6.rightwa}>
      <Image src = {back} className = {st6.backimg} alt = "background"/>
        </div>
      </div>
      <div className = {st6.belowbody}>
      <div className = {st6.right6}>
          <div className = {st6.rgrid1}>
          <div className = {st6.right6content}>
           <div className = {st6.ctxt1}>{t('39')}</div>
           <div className = {st6.ctxt2}>{t('40')}</div>
          </div>
          <div className = {st6.right6content}>
           <div className = {st6.ctxt1}>{t('41')}</div>
           <div className = {st6.ctxt2}>{t('42')}</div>
          </div>
          <div className = {st6.right6content}>
           <div className = {st6.ctxt1}>{t('43')}</div>
           <div className = {st6.ctxt2}>{t('44')}</div>
          </div>
          </div>
          <div className ={st6.rgrid2}>
          <div className = {st6.right6content1}>
           <div className = {st6.ctxt1}>{t('45')}</div>
           <div className = {st6.ctxt2}>{t('46')}</div>
          </div>
          <div className = {st6.right6content1}>
           <div className = {st6.ctxt1}>{t('47')}</div>
           <div className = {st6.ctxt2}>{t('48')}</div>
          </div><div className = {st6.right6content1}>
           <div className = {st6.ctxt1}>{t('49')}</div>
           <div className = {st6.ctxt2}>{t('50')}</div>
          </div>
          </div>
        </div>
        <Link href = '/users/Page4/'>
        <button className = {st6.button6}>Get Started
          <FaChevronRight className={st6.ic2}/>
          </button>
          </Link>
      </div>
    </div>
  )
}

export default LP6

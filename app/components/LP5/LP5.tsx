'use client'; 
import React from 'react'
import st5 from "./LP5.module.css"
import { FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
const LP5 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className = {st5.mbody}>
    
      <div className = {st5.main5}>
        <div className= {st5.mainl}>
        <div className={st5.top5}>{t('21')}</div>
          <div className = {st5.mainl1}>
          {t('22')}
          </div>
          <div className = {st5.mainl2}>
          <div className = {st5.maingrid1}>
          <div className = {st5.mainlt1}>
          <div className = {st5.mainltr}>
            <div className= {st5.mltr1}>{t('23')}</div>
            <div className= {st5.mltr2}>{t('24')} </div>
          </div>
          </div>
          <div className = {st5.mainlt1}>
          <div className = {st5.mainltr}>
            <div className= {st5.mltr1}>{t('25')}</div>
            <div className= {st5.mltr2}>{t('26')}</div>
          </div>
          </div>
          <div className = {st5.mainlt1}>
          <div className = {st5.mainltr}>
            <div className= {st5.mltr1}>{t('27')}</div>
            <div className= {st5.mltr2}>{t('28')} </div>
          </div>
          </div> 
          </div>
          <div className = {st5.maingrid2}>
          <div className = {st5.mainlt2}>
          <div className = {st5.mainltr12}>
            <div className= {st5.mltr1}>{t('29')}</div>
            <div className= {st5.mltr2}>{t('30')} </div>
          </div>
          </div> 
          <div className = {st5.mainlt2}>
          <div className = {st5.mainltr12}>
            <div className= {st5.mltr1}>{t('31')}</div>
            <div className= {st5.mltr2}>{t('32')}</div>
          </div>
          </div> 
          <div className = {st5.mainlt2}>
          <div className = {st5.mainltr12}>
            <div className= {st5.mltr1}>{t('33')}</div>
            <div className= {st5.mltr2}>{t('34')}</div>
          </div>
          </div> 
          </div>
          </div>
          <Link href = '/users/Page1'>
          <button className = {st5.butt5}>Request a Demo <FaChevronRight className = {st5.ic5}/> </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LP5

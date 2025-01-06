'use client'; 
import React from 'react'
import st1 from "./LP3.module.css"
import { useTranslation } from 'react-i18next';
const LP3 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className = {st1.Lp3}>
        <div className = {st1.lpleft3}>
          <div className = {st1.left3T}>{t('12')}</div>
          <div className = {st1.left3T1}>{t('13')}</div>
          <div className = {st1.leftline}></div>
          <div className = {st1.left3T2}>{t('14')} <br/> 
          <div className = {st1.left3T22}>
          {t('15')}</div>
        </div>
        <div className = {st1.lpbox}>
            <div className={st1.boxtext}>
              <div className = {st1.boxst}>{t('180')}+</div>
              <div className = {st1.boxlt}>{t('16')}</div>
            </div>
            <div className = {st1.boxline}></div>
            <div className={st1.boxtext}>
              <div className = {st1.boxst}>{t('181')}+</div>
              <div className = {st1.boxlt}>{t('17')}</div>
            </div>
            <div className = {st1.boxline}></div>
            <div className={st1.boxtext}>
              <div className = {st1.boxst}>80+</div>
              <div className = {st1.boxlt}>{t('18')}</div>
            </div>
          </div>
        </div>
        <div className = {st1.lpright3}>
        </div>
      </div>
    </div>
  )
}

export default LP3

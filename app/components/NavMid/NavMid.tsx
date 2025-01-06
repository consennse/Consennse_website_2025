'use client';
import React from 'react'
import s from "./NavMid.module.css"
import { useTranslation } from 'react-i18next';
const NavMid = () => {
  const {t} = useTranslation(); 
  return (
    <div className={s.main}>
      <div className = {s.t}>
      <div className={s.t1}>Cloud Real Estate CRM</div>
      <div className={s.t2}>{t('2')}</div>
    </div>

    </div>
  )
}

export default NavMid

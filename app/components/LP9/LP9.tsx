'use client';
import React from 'react'
import st9 from "./LP9.module.css"
import Image from 'next/image'
import abc from"./abc.png" ;
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
const LP9 = () => {
  const {t} = useTranslation();
  return (
    <div className = {st9.mainish}>
      <div className={st9.top9}>
        <div className = {st9.lefttop9}>
        {t('65')}
        </div>
        <div className = {st9.lefttit9}>{t('66')}</div>
        <div className={st9.llime}></div>
        </div>
      <div className = {st9.main9}>
        <div className = {st9.left9}>
        <div className = {st9.mcimg}>
          <Image src = {abc} alt ="office" style={{ borderRadius: '7px' }} className = {st9.ofc}/>
        </div>
        </div>

        <div className = {st9.right9}>
        <div className = {st9.righttop9}>
        {t('67')}
        </div>
        <div className = {st9.righttit9}>{t('68')}</div>
        <div className = {st9.newline9}></div>
        <div className = {st9.rightmc}>{t('69')}</div>
        <div className = {st9.but9}>
          <Link href = '/users/SwissEdition'>
          <button className = {st9.rightbut9}>{t('70')} <FaChevronRight style={{margin: '14px', fontSize : '12px'}}/> </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LP9

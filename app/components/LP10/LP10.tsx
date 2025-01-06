'use client';
import React from 'react'
import st10 from "./LP10.module.css"
import Image from 'next/image'
import bg10 from "./bg10.png"
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa'
import Link from 'next/link';
const LP10 = () => {
  const {t} = useTranslation();
  return (
    <div className = {st10.body}>
      <div className = {st10.main10}>
      <div className = {st10.right10}>
        <div className = {st10.mcimg}>
          <Image src = {bg10} alt ="workspace" style={{ borderRadius: '7px' }}className = {st10.ofc}/>
        </div>
        </div>
        <div className = {st10.left10}> 
        <div className = {st10.righttop10}>
        {t('71')}
        </div>
        <div className = {st10.righttit10}>{t('72')}</div>
        <div className = {st10.llime}></div>
        <div className = {st10.rightmc10}>{t('73')}</div>
        <div className = {st10.but10}>
          <Link href = '/users/WebOffice'>
          <button className = {st10.rightbut10}>{t('70')}<FaChevronRight style={{margin: '14px', fontSize : '12px'}}/> </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LP10

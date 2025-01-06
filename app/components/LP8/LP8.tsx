'use client';
import React from 'react'
import st8 from "./LP8.module.css"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
const LP8 = () => {
  const {t} = useTranslation(); 
  return (
    <div>
      <div className = {st8.main8}>
        <div className={st8.left8}>
        <div className = {st8.tit8}>
        {t('80')}
        </div>
        <div className={st8.gridbox}>
          <div className={st8.gr1}>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('57')}
          </div>
          <div className = {st8.mc18}>
          {t('58')}
          </div>
        </div>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('59')}
          </div>
          <div className = {st8.mc18}>
          {t('60')}
          </div>
          </div>
        </div>
        <div className={st8.gr1}>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('61')}
          </div>
          <div className = {st8.mc18}>
          {t('62')}
          </div>
        </div><div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('63')}
          </div>
          <div className = {st8.mc18}>
          {t('64')}
          </div>
          </div>
        </div>
        </div>
        <Link href = '/users/Page1'>
        <button className = {st8.button6}>Get Started
                  <FaChevronRight className={st8.ic2}/>
          </button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default LP8

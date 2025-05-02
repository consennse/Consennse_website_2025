'use client';
import React from 'react'
import st7 from "./LP7.module.css"
import Image from 'next/image'
import rext from "./Rectangle 2683.png"
import { useTranslation } from 'react-i18next';
const LP7 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className = {st7.main7}>
      <div className = {st7.left7}>
      <div className = {st7.left7top}>
      {t('51')}
      </div>
      <div className = {st7.left7txt}>
      <h2>
        {t('52')}</h2> </div>
      <div className = {st7.left7txt1}> {t('53')}</div>
       <div className = {st7.left7txt2}>
      {t('54')}
       </div> 
      <div className = {st7.left7txt2}>
      {t('55')}</div>
      </div>
      <div className = {st7.right7}>
          <div className = {st7.imgbox}> 
          <Image src = {rext} alt = 'collegues' className={st7.brimg} width={718} />
        </div>

      </div>
      </div>
    </div>
  )
}

export default LP7

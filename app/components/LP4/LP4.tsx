'use client'; 
import React from 'react'
import st4 from "./LP4.module.css"
import Image from 'next/image'
import sf from "./sf.svg"
import gr1 from "./Propertybase_300_px_transparent.png"
import { useTranslation } from 'react-i18next';
const LP4 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className = {st4.m}>
      <div className={st4.l}> 
      <div className = {st4.lboxt}>
        <Image src = {sf} alt = "logo1" height={60} className = {st4.im1}/>
        <div className = {st4.lb1}>
      {t('19')}
      </div> 
      </div>
      <div className = {st4.lboxt}>
      <Image src ={gr1} alt = "logo2" height={40} className = {st4.im2}/>
      <div className = {st4.lb2}>
      {t('20')}
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default LP4

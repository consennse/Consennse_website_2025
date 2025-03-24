'use client';
import React from 'react'
import Image from 'next/image';
import back from "./Image 2.png"
import st6 from "./LP6.module.css"
import { useTranslation } from 'react-i18next'
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
const LP6 = () => {
  const{t} = useTranslation();
  return (
    <div className = {st6.mainish}>
      <div className={st6.body6}>
      <div className={st6.leftwa}>
        <div className = {st6.left6}>
          <div className= {st6.lt1}>{t('35')}</div>
          <div className = {st6.lt2}>
          <h2>
            {t('36')}
            </h2>
            </div>
          <div className = {st6.sline}></div>
          <div className = {st6.lt3}>{t('37')}</div>
        </div>
        </div>
        <div className = {st6.rightwa}>
      <Image src = {back} className = {st6.backimg} alt = "background" />
        </div>
      </div>
      <div className = {st6.belowbody}>
      <div className = {st6.right6}>
          <div className = {st6.rgrid1}>
          <div className = {st6.right6content}>
           <div className = {st6.ctxt1}>
           <h3>
            {t('39')}</h3> </div>
           <div className = {st6.ctxt2}>{t('40')}</div>
          </div>
          <div className = {st6.right6content}>
           <div className = {st6.ctxt1}><h3> {t('41')}</h3> </div>
           <div className = {st6.ctxt2}>{t('42')}</div>
          </div>
          <div className = {st6.right6content}>
           <div className = {st6.ctxt1}><h3> {t('43')}</h3> </div>
           <div className = {st6.ctxt2}>{t('44')}</div>
          </div>
          </div>
          <div className ={st6.rgrid2}>
          <div className = {st6.right6content1}>
           <div className = {st6.ctxt1}> <h3>{t('45')}</h3> </div>
           <div className = {st6.ctxt2}>{t('46')}</div>
          </div>
          <div className = {st6.right6content1}>
           <div className = {st6.ctxt1}><h3> {t('47')}</h3> </div>
           <div className = {st6.ctxt2}>{t('48')}</div>
          </div><div className = {st6.right6content1}>
           <div className = {st6.ctxt1}><h3>{t('49')}</h3></div>
           <div className = {st6.ctxt2}>{t('50')}</div>
          </div>
          </div>
        </div>
        <Link href = '/content/services/'>
        <button className = {st6.button6}
        onClick={()=>
          sendGAEvent({event:"clicked", value: "services", 'debug_mode':true } )
        }
        >{t('144')}
          <FaChevronRight className={st6.ic2}/>
          </button>
          </Link>
      </div>
    </div>
  )
}

export default LP6

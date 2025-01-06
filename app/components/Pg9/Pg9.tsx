'use client';
import React from 'react'
import style from "./Pg9.module.css"
import Nav from "@/app/components/Nav/Nav"
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'
const Pg9 = () => {
   const {t} = useTranslation();
  return (
    <div className = {style.body}>
      <Nav/>
      <div className = {style.main}>
      <div className = {style.heading}>{t('400')}</div>
      <div className = {style.underline}></div>
      <div className = {style.content}>
        <div className = {style.h1}>{t('401')}</div>
        <div className = {style.txt}>{t('402')}</div>
        <div className = {style.h1}>{t('403')}</div>
        <div className = {style.txt3}>Consennse GmbH 
         <div> Ringwilerstrasse 4, 8620 Wetzikon ZH, {t('407')} </div>
         <div> {t('408')} </div>
          <div>urs.senn@consennse.com</div>
          +41 79 441 0017</div>
          <div className = {style.h1}>{t('404')}</div>
          <div className = {style.listh}>{t('405')}</div>
        <div className = {style.txt2}>{t('406')}</div>
<ul className = {style.list}>
<li>{t('409')}</li>
<li>{t('410')}</li>
<li>{t('411')}</li>
<li>{t('412')}</li>
</ul>
       <div className = {style.txt2}>{t('413')}</div>
       <div className = {style.listh}> {t('414')}</div>
<div className = {style.txt2}>    {t('415')} </div>
<ul className = {style.list}>
<li>{t('416')}</li>
<li>{t('417')}</li>
<li>{t('419')}</li>
</ul>

<div className = {style.txt2}>{t('420')}</div>
<ul className = {style.list}>
<li> <b>{t('421')}</b> {t('422')}</li>
<li><b>{t('423')}</b> {t('424')}</li>
  </ul>
<div className = {style.text}>
<b>
{t('425')}</b>
<div className = {style.txt2}>
{t('426')}
</div>
</div>
<div className = {style.text}>
<b>
{t('427')}</b>
<div className = {style.txt2}>
{t('428')}
</div></div>
<div className = {style.text}>
<b>
{t('429')}</b>
<div className = {style.txt2}>
{t('430')}
</div></div>
<div className = {style.text3}>
{t('431')}</div>
<div className = {style.h1}>{t('432')}</div>
<div className = {style.txt2}>{t('433')}</div>
<div className = {style.h1}>{t('434')}</div>
<div className = {style.txt2}>{t('435')}
<div className = {style.text4}>
{t('436')}
</div>
<div className = {style.text4}>
{t('437')}</div>
<div className = {style.text4}>
{t('438')}</div></div>
<div className = {style.h1}>{t('439')}</div>
<div className = {style.txt2}>{t('440')}</div>
<div className = {style.h1}>{t('441')}</div>
<div className = {style.txt2}>{t('442')}</div>
<ul className = {style.list}>
<li>{t('443')}</li>
<li>{t('444')}</li>
<li>{t('445')}</li>
<li>{t('446')}</li>
<li>{t('447')}</li>
<li>{t('448')}</li>
</ul>
<div className = {style.text4}>{t('449')}</div>
<div className = {style.h1}>{t('450')}</div>
<div className = {style.txt2}>{t('451')}</div>
<div className = {style.text}>{t('452')}</div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pg9

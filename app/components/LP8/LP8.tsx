'use client';
import React from 'react'
import st8 from "./LP8.module.css"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
const LP8 = () => {
  const {t} = useTranslation(); 
  const sendGAEvent = ({
    action,
    category,
    label,
    value,
  }: {
    action: string;
    category?: string;
    label?: string;
    value?: number;
  }) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category || "General",
        event_label: label || "No Label",
        value: value || 1,
        debug_mode: true,  // ✅ Debug mode inside parameters
      });
    } else {
      console.warn("GA not initialized");
    }
  };
  return (
    <div>
      <div className = {st8.main8}>
        <div className={st8.left8}>
        <div className = {st8.tit8}>
        <h2>
        {t('80')} </h2>
        </div>
        <div className={st8.gridbox}>
          <div className={st8.gr1}>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          <h3>
          {t('57')}
          </h3>
          </div>
          <div className = {st8.mc18}>
          {t('58')} 
          </div>
        </div>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}> 
          <h3>
          {t('59')}
          </h3>
          </div>
          <div className = {st8.mc18}>
          {t('60')}
          </div>
          </div>
        </div>
        <div className={st8.gr1}>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          <h3>
          {t('61')}
          </h3>
          </div>
          <div className = {st8.mc18}>
          {t('62')}
          </div>
        </div><div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          <h3>
          {t('63')}
          </h3>
          </div>
          <div className = {st8.mc18}>
          {t('64')}
          </div>
          </div>
        </div>
        </div>
        <Link href = '/content/contact'>
        <button
  className={st8.button6}
  onClick={() => {
    console.log("GA Event Sent:", {
      action: "clicked",
      category: "User Interaction",
      label: "Advantages Button",
      value: 1,
    });
  
    sendGAEvent({
      action: "clicked",
      category: "User Interaction",
      label: "Advantages Button",
      value: 1,
    });
  }}
          >{t('6A')}
                  <FaChevronRight className={st8.ic2}/>
          </button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default LP8

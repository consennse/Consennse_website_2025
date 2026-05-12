'use client' ; 
import React from 'react'
import Image from 'next/image';
import lin from "./Facebook.png"
import st12 from "./Footer.module.css"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FormEvent, ChangeEvent } from 'react';
const Footer = () => {
  const {t,i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  )  => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      ...formData,
      option:
        i18n.language === "de"
          ? "Newsletter GERMAN"
          : "Newsletter ENGLISH",
          subject: "Website Newsletter",
    };

    try {
      const response = await fetch("/api/zapier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Subscribed successfully!");

        setFormData({
          Fname: "",
          Lname: "",
          email: "",
          consent: false,
        });
        setOpen(false)
      } else {
        console.log(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      console.log("Server error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className = {st12.main12}>
      <div className = {st12.bot12}>
        <div className={st12.botcontent}>
        <div className = {st12.bott}>
      <div className = {st12.bot1}>
      <div className = {st12.bottext12}>Consennse GmbH</div>
      <div className = {st12.bots1}>
      {/* Ringwilerstrasse 4 8620 Wetzikon ZH  */}
      Switzerland
      </div>
      <div className = {st12.bots2}>info@consennse.com</div>
      <div className = {st12.bots112}   onClick={() => setOpen(true)}>
        <div>Newsletter</div>
        <div className={st12.chevright}> <FaChevronRight/> </div>
      </div>
            {/* Popup */}
            {open && (
        <div className={st12.overlay}>
          <div className={st12.popup}>
        <div className = {st12.top}>
            <div className = {st12.totle}>{t('635')} </div>
            <button
              className={st12.closeBtn}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
</div>
         

            <form className={st12.form} onSubmit={handleSubmit}>
              <label>{t('636')} *</label>
              <input
                type="text"
                name="Fname"
                placeholder= {i18n.language === "de"
                ? "Vorname eingeben"
                : "Enter First Name"}
                value={formData.Fname}
                onChange={handleChange}
                required
              />
                   <label>{t('637')} *</label>
              <input
                type="text"
                name="Lname"
                placeholder={
                  i18n.language === "de"
                  ? "Nachname eingeben"
                  : "Enter Last Name"
                }
                value={formData.Lname}
                onChange={handleChange}
                required
              />
       <label>{t('638')} *</label>
              <input
                type="email"
                name="email"
        placeholder={
          i18n.language === "de"
          ? "E-mail Adresse eingeben"
          : "Enter E-mail ID"
        }
        value={formData.email}
        onChange={handleChange}
        required
              />
              <div className = {st12.ast}>
               {t('640')}
                </div>
              <div className = {st12.tnc}>
                <div className = {st12.checkboxWrap}>  <input type="checkbox" name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required /></div>
                <div className = {st12.pvc}>
                  <div className = {st12.pvc1}>{t('641')}
</div>
<div className = {st12.pvc2}>
<Link href = '/content/privacypolicy'>
{t('642')} </Link>
</div>
                </div>
              </div>
              <button type="submit"   
        className={st12.subbut}
        disabled={loading}
      >
        {t('639')}

           <div  className = {st12.chrv}>
                <FaChevronRight/> </div>
              </button>
            </form>
          </div>
        </div>
      )}

      <div className = {st12.img12} >
      <Link href = "https://www.linkedin.com/company/consennse"   target="_blank" 
        rel="noopener noreferrer">
         <Image src ={lin} alt = "linkedin" height={35} className ={st12.img123} quality={100}  />
         </Link>
         </div>
      </div>
      
      <div className = {st12.bottombox2}>
        <div className = {st12.bot2}>
        <div className = {st12.bots21}>
          {t('96A')}
          </div>
        <div className = {st12.bots223}>
          <div className = {st12.botts}>
          <Link href = '/content/aboutus'>
            {t('601')}
            </Link>
            </div>
          <div className = {st12.botts}>
          <Link href = '/content/contact'>
            {t('6')}
            </Link>
            </div>
          <div className = {st12.botts}>
          <Link href = '/content/support'>
            Support
            </Link>
            </div>
            {/* <div className = {st12.botts}>
          <Link href = '/content/packages'>
            {t('627')}
            </Link>
            </div> */}
        </div>
        </div>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>Services</div>
        <div className = {st12.bots223}>
          <Link href = '/content/services'>
          {t('82')}
          </Link>
          </div> 
        <div className = {st12.bots224}>
        <Link href = '/content/services'>
          {t('81A')}
          </Link>
          </div>
      </div>
      <div className={st12.bot22}>
        <div className = {st12.bots21}>{t('83')}</div>
        <div className = {st12.bots22}>
          <Link href = '/content/swissedition'>
          {t('84')}
          </Link>
          </div>
        <div className = {st12.bots22}>
          <Link href = '/content/weboffice'>
          {t('84A')}
          </Link>
          </div>
        <div className = {st12.bots22}>
          <Link href = '/content/expose'>
          EXPOSE for Propertybase
          </Link>
          </div>
      </div>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>{t('85')}</div>
        <div className = {st12.bots23}>
        <Link href = "https://www.propertybase.com/"   target="_blank" 
        rel="noopener noreferrer">
          {t('86')} </Link></div>
        <div className = {st12.bots23}>
        <Link href = "  https://www.salesforce.com/"   target="_blank" 
        rel="noopener noreferrer">
          {t('87B')}
          </Link>
          </div>
      </div>
      </div>
      
      </div>
      <div className = {st12.botline}></div>
      <footer className={st12.foot1}>
        <div className = {st12.footdiv1}>
        2026 © Consennse - {t('89')}
        </div>
        <div className = {st12.footdiv2}>
          <Link href = '/content/privacypolicy'>
          {t('90')}
          </Link>
          </div>
        </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer

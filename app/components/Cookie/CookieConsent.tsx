'use client';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import style from "./CookieConsent.module.css"
import Link from "next/link";
import { useTranslation } from "react-i18next";
const CookieConsent = () => {
  const {t} = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the cookieConsent cookie exists
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowPopup(true); // Show the popup if consent is not found
    } else {
      console.log("Existing cookieConsent value:", consent); // Log existing cookie value
    }
  }, []);

  const handleAccept = () => {
    // Set the cookie for 1 year
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setShowPopup(false); // Hide the popup

    // Log the cookie value after setting it
    const consentValue = Cookies.get("cookieConsent");
    console.log("CookieConsent accepted and stored:", consentValue);
  };

  // Don't render the popup if it shouldn't be shown
  if (!showPopup) return null;

  return (
    <div
      className={style.box}
    >
      <div style={{ margin: 0 }} className = {style.para}>
        {t('453')} 
        <Link href = '/users/PrivacyPolicy'>
        <div className = {style.para2}>{t('454')}</div>
        </Link>
      </div>
      <button
        onClick={handleAccept}
        className = {style.but}
      >
        Ok
      </button>
    </div>
  );
};

export default CookieConsent;

'use client'
import React from 'react'
import style from "./Pg3.module.css"
import Nav from '../Nav/Nav'
import Image from 'next/image';
import comp from "./comp6.jpeg"
import Frame from "./Frame.png"
import g1 from "./Group 1597885673.png"
import g2 from "./Group 1597885675.png"
import g3 from "./Group 1597885677.png"
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next'
const Pg3 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    company: '',
    email: '',
    phone: '',
    option: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleOptionChange = (option:string) => {
    setSelectedOption(option);
    setFormData((prevData) => ({
      ...prevData,
      option: option,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true); // Set loading state to true when submitting
    e.preventDefault();

    console.log('Form Data Submitted:', formData);
    const response = await fetch('/api/zapier/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send form data as JSON
    });
    console.log(response); 
    // Show the popup
    setPopupVisible(true);

    // Wait for 2 seconds before hiding popup and navigating to home
    setTimeout(() => {
      setPopupVisible(false); // Hide the popup after 2 seconds
      setIsLoading(false); // Set loading state to false (hide "Loading..." text)
      window.location.href = '/'; // Redirect to the home page
    }, 2000); // 2 seconds delay
  };


  const closePopup = () => {
    setPopupVisible(false); // Hide the popup
  };
  const {t} = useTranslation(); 
  return (
    <div className={style.mainish}>
            <Nav/>
      <div className={style.hello}>
      <div className = {style.maincon}>
        <div className = {style.maintop}>
        <h1>
          {t('118')}</h1></div>
        <div className = {style.form}>
        <form onSubmit={handleSubmit} className={style.form12}>
          <div className = {style.leftf}>
            <div className = {style.l1}> 
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                <h2>
                {t('92')}
                </h2>
              </div>
              <div className = {style.fnameinp}>
                <input type="text" name="fname" id = "fname" className={style.finput1} placeholder={t('94')} onChange={handleChange} value={formData.fname} required></input>
              </div>
            </div>
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                <h2>
                {t('93')}
                </h2>
              </div>
              <div className = {style.fnameinp}>
                <input type="text" id="lname" name="lname" onChange={handleChange} value={formData.lname}className={style.finput1} placeholder={t('95')} required></input>
              </div>
            </div>
            </div>
            <div className = {style.l2}>
              <div className = {style.comp}>
                <h2>  
                {t('96')}
                </h2>
              <div className = {style.op}>{t('97')}</div>
              </div>
              <div className = {style.compi}>
              <input type="text" id ="company" name = "company" onChange={handleChange} value={formData.company} className={style.finput3} placeholder={t('98')} ></input>
              </div>
            </div>
            <div className = {style.l3}>
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                <h2>
                {t('99')}
                </h2>
              </div>
              <div className = {style.fnameinp}>
                <input id = "email" name="email" type="email" onChange={handleChange} value={formData.email} className={style.finput1} placeholder={t('101')} required></input>
              </div>
            </div>
            <div className = {style.l6}>
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                <h2>
                {t('100')}
                </h2>
              </div>
              <div className = {style.fnameinp}>
                <input type="text"   name="phone" id ="phone" className={style.finput1} placeholder={t('102')} onChange={handleChange} value={formData.phone} required ></input>
              </div> 
            </div>
            </div>
            </div>
            <div className = {style.l4} radioGroup = "group">
            <div className = {style.comp}> {t('112')}
              </div>
              <div className={style.compi1}>
  <div className={`${style.option}`} onClick={() => handleOptionChange("CRM Support Basis")}>
    <span
      className={`${style.arrow} ${
        selectedOption === "CRM Support Basis" ? style.change : ""
      }`}
    ></span>
    <input
      type="radio"
      id="CRM Support Basis"
      className={style.radioInput}
      name="option"
      value={t("113")}
      checked={selectedOption === "CRM Support Basis"}
      onChange={() => handleOptionChange("CRM Support Basis")}
    />
    {t("113")}
  </div>

  <div className={`${style.option}`} onClick={() => handleOptionChange("CRM Support SLA Silver")}>
    <span
      className={`${style.arrow} ${
        selectedOption === "CRM Support SLA Silver" ? style.change : ""
      }`}
    ></span>
    <input
      type="radio"
      id="CRM Support SLA Silver"
      className={style.radioInput}
      name="option"
      value={t("114")}
      checked={selectedOption === "CRM Support SLA Silver"}
      onChange={() => handleOptionChange("CRM Support SLA Silver")}
    />
    {t("114")}
  </div>
</div>
<div className={style.compi1}>
<div className={`${style.option}`} onClick={() => handleOptionChange("CRM Support SLA Gold")}>
    <span
      className={`${style.arrow} ${
        selectedOption === "CRM Support SLA Gold" ? style.change : ""
      }`}
    ></span>
    <input
      type="radio"
      id="CRM Support SLA Gold"
      className={style.radioInput}
      name="option"
      value={t("115")}
      checked={selectedOption === "CRM Support SLA Gold"}
      onChange={() => handleOptionChange("CRM Support SLA Gold")}    />
    {t("115")}
  </div>

  <div className={`${style.option}`} onClick={() => handleOptionChange("CRM Support SLA Platinum")}>
    <span
      className={`${style.arrow} ${
        selectedOption === "CRM Support SLA Platinum" ? style.change : ""
      }`}
    ></span>
    <input
      type="radio"
      id="CRM Support SLA Platinum"
      className={style.radioInput}
      name="option"
      value={t("116")}
      checked={selectedOption === "CRM Support SLA Platinum"}
      onChange={() => handleOptionChange("CRM Support SLA Platinum")}    />
    {t("116")}
  </div>
  <div className={`${style.option}`} onClick={() => handleOptionChange("I need advice")}>
    <span
      className={`${style.arrow} ${
        selectedOption === "I need advice" ? style.change : ""
      }`}
    ></span>
    <input
      type="radio"
      id="I need advice"
      className={style.radioInput}
      name="option"
      value={t("117")}
      checked={selectedOption === "I need advice"}
      onChange={() => handleOptionChange("I need advice")}    />
    {t("117")}
  </div>

</div>

            </div>
            <div className = {style.l5}>
            <div className = {style.comp}> <h2> {t('105')} </h2>
              </div>
              <div className = {style.compi2}>
              <textarea className={style.finput2} placeholder={t('183')}  name = "message" id = "message" onChange={handleChange} value={formData.message} required ></textarea>
              </div>
            </div>
            <div className={style.but5}>
              <button type="submit" className = {style.lbutt1} disabled={isLoading}>
              {isLoading ? "Loading.." : t('107')}
              <FaChevronRight className = {style.ice}/>
              </button>
            </div>
            <div className = {style.right31mob}>
              <div className = {style.righttxt3new}>
                <div className = {style.righttxt31}>
                  <div className = {style.rimg}><Image src = {g3} alt = "phone" height={35} className ={style.rimg1} /></div>
                  <div className = {style.rt31}>
                  <a href="tel:+41 79 441 00 17">
                    +41 79 441 00 17
                    </a>
                  </div>
                </div>
                <div className = {style.righttxt32}>
                <div className = {style.rimg}><Image src = {g2} alt = "mail" height={35} className={style.rimg3} /></div>
                  <div className = {style.rt32}>
                  <a href="mailto:info@consennse.com">
                    info@consennse.com
                    </a>
                    </div>
  
                </div>
              </div>
              <div className = {style.righttxt33}>
                    <div className = {style.rimg}><Image src = {g1} alt = "linkedin" height={35}className ={style.rimg2} /></div>
                  <div className = {style.rt33}>
                  <Link href = "https://www.linkedin.com/company/consennse"   target="_blank" 
        rel="noopener noreferrer">
                    linkedin.com/company/consennse

                    </Link>
                    </div>
                </div>
            </div>
          </div>
          </form>
          {isPopupVisible && (
        <div className={style.popupss}
          style={{
            display: "flex", 
            flexDirection : "column",
            alignItems : "center",
            borderRadius : "10px", 
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            paddingLeft: "4rem",
            paddingRight : "4rem",
            textAlign : "center",
          }}
        >
          
          <Image src = {Frame} alt = "tick" height={50} /> 
          <h2 style = {{
            fontSize: "17px", 
            fontWeight : "600",
            marginTop : "0.8rem",
          }}>{t('110')}</h2>
          <p style = {{fontSize: "12px"}}>{t('111')}</p>
          {/* <button onClick={closePopup}>Close</button> */}
        </div>
      )}

      {/* Background Overlay */}
      {isPopupVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={closePopup}
        ></div>
      )}
          <div className = {style.rightf}>
            <div className = {style.rightt1}>
              <div className = {style.rightbox1}>
              </div>
              <div className = {style.rightimg}>
                <Image src = {comp} alt = "girl" className={style.img1}/>
              </div>
            </div>
            <div className = {style.right2}>
              <div className = {style.righttxt}>
                <div className = {style.righttxt1}>
                  <div className = {style.rimg}><Image src = {g3} alt = "phone" height={35} className ={style.rimg1} /></div>
                  <div className = {style.rt1}>
                  <a href="tel:+41 79 441 00 17">
                    +41 79 441 00 17
                    </a>
                  </div>
                </div>
                <div className = {style.righttxt2}>
                <div className = {style.rimg}><Image src = {g2} alt = "mail" height={35} className={style.rimg3} /></div>
                  <div className = {style.rt3}>
                  <a href="mailto:info@consennse.com">
                    info@consennse.com
                    </a>
                    </div>
  
                </div>
              </div>
              <div className = {style.righttxt3}>
                    <div className = {style.rimg}><Image src = {g1} alt = "linkedin" height={35}className ={style.rimg2} /></div>
                  <div className = {style.rt2}>
                  <Link href = "https://www.linkedin.com/company/consennse"   target="_blank" 
        rel="noopener noreferrer">
                    linkedin.com/company/consennse

                    </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
      </div>
    </div>
  )
}

export default Pg3

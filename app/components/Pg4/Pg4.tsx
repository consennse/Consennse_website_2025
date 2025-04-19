'use client'
import React from 'react'
import Nav from '../Nav/Nav'
import Image from 'next/image'
import F1 from "./Group 1597885749.png"
import F2 from "./Frame 1249186653.png"
import F3 from "./Frame 1249186653-2.png"
import Link from 'next/link'
import F5 from "./Frame 1249186649.png"
import Foot from "../Footer/Footer"
import style from "./Pg4.module.css"
import g1 from "./check-circle-1.png"
import F4 from "./Rectangle 34625456.png"
import { FaChevronRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
const Pg4 = () => {
  const {t} = useTranslation();
  
  return (
    <div className={style.mainish}>
    <Nav/>
    <div className={style.mainbod}>
      <div className = {style.maincon}>
      <div className = {style.top}>
        <div className = {style.left}>
          <h1 className = {style.ltop}>
          {t('119')}
          </h1>
          <div className={style.lbox}></div>
          <div className = {style.lmid}>
          {t('120')}
          </div>
        </div>
        <div className = {style.right}>
          <Image src = {F4} alt = "worker" width={632}/>
        </div>
      </div>
      <div className = {style.bottom}>
        <div className = {style.botup}>
        <div className = {style.bottop}>{t('7A')}</div>
        <h2 className = {style.botmid}>{t('121')}</h2>
        <div className = {style.botbox}>
        </div>
        <div className={style.botbot}>{t('122')}</div>
</div>
<div className = {style.boxess}>
<div className = {style.botnext}>
    <div className = {style.first}>
      <Image src = {F5} alt = "new" height={50}/>
      <h3 className = {style.head}>CRM Support
Basic
</h3>
<div className={style.down}>{t('123')}</div>
<div className = {style.donlin}></div>
<div className={style.main}>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('124')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('125')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('125A')}</div>
    </div>
    </div>
</div>
<div className = {style.botnext}>
    <div className = {style.first}>
      <Image src = {F2} alt = "new" height={50} width={50}/>
      <h3 className = {style.head}>CRM Support 
SLA
Silver

</h3>
<div className={style.down}>{t('126A')}</div>
<div className = {style.donlin2}></div>
<div className = {style.but1}>

</div>
<div className={style.main}>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('126')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('127')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('125A')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('128')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('129')}</div>
    </div>

    </div>
</div><div className = {style.botnext3}>
    <div className = {style.first3}>
      <Image src = {F1} alt = "new" height={47}/>
      <h3 className = {style.head3}>CRM Support 
SLA
Gold

</h3>
<div className={style.down3}>{t('130')}</div>
<div className = {style.donlin3}></div>
<div className = {style.but1}>

</div>
<div className={style.main3}>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('131')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('132')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('133')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('134')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('127A')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('135')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('136')}</div>
    </div>

    </div>
</div><div className = {style.botnext}>
    <div className = {style.first}>
      <Image src = {F3} alt = "new" height={47}/>
      <h3 className = {style.head}>CRM Support 
SLA
Platinum

</h3>
<div className={style.down}>{t('137')}</div>
<div className = {style.donlin4}></div>
<div className = {style.but1}>

</div>
<div className={style.main}>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('138')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('139')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('140')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('141')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('127A')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('142')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={25}/>
        <div className = {style.tick1}>{t('143')}</div>
    </div>

    </div>
</div>
</div>

<div className = {style.st}>{t('182')}</div>
<div className = {style.lastpage}>
          <div className = {style.lasttit}>{t('317')}</div>
          <div className = {style.con5}>{t('318')}</div>
          <Link href = '/content/contactsupportcontract'>
          <button className = {style.but5}>{t('38')} <FaChevronRight className={style.iconlast}/> </button>
          </Link>
        </div>
      </div>
      </div>
      </div>
      <Foot/>


    </div>
  )
}

export default Pg4

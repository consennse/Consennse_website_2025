'use client'
import React from 'react'
import Nav from '../Nav/Nav'
import Image from 'next/image'
// import F1 from "./Group 1597885749.png"
// import F2 from "./Frame 1249186653.png"
// import F3 from "./Frame 1249186653-2.png"
import CurrencyDisplay from '../CurrencyDisplay/CurrencyDisplay'
import Link from 'next/link'
// import F5 from "./Frame 1249186649.png"
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
      <h3 className = {style.head}>
       <div className = {style.crm}>
        CRM Support 
        </div>
        <div className ={style.slaBasic}>
        SLA Basic
        </div>
</h3>
<div className = {style.newbut}><CurrencyDisplay/> 250/month</div>
<div className={style.down1}>{t('123')}</div>
<div className = {style.donlin}></div>
<div className={style.main}>
  
<h3 className = {style.newheaddesc}>Details</h3>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick1}>{t('603')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick1}>{t('604')}</div>
        </div>
    <div className = {style.donlin11}></div>
    <h3 className = {style.newheaddesc}>{t('605')}</h3>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick1}>{t('606')}</div>
    </div>
    <div className = {style.donlin21}></div>
    <h3 className = {style.newheaddesc}>{t('607')}</h3>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick2}>BACKUP for Propertybase: <CurrencyDisplay/> 
50</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick3}>
          <div className = {style.tick21}>
          MAIL PARSING for Propertybase: </div>
          <div className = {style.tick211}>
          <CurrencyDisplay/>
           50</div></div>
    </div>
    </div>
    </div>
</div>
<div className = {style.botnext}>
    <div className = {style.first}>
      <h3 className = {style.head}><div className = {style.crm}>
        CRM Support 
        </div>
        <div className ={style.slaBasic}>
        SLA Silver
        </div>

</h3>
<div className = {style.newbut}> <CurrencyDisplay/>  350/month</div>
<div className={style.down}>{t('126A')}</div>
<div className = {style.donlin2}></div>
<div className = {style.but1}>

</div>
<div className={style.main}>
  
  <h3 className = {style.newheaddesc}>Details</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>
          {t('609')} 
          </div>
      </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>
          {t('610')}
          </div>
          </div>
          <div className = {style.donlin12}></div>
      <h3 className = {style.newheaddesc}>{t('605')}</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('611')}</div>
      </div>
      <div className = {style.donlin22}></div>
      <h3 className = {style.newheaddesc}>{t('607')}</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick2}>BACKUP for Propertybase: <CurrencyDisplay/> 40</div>
      </div>
      <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick3}>
        <div className = {style.tick21}>
          MAIL PARSING for Propertybase: </div>
          <div className = {style.tick211}>
           <CurrencyDisplay/> 40</div> </div>
    </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick2}>UPDATE for Propertybase: <CurrencyDisplay/> 
40</div>
      </div>
    </div>
    

    </div>
</div><div className = {style.botnext3}>
    <div className = {style.first3}>
    <h3 className = {style.head}><div className = {style.crm}>
        CRM Support 
        </div>
        <div className ={style.slaBasic}>
        SLA Gold
        </div>

</h3>
<div className = {style.newbut}> <CurrencyDisplay/> 475/month</div>
<div className={style.down3}>{t('130')}</div>
<div className = {style.donlin3}></div>
<div className = {style.but1}>

</div>
<div className={style.main}>
  
  <h3 className = {style.newheaddesc}>Details</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>
          {t('614')}
          </div>
      </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>
          {t('615')}
          </div>
          </div>
          <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('616')}</div>
      </div>
      <div className = {style.donlin13}></div>
      <h3 className = {style.newheaddesc}>{t('605')}</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('611')}</div>
      </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('625')}</div>
      </div>
      <div className = {style.donlin23}></div>
      <h3 className = {style.newheaddesc}>{t('607')}</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick2}>BACKUP for Propertybase: <CurrencyDisplay/> 40</div>
      </div>
      <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick3}>
        <div className = {style.tick21}>
          MAIL PARSING for Propertybase: </div>
          <div className = {style.tick211}>
           <CurrencyDisplay/> 40</div>
           </div>
    </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick2}>UPDATE for Propertybase: <CurrencyDisplay/> 
40</div>
      </div>
    </div>

  
    

    </div>
</div><div className = {style.botnext}>
<div className = {style.first3}>
    <h3 className = {style.head}><div className = {style.crm}>
        CRM Support 
        </div>
        <div className ={style.slaBasic}>
        SLA Platinum
        </div>

</h3>
<div className = {style.newbut}> <CurrencyDisplay/> 750/month</div>
<div className={style.down}>{t('137')}</div>
<div className = {style.donlin4}></div>
<div className = {style.but1}>

</div>

<div className={style.main}>
  
  <h3 className = {style.newheaddesc}>Details</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>
          {t('620')}
          </div>
      </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>
          {t('621')}
          </div>
          </div>
          <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('616')}</div>
      </div>
      <div className = {style.donlin14}></div>
      <h3 className = {style.newheaddesc}>{t('605')}</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('611')}</div>
      </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('618')}</div>
      </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>{t('619')}</div>
      </div>
      <div className = {style.donlin24}></div>
      <h3 className = {style.newheaddesc}>{t('622')}</h3>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>BACKUP for Propertybase</div>
      </div>
      <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={22}/>
        <div className = {style.tick1}>
          MAIL PARSING for Propertybase</div>
    </div>
      <div className  = {style.l1}>
        <Image src ={g1} alt ="tick" height={22}/>
          <div className = {style.tick1}>UPDATE for Propertybase</div>
      </div>
    </div>


    </div>
</div>
</div>

<div className = {style.st}>{t('182')}</div>
<div className = {style.st2}>{t('182A')}</div>
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

'use client';
import React from 'react'
import style from "./Pg10.module.css"
import Nav from "@/app/components/Nav/Nav"
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'
import Link from 'next/link';
import pfp from "./image-7.svg"
import pfp2 from "./image-8.svg"
import pfp3 from "./image-9.svg"
import pfp4 from "./image-10.svg"
import Image from 'next/image';
import mail from "./Group 1597885675-2.svg"
import logo1 from "./Frame 1249186730-21.svg"
import logo2 from "./Frame 1249186730-22.svg"
import logo3 from "./Markstein AG 1.svg"
import logo4 from "./Walde & Partner Immobilien AG 2.svg"
import logo5 from "./Alpine Homes SA 1.svg"
import logo6 from "./Anton Lochmatter AG 1.svg"
import logo7 from "./Casas Mallorca 1.svg"
import logo8 from "./Haupt Immobilien AG 1.svg"
import logo9 from "./Moser Anlageimmobilien AG 1.svg"
import logo10 from "./NAR - Logo 1.svg"
import logo11 from "./Nova Casa 1.svg"
import logo12 from "./logo-website-swiss-homes 1.svg"
const Pg10 = () => {
  const {t} = useTranslation();
  return (
    <div className={style.body}>
        <Nav/>
        <div className={style.main}>
          <div className = {style.top}>
            <div className = {style.heading1}>{t('500')}</div>
            <div className = {style.line}></div>
            <div className = {style.para}>{t('501')}</div>
            <div className = {style.box}>
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Urs Senn</div>
                <div className={style.bod1}>{t('502')}</div>
                <div className = {style.maincon1}>{t('503')}</div>
                <div className = {style.icon}>
                  <Link href="mailto:urs.senn@consennse.com" target="_blank" rel="noopener noreferrer">
                   <Image src = {mail} alt = "email" className={style.mail} /> 
                   </Link>
                   </div>
              </div>
        
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp2} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Anna Hormann</div>
                <div className={style.bod1}>{t('504')}</div>
                <div className = {style.maincon1}>{t('505')}</div>
                <div className = {style.icon}>
                <Link href="mailto:servicedesk@consennse.com" target="_blank" rel="noopener noreferrer">
                   <Image src = {mail} alt = "email" className={style.mail}/>
                   </Link>
                   </div>
              </div>
            
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp3} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Balazs Rubicsek</div>
                <div className={style.bod1}>{t('506')}</div>
                <div className = {style.maincon1}>{t('507')}</div>
                <div className = {style.icon}>
                <Link href="mailto:balazs.rubicsek@consennse.com" target="_blank" rel="noopener noreferrer">
                   <Image src = {mail} alt = "email" className={style.mail}/>
                   </Link>
                   </div>
              </div>
         
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp4} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Sarah Spandolf</div>
                <div className={style.bod1}>{t('508')}</div>
                <div className = {style.maincon1}>{t('509')}</div>
                <div className = {style.icon}> 
                <Link href="mailto:sarah.spandolf@consennse.com" target="_blank" rel="noopener noreferrer">
                <Image src = {mail} alt = "email" className={style.mail}/>
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div className = {style.bottom}>
            <div className = {style.heading1}>{t('510')}</div>
            <div className = {style.line}></div>
            <div className = {style.para}>{t('511')}</div>
            <div className = {style.boxes2}>
            <div className= {style.box22}>
            <div className = {style.box2}>
            <div className = {style.heading2}>Andermatt Swiss Alps AG</div>
            <div className = {style.logo}><Image src = {logo1} alt = "logo" className={style.logo20}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>{t('512')}</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
                <li>{t('513')}</li>
                <li>{t('514')}</li>
                <li>{t('515')}</li>
                <li>{t('516')}</li>
                <li>{t('517')}</li>
                <li>{t('518')}</li>
                <li>{t('519')}</li>
                <li>{t('520')}</li>
              </ul>
            </div>
            </div>
            <div className = {style.box2}>
            <div className = {style.heading2}>INIZIA Living AG</div>
            <div className = {style.logo}><Image src = {logo2} alt = "logo" className={style.logo20}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>{t('512')}</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
              <li>{t('522')}</li>
<li>{t('523')}</li>
<li>{t('524')}</li>
<li>{t('525')}</li>
<li>{t('526')}</li>
<li>{t('527')}
</li>
</ul>
            </div>
            </div>
            </div>
            <div className = {style.box21}>
            <div className = {style.box2}>
            <div className = {style.heading2}>Markstein AG</div>
            <div className = {style.logo}><Image src = {logo3} alt = "logo" className={style.logo30}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>{t('512')}</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
           <li>{t('528')}</li>
<li>{t('529')}</li>
<li>{t('530')}</li>
<li>{t('531')}</li>
<li>{t('532')}</li>
<li>{t('533')}</li>
<li>{t('534')}</li>
<li>{t('535')}</li>
              </ul>
            </div>
            </div>            
            <div className = {style.box2}>
            <div className = {style.heading2}> WALDE Immobilien AG</div>
            <div className = {style.logo}><Image src = {logo4} alt = "logo" className={style.logo30}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>{t('512')}</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
            <li> {t('536')} </li>
<li>{t('537')}</li>
<li>{t('538')}</li>
<li>{t('539')}</li>
<li>{t('540')}</li>
<li>{t('541')}</li>
<li>{t('542')}</li>
              </ul>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div className={style.companies}>
          <div className = {style.heading3}>{t('543')}</div>
          <div className = {style.line}></div>
          <div className = {style.logos}>
            <div className = {style.row}>
              <div className = {style.logoimg}> <Image src = {logo5} alt = "logo" className={style.logo40}/> </div>
              <div className = {style.logoimg}> <Image src = {logo6} alt = "logo" className={style.logo40}/> </div>
              <div className = {style.logoimg}> <Image src = {logo7} alt = "logo" className={style.logo40}/> </div>
              <div className = {style.logoimg3}> <Image src = {logo8} alt = "logo" className={style.logo40}/> </div>
            </div>
            <div className = {style.row}>
            <div className = {style.logoimg}> <Image src = {logo9} alt = "logo" className={style.logo40}/> </div>
              <div className = {style.logoimg1}> <Image src = {logo10} alt = "logo"className={style.logo40}/> </div>
              <div className = {style.logoimg}> <Image src = {logo11} alt = "logo"className={style.logo40}/> </div>
              <div className = {style.logoimg}> <Image src = {logo12} alt = "logo"className={style.logo40}/> </div>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
export default Pg10 ; 
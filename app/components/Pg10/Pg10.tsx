'use client';
import React from 'react'
import style from "./Pg10.module.css"
import Nav from "@/app/components/Nav/Nav"
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'
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
            <div className = {style.heading1}>Meet the Team</div>
            <div className = {style.line}></div>
            <div className = {style.para}>We’re a dedicated core team, working closely together to ensure outstanding results. To bring even more expertise and flexibility to our projects, we also collaborate with a network of talented freelancers. Together, we deliver the best solutions for every challenge!</div>
            <div className = {style.box}>
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Urs Senn</div>
                <div className={style.bod1}>The greatest joy as Managing Director and Founder is building something sustainable and valuable together with a strong team.</div>
                <div className = {style.maincon1}>Managing Director / Founder</div>
                <div className = {style.icon}> <Image src = {mail} alt = "email" className={style.mail} /> </div>
              </div>
        
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp2} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Anna Hormann</div>
                <div className={style.bod1}>I love keeping an overview in accounting and administration while making an important contribution to the team’s success.</div>
                <div className = {style.maincon1}>Accounting / Backoffice</div>
                <div className = {style.icon}> <Image src = {mail} alt = "email" className={style.mail}/></div>
              </div>
            
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp3} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Balazs Rubicsek</div>
                <div className={style.bod1}>As a Senior Technical Consultant, I love solving complex challenges and developing innovative solutions for our clients.</div>
                <div className = {style.maincon1}>Senior Technical Consultant</div>
                <div className = {style.icon}> <Image src = {mail} alt = "email" className={style.mail}/></div>
              </div>
         
              <div className = {style.box1}>
                <div className = {style.img1}> <Image src = {pfp4} alt ="image" className={style.logo10}/>  </div>
                <div className = {style.head1}>Sarah Spandolf</div>
                <div className={style.bod1}>As a Propertybase Administrator, I ensure that our customers’ systems run smoothly and provide the best possible value to their users.</div>
                <div className = {style.maincon1}>Propertybase Administrator</div>
                <div className = {style.icon}> <Image src = {mail} alt = "email" className={style.mail}/></div>
              </div>
            </div>
          </div>
          <div className = {style.bottom}>
            <div className = {style.heading1}>We deliver project successes </div>
            <div className = {style.line}></div>
            <div className = {style.para}>Our organization has achieved numerous notable project successes in recent years, which underline our competence and commitment. </div>
            <div className = {style.boxes2}>
            <div className= {style.box22}>
            <div className = {style.box2}>
            <div className = {style.heading2}>Andermatt Swiss Alps AG</div>
            <div className = {style.logo}><Image src = {logo1} alt = "logo" className={style.logo20}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>Our Services and Solutions</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
                <li>Implementation of Propertybase (replacement of Flowfact, data migration) </li>
                <li>Rental Solution (management of rental contracts from owners)</li>
                <li>Sales Partner Portal (lead registration for partners)</li>
                <li>Sales Target Solution (including commission calculation)</li>
                <li>Website Integration (company website, micro-sites for properties)</li>
                <li>Social Media Integration (Meta, LinkedIn)</li>
                <li>UTM Integration for lead source tracking (all channels)</li>
                <li>Mailchimp Integration with double opt-in and synchronization with the CRM</li>
              </ul>
            </div>
            </div>
            <div className = {style.box2}>
            <div className = {style.heading2}>INIZIA Living AG</div>
            <div className = {style.logo}><Image src = {logo2} alt = "logo" className={style.logo20}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>Our Services and Solutions</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
              <li>Implementation of Propertybase</li>
<li>Website Integration (company website, micro-sites for projects)</li>
<li>Automated dispatch and follow-up process</li>
<li>Buyer support (from contract signing to move-in)</li>
<li>Marketing through external partners</li>
<li>Client reporting with Power Query
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
            <div className = {style.bod2}>Our Services and Solutions</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
           <li>   Implementation of Propertybase (replacement of Flowfact, data migration) </li>
<li>Website Integration (company website, micro-sites for projects) </li>
<li>Automated dispatch and follow-up process </li>
<li>Budget control for advertisements on portals </li>
<li>Client reporting </li>
<li>Marketing activities with Power Query </li>
<li>Email campaigns with follow-up </li>
<li>Lead capturing from Neubau Portal </li>
              </ul>
            </div>
            </div>            
            <div className = {style.box2}>
            <div className = {style.heading2}> WALDE Immobilien AG</div>
            <div className = {style.logo}><Image src = {logo4} alt = "logo" className={style.logo30}/> </div>
            <div className = {style.line2}></div>
            <div className = {style.bod2}>Our Services and Solutions</div>
            <div className = {style.pointers}>
              <ul className = {style.list}>
            <li>  Implementation of Propertybase </li>
<li>Survey solution with synchronization with the CRM </li>
<li>Website integration (company website, micro-sites for projects) </li>
<li>Automated dispatch and follow-up process </li>
<li>Campaign Monitor integration with synchronization with the CRM </li>
<li>Integration with Microsoft Power BI </li>
<li>Automated exchange of listings with partner agents </li>
              </ul>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div className={style.companies}>
          <div className = {style.heading3}>Further companies that rely on us</div>
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
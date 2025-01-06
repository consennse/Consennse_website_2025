'use client'; 
import React from 'react'
import style from "./Pg8.module.css"
import Nav from "@/app/components/Nav/Nav"
import Foot from "@/app/components/Footer/Footer"
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import img23 from "./margin-left 2rem;-2.svg"
import frame5 from "./Frame 1249186731.svg"
import frame6 from "./Frame 1249186731-2.svg"
import frame7 from "./Frame 1249186731-3.svg"
import frame1 from "./Frame 1249186730-17.svg"
import frame2 from "./Frame 1249186730-18.svg"
import frame3 from "./Frame 1249186730-19.svg"
import img19 from "./image 19.svg"
import union2 from "./Union-2.svg"
import img21 from "./image 21.svg"
import company2 from "./margin-left 2rem;.svg"
import img27 from "./image 27.svg"
import robot from "./image 26.svg"
import rect from "./image 25.svg"
import image10 from "./image 20.svg"
import img22 from "./image 22.svg"
import rect2 from "./Rectangle 34625456-5.svg"
import { FaChevronRight } from 'react-icons/fa';
const Pg8 = () => {
  const {t} = useTranslation();
  return (
    <div className={style.mainish}>
      <Nav/>
      <div className = {style.main}>
      <div className = {style.page1}>
        <div className = {style.logo1}>
        <Image src = {img19} alt = "logo" className={style.logo}/>
        </div>
      <div className = {style.tit1}> {t('258')}</div>
      <div className = {style.lin1}></div>
        <div className = {style.subtxt1}>{t('259')}
        </div>
        <div className = {style.box1}>
          <div className = {style.l1}>
            <Image src = {rect2} alt = "rectangle" className={style.rect2}/>
          </div>
          <div className = {style.r1}>
            <div className={style.titr1}>
            {t('260')}
            </div>
            <div className = {style.rl1}></div>
              <div className = {style.stxt1}>{t('261')}
            </div>
          </div>
        </div>
        <div className = {style.tit2}>About WEB OFFICE for Propertybase</div>
      <div className = {style.lin2}></div>
      <div className = {style.box2}>
          <div className = {style.r2}>
            <div className={style.titr1}>
            {t('262')}
            </div>
            <div className = {style.rl1}></div>
              <div className = {style.stxt1}>
              {t('261')}
            </div>
          </div>
          <div className = {style.l1}> 
          <Image src = {rect} alt = "rectangle" className  = {style.rect1}/>
          </div>
        </div>
      </div>
      <div className={style.page2}>
        <div className = {style.top2}>
          <div className={style.boxes2}>
              <div
        className={style.box21}
      >
              <div className={style.lbox2}>
                <div className = {style.fbox}>
                  <div className={style.fboxtop}>
                    <div>
                    <Image src ={frame1} alt = "headphones" height={50}/></div>
                    <div className={style.htxt}>{t('264')}</div>
                  </div>
                  <div className = {style.fboxl}></div>
                  <div className={style.fboxtit}>{t('265')}</div>
                  <div className={style.fboxmaincon}>
                  {t('266')}
                  </div>
                </div>
              </div>
          
            </div>
            <div
        className={style.box22}
      >
              <div className={style.lbox2}>
                <div className = {style.fbox2}>
                  <div className={style.fboxtop2}>
                    <div>
                    <Image src ={frame2} alt = "writing" height={50}/></div>
                    <div className={style.htxt2}>{t('268')}</div>
                  </div>
                  <div className = {style.fboxl2}></div>
                  <div className={style.fboxtit2}>{t('267')}</div>
                  <div className={style.fboxmaincon2}>
                  {t('269')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.boxes22}>
          <div
        className={style.box211}
      >
              <div className={style.lbox21}>
                <div className = {style.fbox21}>
                  <div className={style.fboxtop21}>
                    <div>
                    <Image src ={frame3} alt = "magnifying" height={50}/></div>
                    <div className={style.htxt21}>{t('271')}</div>
                  </div>
                  <div className = {style.fboxl21}></div>
                  <div className={style.fboxtit21}>{t('270')}</div>
                  <div className={style.fboxmaincon21}>
                  {t('272')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page3}>
        <div className = {style.change1}>
          <div className ={style.rightchange}>
            <div  className={style.unionitic}>
          <Image src = {union2} alt = "tick" className = {style.union2}/>
          </div> <div className={style.robotic}>
            <Image src ={robot} alt = "robot" className = {style.changerobot}/>
            </div> 
          </div>
          <div className = {style.rightchange2}>
        <div className={style.tit3}>{t('273')}</div>
        <div className={style.lin3}></div>
        <div className = {style.stit3}>Meet your customers&apos; expectations even better.
        Today, customers expect digital service around the clock.
        Comprehensive self-service and short response times are just as essential as the ability to provide feedback with a single click.
      </div>
      </div>
      </div>
      <div className = {style.boxes3}>
        <div className = {style.box31}>
          <div className={style.l1}>
            <Image src = {image10} alt ="webpage" className = {style.img10}/>
          </div>
          <div className = {style.rigtbox3}>

              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div className={style.htxt3}>{t('274')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('275')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('276')}
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  {t('275A')}
                  </div>
                  <div className={style.fboxtit31}>Behind the Scenes</div>
                  <div className={style.fboxmaincon31}>
                  {t('276A')}
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div className = {style.box31}>
        <div className={style.l1}>
            <Image src = {img21} alt ="webpage" className = {style.img10}/>
          </div>
          <div className = {style.rigtbox3}>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div className={style.htxt3}>{t('277')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('278A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('279')}
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  {t('279C')}
                  </div>
                  <div className={style.fboxtit31}>{t('279A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('279B')}
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div className = {style.box31}>
          <div className={style.l1}>
            <Image src = {img22} alt ="webpage" className = {style.img22}/>
          </div>
          <div className = {style.rigtbox3}>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div className={style.htxt3}>{t('280')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('281')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('282')}
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  {t('282C')}
                  </div>
                  <div className={style.fboxtit31}>{t('282A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('282B')}
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div className = {style.box31}>
        <div className={style.l1}>
            <Image src = {img27} alt ="webpage" className = {style.img22}/>
          </div>
          <div className = {style.rigtbox3}>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div className={style.htxt3}>{t('283')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('284')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('285')}
                  </div>
                  <div className={style.fboxtit31}>{t('285A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('286')}
                  </div>
                  <div className={style.fboxtit31}>{t('287A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('287B')}
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className = {style.page4}>
        <div className = {style.tit4}>{t('288')}</div>
        <div className = {style.line4}></div>
          <div className = {style.stxt4}>{t('289')}
          </div>
          <div className = {style.bot4}>
          <div className = {style.boxes4}>
            <div className = {style.boxtop4}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame5} alt = "logo12" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('290')}
                  </div>
                </div>
                <div className = {style.cont4}>
                  <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  {t('291')}
                  </div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame6} alt = "logo13" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('294')}
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  {t('295')}
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
            <div className = {style.boxtop42}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame7} alt = "logo14" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('292')}                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  {t('293')}</div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page5}>
        <div className={style.top5}>
          <div className = {style.lefttop5}>
            <div className={style.lefttit5}>{t('296')}</div>
            <div className = {style.changeline}></div>
            <div className={style.lefttst5}>{t('297')}</div>
          </div>

        </div>
        <div className = {style.bottom5}>
          <div className = {style.botleft5}>
            <div className = {style.box51}>

              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('298')}</div>
                <div className = {style.mainstit5}>{t('299')}</div>
              </div>
            </div>
            <div className = {style.box51}>
  
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('300')}</div>
                <div className = {style.mainstit5}>{t('301')}</div>
              </div>
            </div> <div className = {style.box51}>
     
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('302')}</div>
                <div className = {style.mainstit5}>{t('303')}</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('304')}</div>
                <div className = {style.mainstit5}>{t('305')}</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('305A')} </div>
                <div className = {style.mainstit5}>{t('305B')}</div>
              </div>
            </div>
          </div>
          <div className = {style.botleft5}>
            <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('306')}</div>
                <div className = {style.mainstit5}>{t('307')}</div>
              </div>
            </div>
            <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('308')} </div>
                <div className = {style.mainstit5}>{t('309')} </div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('310')} </div>
                <div className = {style.mainstit5}>{t('310A')} </div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('311')}  </div>
                <div className = {style.mainstit5}>{t('312')} </div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>{t('313')}  </div>
                <div className = {style.mainstit5}>{t('314')} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page6}>
        <div className = {style.box6}>
        <div className = {style.tit6}>{t('316')} </div>
        <div className = {style.line6}></div>
        <Image src = {img23} alt = "companies" className = {style.img23}/>
        <Image src = {company2} alt = "companies" className = {style.img24}/>
        </div> 
        <div className = {style.lastpage}>
          <div className = {style.lasttit}>{t('317')} </div>
          <div className = {style.con5}>{t('318')} </div>
          <Link href = '/users/Page1'>
          <button className = {style.but5}>Get Started <FaChevronRight className={style.iconlast}/> </button>
          </Link>
        </div>
      </div>
      </div>
      <footer>
      <Foot/>
      </footer>
    </div>
  )
}

export default Pg8

'use client'; 
import React from 'react'
import style from "./Pg8.module.css"
import Nav from "@/app/components/Nav/Nav"
import Foot from "@/app/components/Footer/Footer"
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import img23 from "./margin-left 2rem;.png"
import frame5 from "./Frame 1249186731.png"
import frame6 from "./Frame 1249186731-2.png"
import frame7 from "./Frame 1249186731-3.png"
import frame1 from "./Frame 1249186730-16.png"
import frame2 from "./Frame 1249186730-17.png"
import frame3 from "./Frame 1249186730-18.png"
import img19 from "./image 19.png"
import union2 from "./Union-2.svg"
import img21 from "./image 21.png"
import company2 from "./margin-left 2rem;-2.png"
import img27 from "./image 27.png"
import robot from "./WEB_OFFICE_-_Robot_2-removebg-preview.png"
import rect from "./image 25.png"
import image10 from "./image 20.png"
import img22 from "./image 22.png"
import rect2 from "./Rectangle 34625456-4.png"
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
      <div className = {style.tit1}>
        <h1>
         {t('258')}
         </h1>
         </div>
      <div className = {style.lin1}></div>
        <div className = {style.subtxt1}>{t('259')}
        </div>
        <div className = {style.box1}>
          <div className = {style.l1}>
            <Image src = {rect2} alt = "rectangle" className={style.rect2} width={605.33}/>
          </div>
          <div className = {style.r1}>
            <div className={style.titr1}>
              <h2>
            {t('260')}
            </h2>
            </div>
            <div className = {style.rl1}></div>
              <div className = {style.stxt1}>{t('261')}
            </div>
          </div>
        </div>
        <div className = {style.tit2}>{t('600')}</div>
      <div className = {style.lin2}></div>
      <div className = {style.box2}>
          <div className = {style.r2}>
            <div className={style.titr1}>
              <h2>
            {t('262')}
            </h2>
            </div>
            <div className = {style.rl1}></div>
              <div className = {style.stxt1}>
              {t('261A')}
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
                  <div className={style.fboxtit}>
                    <h3>
                    {t('265')}
                    </h3>
                    </div>
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
                  <div className={style.fboxtit2}>
                    <h3>
                    {t('267')}
                    </h3>
                    </div>
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
                  <div className={style.fboxtit21}>
                    <h3>
                    {t('270')}
                    </h3>
                    </div>
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
        <div className={style.tit3}>
          <h2>
          {t('273')}
          </h2>
          </div>
        <div className={style.lin3}></div>
        <div className = {style.stit3}> {t('300A')}
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
                    <div className={style.htxt3}>
                      <h3>
                      {t('274')}
                      </h3>
                      </div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('275')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('276')}
                  </div>
                  <div className={style.fboxtit31}>{t('285A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('275A')}
                  </div>
                  <div className={style.fboxtit31}>{t('279A')}</div>
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
                    <div className={style.htxt3}>
                      <h3>
                      {t('277')}
                      </h3>
                      </div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('278A')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('279')}
                  </div>
                  <div className={style.fboxtit31}>{t('285A')}</div>
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
                    <div className={style.htxt3}>
                      <h3>
                      {t('280')}
                      </h3>
                      </div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>{t('281')}</div>
                  <div className={style.fboxmaincon31}>
                  {t('282')}
                  </div>
                  <div className={style.fboxtit31}>{t('285A')}</div>
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
                    <div className={style.htxt3}>
                      <h3>
                      {t('283')}
                      </h3>
                      </div>
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
        <div className = {style.tit4}>
          <h2>
          {t('288')}
          </h2>
          </div>
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
                    <h3>
                  {t('290')}
                  </h3>
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
                    <h3>
                  {t('294')}
                  </h3>
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
                    <h3>
                  {t('292')}    
                  </h3>  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  {t('293')}</div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className={style.hidden1}>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame6} alt = "logo13" className={style.img41}/>
                  <div className = {style.ttxt4}>
                    <h3>
                  {t('294')}
                  </h3>
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
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page5}>
        <div className={style.top5}>
          <div className = {style.lefttop5}>
            <div className={style.lefttit5}>
              <h2>
              {t('296')}
              </h2>
              </div>
            <div className = {style.changeline}></div>
            <div className={style.lefttst5}>{t('297')}</div>
          </div>

        </div>
        <div className = {style.bottom5}>
          <div className = {style.botleft5}>
            <div className = {style.box51}>

              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                  <h3>
                  {t('298')}
                  </h3>
                  </div>
                <div className = {style.mainstit5}>{t('299')}</div>
              </div>
            </div>
            <div className = {style.box51}>
  
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}><h3>{t('300')}</h3></div>
                <div className = {style.mainstit5}>{t('301')}</div>
              </div>
            </div> <div className = {style.box51}>
     
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                <h3>
                  {t('302')}</h3> </div>
                <div className = {style.mainstit5}>{t('303')}</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                <h3>
                  {t('304')}
                  </h3>
                  </div>
                <div className = {style.mainstit5}>{t('305')}</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                <h3>
                  {t('305A')} </h3> </div>
                <div className = {style.mainstit5}>{t('305B')}</div>
              </div>
            </div>
          </div>
          <div className = {style.botleft5}>
            <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                <h3>
                  {t('306')}
                  </h3>
                  </div>
                <div className = {style.mainstit5}>{t('307')}</div>
              </div>
            </div>
            <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                <h3>
                  {t('308')} </h3> </div>
                <div className = {style.mainstit5}>{t('309')} </div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>
                <h3>
                  {t('310')} </h3> </div>
                <div className = {style.mainstit5}>{t('310A')} </div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}><h3> {t('311')} </h3> </div>
                <div className = {style.mainstit5}>{t('312')} </div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}><h3> {t('313')} </h3> </div>
                <div className = {style.mainstit5}>{t('314')} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page6}>
        <div className = {style.box6}>
        <div className = {style.tit6}>
          <h2>
          {t('316')}
          </h2>
           </div>
        <div className = {style.line6}></div>
        <Image src = {img23} alt = "companies" className = {style.img23}/>
        <Image src = {company2} alt = "companies" className = {style.img24}/>
        </div> 
        <div className = {style.lastpage}>
          <div className = {style.lasttit}>{t('317')} </div>
          <div className = {style.con5}>{t('318')} </div>
          <Link href = '/content/contact'>
          <button className = {style.but5}>{t('6A')}<FaChevronRight className={style.iconlast}/> </button>
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

export default Pg8; 

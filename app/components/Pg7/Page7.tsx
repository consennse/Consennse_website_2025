'use client'
import React from 'react'
import Nav from "@/app/components/Nav/Nav"
import Image from 'next/image'
import Footer from '../Footer/Footer'
import style from "./Pg7.module.css"
import image from "./Rectangle 34625456-6.svg"
import hourglass from "./anxiety-induced-by-hourglass 1.svg"
import logo from "./image 17.svg"
import { useTranslation } from 'react-i18next'
import img10 from "./image 10.svg"
import img11 from "./image 11.svg"
import img12 from "./image 12.svg"
import img13 from "./image 13.svg"
import img14 from "./image 15.svg"
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
const Page7 = () => {
  const {t} = useTranslation();
  return (
    <div className = {style.bigbody}>
      <Nav/>
      <div className={style.main}>
      <div className = {style.page1}>
        <div className = {style.chimg1}>
      <Image src = {logo} alt = "logo" className={style.logo1}/>
      </div>
        <div className = {style.h1}>{t('184')}</div>
        <div className = {style.line1}></div>
        <div className = {style.sub1}>{t('185')}</div>
        <div className = {style.box1}>
          <div className = {style.img1}> <Image src = {image} alt = "img" className={style.img} /> </div>
          <div className = {style.right1}>
            <div className = {style.ch1}>{t('186')}</div>
            <div className = {style.chl}></div>
            <div className = {style.content1}> {t('187')}
             </div>
          </div>
        </div>
        <div className = {style.chtit2}>{t('188')}</div>
        <div className = {style.linech}></div>
        <div className = {style.box2}>
          <div className = {style.l2}>
            <div className = {style.tit2}>{t('189')}</div>
            <div className = {style.line2}></div>
            <div className = {style.subtxt2}>{t('190')}</div>
          </div>
          <div className = {style.right2}
> <Image src = {hourglass}  alt = "hourglass" className = {style.hour}/>
  </div>        </div>
      </div>
      <div className = {style.page2}>
        <div className={style.top2}> {t('191')}</div>
        <div className = {style.boxes2}>
        {/* <div className = {style.behindbox1}></div> */}
        <div className = {style.box21}>
          <div className ={style.imgb2}>
            <Image src = {img10} alt = "papers" className = {style.image10}/>
          </div>
          <div className = {style.bar2}>
          PDF Automation
          </div>
          <div className={style.txt21}>{t('196')}</div>
          <div className = {style.botbutt2}></div>
        </div>
        {/* <div className = {style.behindbox21}></div>
        <div className = {style.behindbox2}></div> */}
        <div className = {style.box22}>
          <div className ={style.imgb2}>
            <Image src = {img11} alt = "papers" className = {style.image10}/>
          </div>
          <div className = {style.bar2}>
          Direct Mail Automation
          </div>
          <div className={style.txt21}>{t('197')}</div>
          <div className = {style.botbutt2}></div>
        </div>
        {/* <div className = {style.behindbox22}></div>
        <div className = {style.behindbox3}></div> */}
        <div className = {style.box23}>
          <div className ={style.imgb2}>
            <Image src = {img12} alt = "papers" className = {style.image10}/>
          </div>
          <div className = {style.bar2}>
          {t('192')}
          </div>
          <div className={style.txt21}>{t('198')}</div>
          <div className = {style.botbutt2}></div>
        </div>
        {/* <div className = {style.behindbox23}></div> */}
        </div>
        <div className = {style.start2}>
        <div className = {style.botbox2}>
          <div className = {style.butbox21}>
            
            <div>
          <div className = {style.buttit21}>90%</div>
          <div className = {style.buttit212}>{t('193')}</div>
          </div>
          <div className = {style.line}></div>
          </div>
          <div className = {style.butbox21}>
            <div>
          <div className = {style.buttit21}>80%</div>
          <div className = {style.buttit212}>{t('194')}</div>
          </div>
          <div className = {style.line}></div>
          </div>
          <div className = {style.butbox21}>
            <div>
          <div className = {style.buttit21}>100%</div>
          <div className = {style.buttit212}>{t('195')}</div>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div className = {style.page3}>
        <div className = {style.chtit3}>Overview of the Functionality</div>
        <div className = {style.chlin3}></div>
        <div className = {style.box31}>
          <div className = {style.left31}>
            <div className = {style.lefttit3}>{t('199')}</div>
            <div className = {style.line3}></div>
            <div className={style.stxt3}>{t('200')}</div>
          </div>
          <div className = {style.right31}>
            <Image src = {img13} alt = "website" className = {style.img131}/>
          </div>
        </div>
        <div className = {style.box32}>
          <div className = {style.right31}>
            <Image src = {img14} alt = "website" className = {style.img131}/>
          </div>
          <div className = {style.left31}>
            <div className = {style.lefttit3}>{t('201')}</div>
            <div className = {style.line3}></div>
            <div className={style.stxt3}>{t('202')}

</div>
          </div>
        </div>
      </div>
       <div className = {style.page4}>
      {/* <div className = {style.subsection3}>
          <div className = {style.left32}>
            <div className = {style.tit32}>Why choose EXPOSE</div>
            <div className = {style.line32}></div>
            <div className = {style.stxt32}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem  ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
             </div>
             <div className = {style.right32}>
              <Image src = {img15} alt = "girl" className = {style.img153}/>
             </div>
        </div> */}
      {/* <div className = {style.bot4}>
          <div className = {style.boxes4}>
            <div className = {style.boxtop4}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo12" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Custom templates
                  </div>
                </div>
                <div className = {style.cont4}>
                  <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aliquam inventore sed libero nostrum illum porro quos magnam voluptatem non, at sit. Voluptatibus eum enim, corrupti dolore accusamus praesentium perferendis?
                  </div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo13" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Easy-to-use editor
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ducimus quaerat ipsa ex sit neque facere unde blanditiis repellendus. Ut minima cum nemo laborum exercitationem, esse maiores culpa doloribus aliquid.
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
            <div className = {style.boxtop42}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo14" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Data integration
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex placeat aliquid, dolorem sit quia earum. Sed doloremque aperiam dignissimos libero cum incidunt nobis, tempore repellat nisi, animi architecto alias rerum?</div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo15" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  PDFs, brochures and direct mail
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contit4}></div>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore eos quod doloribus deserunt quibusdam autem soluta quaerat, obcaecati molestias neque omnis aliquid odit architecto quia perferendis corporis ut vel.
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className = {style.lastpage}>
          <div className = {style.lasttit}>{t('317')}</div>
          <div className = {style.con5}>{t('318')}</div>
          <Link href = '/users/Page1'>
          <button className = {style.but5}>
            Get Started <FaChevronRight className={style.iconlast}/> </button>
            </Link>
        </div>
      </div> 
      </div>
      <Footer/>
    </div>
  )
}

export default Page7

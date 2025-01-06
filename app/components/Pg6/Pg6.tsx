'use client'; 
import React from 'react'
import style from "./Pg6.module.css"
import Nav2 from '../Nav/Nav'
import Image from 'next/image';
import page from "./Frame 1249186730-16.svg"
import head from "./Frame 1249186730.svg"
import img18 from "./image 18.svg"
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import magnif from './Frame 1249186730-3.svg'
import coin from './Frame 1249186730-4.svg'
import img5 from "./Frame 1249186730-5.svg"
import img6 from "./Frame 1249186730-6.svg"
import img7 from "./Frame 1249186730-7.svg"
import img8 from "./Frame 1249186730-8.svg"
import img9 from "./Frame 1249186730-9.svg"
import img10 from "./Frame 1249186730-10.svg"
import img12 from "./Frame 1249186730-12.svg"
import img13 from "./Frame 1249186730-13.svg"
import img14 from "./Frame 1249186730-14.svg"
import img15 from "./Frame 1249186730-15.svg"
import stress from "./f0454ac29027a934d95f4ba9475dcc45.jpeg"
import works from "./img.png"
import Foot from "../Footer/Footer"
import union from "./Union.svg"
import random from "./standard-quality-control-collage-concept (1) 1.svg"
import shiny from "./shiny-circles-lit-tablet 1.svg"
const Pg6 = () => {
  const {t} = useTranslation();
  // Handle hover for each box

  return (
    <div className={style.bigbody}>
      <Nav2/>
      <div className={style.startshere}>
      <div className={style.mainbody}>
      <div className = {style.page1}>
        <div className = {style.logoborder}>
        <Image src = {img18} alt = "logo" height={70}/></div>
        <div className={style.top1}>{t('203')}</div>
        <div className={style.line1}></div>
            <div className={style.topcont}>{t('204')}</div>
    <div className={style.topboxes}>
      <div className={style.topbox1}>
        <div className={style.box1img}><Image src = {works} alt = "workspace" /></div>
        <div className={style.box1right}>
          <div className={style.box1tit}>{t('205')}</div>
          <div className={style.box1line}></div>
          <div className={style.box1main}>{t('206')}</div>
        </div>
      </div>
      <div className  = {style.headingnew}>About Propertybase SWISS EDITION</div>
      <div className = {style.headline}></div>
      <div className={style.topbox2}>
        <div className={style.box2right}>
          <div className={style.box2tit}>{t('207')}</div>
          <div className={style.box2line}></div>
          <div className={style.box2main}>{t('208')}
</div>
        </div>
        <div className={style.box2img}><Image src = {stress} alt = "stress" height={400} className={style.stress}/></div>
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
                    <Image src ={head} alt = "headphones" height={50}/></div>
                    <div className={style.htxt}>{t('209')}</div>
                  </div>
                  <div className = {style.fboxl}></div>
                  <div className={style.fboxtit}>{t('210')}</div>
                  <div className={style.fboxmaincon}>
                  {t('211')}
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
                    <Image src ={page} alt = "writing" height={50}/></div>
                    <div className={style.htxt2}>{t('212')}</div>
                  </div>
                  <div className = {style.fboxl2}></div>
                  <div className={style.fboxtit2}>{t('213')}</div>
                  <div className={style.fboxmaincon2}>
                  {t('214')}
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
                    <Image src ={magnif} alt = "magnifying" height={50}/></div>
                    <div className={style.htxt21}>{t('215')}</div>
                  </div>
                  <div className = {style.fboxl21}></div>
                  <div className={style.fboxtit21}>{t('216')}</div>
                  <div className={style.fboxmaincon21}>
                  {t('217')}
                  </div>
                </div>
              </div>
            </div>
            <div
        className={style.box222}
      >
              <div className={style.lbox22}>
                <div className = {style.fbox22}>
                  <div className={style.fboxtop22}>
                    <div>
                    <Image src ={coin} alt = "coinstack" height={50}/></div>
                    <div className={style.htxt22}>{t('218')}</div>
                  </div>
                  <div className = {style.fboxl22}></div>
                  <div className={style.fboxtit22}>{t('219')}</div>
                  <div className={style.fboxmaincon22}>
                  {t('220')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.maintop2}>
          <div className={style.leftimg2}>
          <div className={style.unionimg}>
            <Image src = {union} alt = "union" height={310} className={style.unimg}/>
          </div>
          <div className={style.shiny}>
            <Image src = {shiny} alt = "shinycircles" height={345}/>
          </div>
          </div>
          <div className={style.right2}>
            <div className = {style.right2tit}>{t('221')}</div>
            <div className={style.right2line}></div>
            <div className = {style.right2maincon}>{t('222')}</div>
          </div>
        </div>
      </div>
      <div className = {style.page3}>
      <div className={style.cards3}>
        <div className={style.topcards}>
        <div className={style.boxes3}>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img5} alt = "image" height={50}/></div>
                    <div className={style.htxt3}>{t('223')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}>{t('224')}</div>
                  <div className={style.fboxmaincon3}>
                  {t('225')}
                  </div>
                </div>
              </div>
            </div>
            <div className={style.box32}>
              <div className={style.lbox32}>
                <div className = {style.fbox32}>
                  <div className={style.fboxtop32}>
                    <div>
                    <Image src ={img6} alt = "image" height={50}/></div>
                    <div className={style.htxt32}>{t('226')}</div>
                  </div>
                  <div className = {style.fboxl32}></div>
                  <div className={style.fboxtit32}>{t('227')}</div>
                  <div className={style.fboxmaincon32}>
                  {t('228')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.boxes3}>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img7} alt = "image" height={50}/></div>
                    <div className={style.htxt3}>{t('229')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}>{t('230')}</div>
                  <div className={style.fboxmaincon3}>
                  {t('231')}
                  </div>
                </div>
              </div>
            </div>
            <div className={style.box32}>
              <div className={style.lbox32}>
                <div className = {style.fbox32}>
                  <div className={style.fboxtop32}>
                    <div>
                    <Image src ={img8} alt = "image" height={50}/></div>
                    <div className={style.htxt32}>{t('232')}</div>
                  </div>
                  <div className = {style.fboxl32}></div>
                  <div className={style.fboxtit32}>{t('233')}</div>
                  <div className={style.fboxmaincon32}>
                  {t('234')}
                  </div>
                </div>
              </div>
            </div>
          </div><div className={style.boxes3}>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img9} alt = "image" height={50}/></div>
                    <div className={style.htxt3}> {t('235')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}> {t('236')}</div>
                  <div className={style.fboxmaincon3}>
                  {t('237')}
                  </div>
                </div>
              </div>
            </div>
            <div className={style.box32}>
              <div className={style.lbox32}>
                <div className = {style.fbox32}>
                  <div className={style.fboxtop32}>
                    <div>
                    <Image src ={img10} alt = "image" height={50}/></div>
                    <div className={style.htxt32}> {t('238')}</div>
                  </div>
                  <div className = {style.fboxl32}></div>
                  <div className={style.fboxtit32}> {t('239')}</div>
                  <div className={style.fboxmaincon32}>
                  {t('240')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.boxes3}>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img9} alt = "image" height={50}/></div>
                    <div className={style.htxt3}> {t('241')}</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}> {t('242')}</div>
                  <div className={style.fboxmaincon3}>
                  {t('243')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className = {style.page4}>
        <div className={style.top4}>
          <div className = {style.leftwa4}>
            <div className = {style.ltit4}>
            {t('244')}
            </div>
            <div className = {style.lline4}></div>
            <div className = {style.lstit4}> {t('245')}</div>
          </div>
          <div className = {style.rightwa4}>
            <Image src = {union} alt = "tick" className={style.un1}/>
            <Image src = {random} alt = "tablet-shiny" className = {style.tabimg}/>
          </div>
        </div>
        <div className = {style.bot4}>
          <div className = {style.boxes4}>
            <div className = {style.boxtop4}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {img12} alt = "logo12" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('246')}
                  </div>
                </div>
                <div className = {style.cont4}>
                  <div className={style.maincont4}>
                  <div className = {style.contit4}>
                  {t('247')}
                  </div>
                  <div className = {style.contxt4}>
                  {t('248')}
                  </div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {img13} alt = "logo13" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('249')}
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contit4}>
                  {t('250')}
                  </div>
                  <div className = {style.contxt4}>
                  {t('251')}
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
            <div className = {style.boxtop42}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {img14} alt = "logo14" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('252')}
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contit4}>
                  {t('253')}
                  </div>
                  <div className = {style.contxt4}>
                  {t('254')}</div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {img15} alt = "logo15" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  {t('255')}
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contit4}>
                  {t('256')}
                  </div>
                  <div className = {style.contxt4}>
                  {t('257')}
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page5}>
      {/* <div className =  {style.top5}>
      Question & Answers
      </div> */}
      <div className={style.div5}>
      {/* <div className = {style.maintop5}>
          <div className = {style.image}><Image src = {group} alt = "group"/></div>
          <div className = {style.scroll}> 
          <div className={style.sb}>
            <div className = {style.sb1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed quo est tempore perspiciatis eligendi ut nesciunt aliquid, doloremque temporibus fugiat voluptatibus consequatur eius natus molestiae sapiente. Eius, exercitationem aut?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim quae voluptatibus voluptas ea dignissimos aperiam itaque voluptates, ratione recusandae, et aut. Molestias laboriosam animi quae enim voluptatem minus nostrum?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed illo autem suscipit dignissimos dolorem corporis? Eos quisquam, tempore recusandae pariatur placeat laboriosam ipsa corporis. Ut adipisci numquam possimus autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam et sint, quibusdam beatae eos, accusantium labore delectus explicabo vitae animi impedit eveniet in repudiandae atque sequi aut quidem perspiciatis quos?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptas dolorem placeat optio consequatur eaque voluptatem totam ea repellendus rem minima, possimus aspernatur nisi animi voluptatibus numquam nemo repellat ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos accusamus beatae cupiditate similique reiciendis, minus laboriosam quia. Deserunt vel numquam id amet neque perferendis laborum quidem ducimus ipsa? Porro!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod quasi mollitia ipsum, iusto, voluptates dolorum ipsa eaque, dolore soluta quos nam expedita! Iusto autem modi neque ullam, deserunt eligendi?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim omnis recusandae odit, magni quisquam blanditiis minus error sunt eos asperiores ad provident suscipit repudiandae, dolor vel iure. Explicabo, laboriosam earum?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque magni nemo sequi quasi harum quas neque, doloremque ad. Amet qui consectetur culpa sapiente, earum quidem excepturi illum mollitia recusandae.
            aspernatur nisi animi voluptatibus numquam nemo repellat ut!
            </div>
          </div>
          <div className={style.srb}>
          <ul className={style.accordion}>
  {[
    { id: 'first', title: "Lorem, ipsum.", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime adipisci quaerat ducimus minus ullam, earum perspiciatis veritatis illum velit porro? Quis non eaque ea ratione quos earum nihil neque." },
    { id: 'second', title:"Lorem, ipsum .", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime adipisci quaerat ducimus minus ullam, earum perspiciatis veritatis illum velit porro? Quis non eaque ea ratione quos earum nihil neque." },
    { id: 'third', title: "Lorem, .", content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime adipisci quaerat ducimus minus ullam, earum perspiciatis veritatis illum velit porro? Quis non eaque ea ratione quos earum nihil neque." },
    { id: 'four', title:"Lorem, i.", content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime adipisci quaerat ducimus minus ullam, earum perspiciatis veritatis illum velit porro? Quis non eaque ea ratione quos earum nihil neque." },
    { id: 'five', title: "Lorem, ipsum ", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime adipisci quaerat ducimus minus ullam, earum perspiciatis veritatis illum velit porro? Quis non eaque ea ratione quos earum nihil neque."},
    { id: 'six', title: " neque.", content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime adipisci quaerat ducimus minus ullam, earum perspiciatis veritatis illum velit porro? Quis non eaque ea ratione quos earum nihil neque." },
  ].map((item, index) => (
    <li key={item.id}
    className={`${style.accordionItem} ${
      selectedOption === item.id ? style.active : ''
    }`}
    >
      <label
        className={style.first}
        onClick={() => setSelectedOption(item.id)}
      >
        {item.title}
        <span
          className={`${style[`arrow${index + 1}`]} ${
            selectedOption === item.id ? style.rotate : ''
          }`}
        >
          &#x3e;
        </span>
      </label>
      <input
        type="radio"
        className={style.accordion}
        id={item.id}
        name="consultation"
        checked={selectedOption === item.id}
        onChange={() => setSelectedOption(item.id)}
      />
      <div
        className={`${style.content} ${
          selectedOption === item.id ? style.showContent : ''
        }`}
      >
        {item.content}
      </div>
    </li>
  ))}
</ul>

          </div>
           </div>
        </div> */}
        <div className = {style.lastpage}>
          <div className = {style.lasttit}>Ready for the next step?</div>
          <div className = {style.con5}>We are happy to provide you with more information or arrange a consultation.</div>
          <Link href = '/users/Page1'>
          <button className = {style.but5}>Get Started <FaChevronRight className={style.iconlast}/> </button>
          </Link>
        </div>
        </div>
      </div>
      </div>
      </div>
      <Foot/>
    </div>
  )
}

export default Pg6

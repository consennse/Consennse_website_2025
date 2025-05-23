'use client';
import React from 'react'
import style from "./Pg5.module.css"
import Nav from '../Nav/Nav'
import Footer from "../Footer/Footer"
import Image from 'next/image'
import magnifier from "./Frame 1249186693.png"
import m2 from "./Frame 1249186694.png"
import m3 from "./Group 1597885751.png"
import m4 from "./Frame 1249186698.png"
import m5 from "./Frame 1249186695-2.png"
import m6 from "./Frame 1249186699.png"
import { FaChevronRight } from 'react-icons/fa';
import man from "./young-man-brown-bob-hair-team-leader-celebrate-victory-competition-purple-background-Photoroom 1.png"
import tick from "./Union.png"
import { useTranslation } from 'react-i18next'
import group from "./Rectangle 34625457.png"
import Link from 'next/link';
import { useState } from 'react'
const Pg5 = () => {
  const [selectedOption, setSelectedOption] = useState('first');
  const {t} = useTranslation();

  return (
    <div>
    <div className = {style.bod}>
      <Nav/>
      <div className={style.main}>
      <div className={style.top}>
        <div className = {style.topt}>
        <h1>
          {t('145')}
          </h1>
          </div>
        <div className = {style.line}></div>
        <div className = {style.topst}>{t('146')}</div>
        <div className = {style.maintop}>
          <div className = {style.image}><Image src = {group} alt = "group" width = {640} className = {style.imgchange}
          sizes="(max-width : 768px) 310px"
          /></div>
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
    { id: 'first', title: t('147'), content: t('148') },
    { id: 'second', title:t('149'), content: t('150') },
    { id: 'third', title: t('151'), content: t('152') },
    { id: 'four', title: t('153'), content: t('154') },
    { id: 'five', title: t('155'), content: t('156') },
    { id: 'six', title: t('157'), content: t('158') },
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
        </div>
         </div>
         <div className={style.midbox}>
          <div className = {style.midbl}>
            <div className = {style.s1}> {t('159')}
</div>
<div className={style.s2}>
<h2>
  {t('160')}
 </h2> 
  </div>
<div className = {style.line1}></div>
<div className = {style.s3}>{t('161')}</div>
          </div>
          <div className={style.midbimg}>
            <Image src = {tick} alt = "union" height={380} className={style.mg1}/>
            <Image src = {man} alt = "man" height={445} className={style.mg2}/>  
          </div>
         </div>
         <div className={style.last}>
          <div className={style.l1}>
            <h2>
            {t('162')}
            </h2>
</div>
<div className={style.line}></div>
<div className={style.l2}> {t('163')}
</div>
<div className = {style.boxes}>
  <div className={style.topb}>
    <div className = {style.box}>
      <div className = {style.boxt}>
        <Image src = {magnifier} alt = "magnifier" height={55}/>
        <div className={style.tit}>
        <h3>
          {t('164')}
          </h3>
          </div>
        <div className = {style.lline}></div>
        <div className = {style.maincon}>{t('165A')}</div>
        <div className={style.maincon1}>{t('165')}</div>
        <div className={style.maincon}>{t('166')}</div>
        <div className={style.maincon1}>{t('167')}</div>
      </div>
    </div>
    <div className = {style.box}>
      <div className = {style.boxt}>
        <Image src = {m2} alt = "magnifier"height ={55}/>
        <div className={style.tit}>
          <h3>
          {t('168')}
          </h3>
          </div>
        <div className = {style.lline}></div>
        <div className = {style.maincon}>{t('165A')}</div>
        <div className={style.maincon1}>{t('169')}</div>
        <div className={style.maincon}>{t('166')}</div>
        <div className={style.maincon1}>{t('170')}</div>
      </div>
    </div><div className = {style.box5}>
      <div className = {style.boxt}>
        <Image src = {m3} alt = "magnifier"height ={55}/>
        <div className={style.tit5}>
        <h3>
          {t('171')}
          </h3>
          </div>
        <div className = {style.lline5}></div>
        <div className = {style.maincon}>{t('165A')}</div>
        <div className={style.maincon1}>{t('172')}</div>
        <div className={style.maincon}>{t('166')}</div>
        <div className={style.maincon1}>{t('173')}</div>
      </div>
    </div>
  </div>
  <div className={style.botb}>
    <div className = {style.box}>
      <div className = {style.boxt}>
        <Image src = {m4} alt = "magnifier"height ={55}/>
        <div className={style.tit}>
        <h3>
          {t('174')}
          </h3>
          </div>
        <div className = {style.lline}></div>
        <div className = {style.maincon}>{t('165A')}</div>
        <div className={style.maincon1}>{t('175')}</div>
        <div className={style.maincon}>{t('166')}</div>
        <div className={style.maincon1}>{t('176')}</div>
      </div>
    </div>
    <div className = {style.box}>
      <div className = {style.boxt}>
        <Image src = {m6} alt = "magnifier2"height ={55}/>
        <div className={style.tit}>
        <h3>
          {t('177')}
         </h3> 
          </div>
        <div className = {style.lline}></div>
        <div className = {style.maincon}>{t('165A')}</div>
        <div className={style.maincon1}>{t('178')}</div>
        <div className={style.maincon3}>{t('166')}</div>
        <div className={style.maincon1}>{t('179')}.</div>
      </div>
    </div><div className = {style.box}>
      <div className = {style.boxt}>
        <Image src = {m5} alt = "magnifier"height ={55}/>
        <div className={style.tit}>
        <h3>
          {t('455')}
         </h3> 
          </div>
        <div className = {style.lline}></div>
        <div className = {style.maincon}>{t('456')}</div>
        <div className={style.maincon1}>{t('457')}</div>
        <div className={style.maincon}>{t('458')}</div>
        <div className={style.maincon1}>{t('459')}</div>
      </div>
    </div>
  </div>
</div>
         </div>
         <div className = {style.lastpage}>
          <div className = {style.lasttit}>{t('317')}</div>
          <div className = {style.con5}>{t('318')}</div>
          <Link href = '/content/contact'>
          <button className = {style.but5}>{t('38')} <FaChevronRight className={style.iconlast}/> </button>
          </Link>
        </div>
         </div>
         </div>
    <Footer/>


    </div>
  )
}

export default Pg5

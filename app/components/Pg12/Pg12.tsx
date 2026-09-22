'use client';
import React from 'react'
import style from "./pg12.module.css"
import Nav from "@/app/components/Nav/Nav"
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import Image from 'next/image';
import { Zap } from "lucide-react";
import Link from 'next/link';
import { BellRing, Newspaper, Languages } from "lucide-react";
import mockup from "./real_estate_hero_mockup.png"
import { FiArrowRight } from "react-icons/fi";
import { Building2 } from "lucide-react";
import wallpaper from './website-hero.jpg'
import contactform from "./property-alert.png"
import { SquarePen, MapPin, Search } from "lucide-react";
import {
  CircleCheck,
  Clock,
  Sparkles,
  Database,
  TrendingUp
} from "lucide-react";
import villa from "./sunset-villa-paradise-stockcake.jpg"
import {
  Heart,
  Star,
  CircleDollarSign,
  FileText,
  Mail
} from "lucide-react";

const faqs = [
  { question: "769", answer: "770" },
  { question: "771", answer: "772" },
  { question: "773", answer: "774" },
  { question: "775", answer: "776" },
  { question: "777", answer: "778" },
  { question: "779", answer: "780" },
  { question: "781", answer: "782" },
  { question: "783", answer: "784" },
];


const Pg12 = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };
  const {t} = useTranslation();
  return (
    <div className={style.body}>
    <Nav/>
    <div className = {style.main1}>
    <div
        className={style.main}
        style={{
          backgroundImage: `url(${wallpaper.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
          <div className={style.overlay}></div>
          <div className = {style.content1}>
      <div className= {style.transparentbox}>
      <span className={style.yellowDot}></span>
      <div className = {style.dottext}>
       {t('700')}
        </div>
      </div>
      <div className={style.hellotxt}>

<div>
{t('701')}{' '}
  <br className={style.mobileBreak} />
  {t('702')}
  <span className={style.desktopDash}> —</span>
</div>

<div>
  <span className={style.mobileDash}>— </span>
  <span className={style.midtext}>{t('703')} </span>
  <br className={style.mobileBreak} />
  <span className={style.midtext}>{t('704')}</span> {t('705')}
</div>

<div>
{t('706')}
</div>

</div>
<div className = {style.mainheading}>
{t('707')}
  </div>
  <div className = {style.buttondiv}>
  <Link href="/content/contact">
    <button className= {style.button}> 
    {t('708')}
     
<span className={style.arrow}>
  <FiArrowRight />
</span>
    </button>
    </Link>
  </div>
      </div>
      </div>
      </div>
      <div className = {style.section2}>
      <div className = {style.main2}> 
      <div className={style.left}>
        <div className={style.lefttit1}>
        {t('709')}
        </div>
        <div className = {style.leftsubtit}>
        {t('710')}
</div>
<div className = {style.leftcontent}>
{t('711')}
</div>
        </div>
        <div className={style.right}>
          <div className = {style.outbox}>
            <div className = {style.img}>
            <Image src = {mockup} alt = "mockup" className = {style.mockup} />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className = {style.section3}>
      <div className = {style.main3}>
        <div className = {style.tit3}>
        {t('712')}
</div>
<div className = {style.boxes}>
  <div className = {style.box}>
    <div className = {style.number}>01</div>
    <div className = {style.boxcont}>
    {t('713')}
      </div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>02</div>
    <div className = {style.boxcont}>
    {t('714')}
      </div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>03</div>
    <div className = {style.boxcont}>
    {t('715')}
      </div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>04</div>
    <div className = {style.boxcont}>
    {t('716')}
      </div>
  </div>
</div>
<div className = {style.boxes}>
<div className = {style.box}>
    <div className = {style.number}>05</div>
    <div className = {style.boxcont}>
    {t('717')}
</div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>06</div>
    <div className = {style.boxcont}>
    {t('718')}
      </div>
  </div>
</div>
      </div> 
      </div>
      <div className = {style.section4}>
     <div className={style.main4}>
     <div className={style.lefttit1}>
     {t('719')}
        </div>
        <div className = {style.toptitle}>
          <div className = {style.lefttop}>
          {t('720')}
</div>
          <div className = {style.righttop}>
          {t('721')}

</div>
        </div>
        <div className = {style.boxes4}>
          <div className = {style.row1}>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Zap className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>{t('722')}</div>
              <div className = {style.bcont4}>{t('723')}</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Building2 className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>
              {t('724')}
</div>
              <div className = {style.bcont4}>
              {t('725')}

</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}> 
              <SquarePen className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>
              {t('726')}
</div>
              <div className = {style.bcont4}>
              {t('727')}

</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <MapPin className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>
              {t('728')}
</div>
              <div className = {style.bcont4}>
              {t('729')}
</div>
            </div>
          </div>
          <div className = {style.row2}>
          <div className = {style.box4}>
              <div className = {style.icon4}>
              <Search className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>{t('730')}
</div>
              <div className = {style.bcont4}>
              {t('731')}


                </div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <BellRing className={style.zapIcon} />




              </div>
              <div className = {style.btit4}>{t('732')}
</div>
              <div className = {style.bcont4}>
              {t('733')}


</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Newspaper className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>
              {t('734')}

</div>
              <div className = {style.bcont4}>
              {t('735')}

</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Languages className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>{t('736')}

</div>
              <div className = {style.bcont4}>
              {t('747')}




</div>
            </div>
          </div>
          <div className = {style.row3}>
          <div className = {style.box4}>
              <div className = {style.icon4}>
              <Heart className={style.zapIcon} />

              </div>
              <div className = {style.btit4}>
              {t('738')}

</div>
              <div className = {style.bcont4}>
              {t('739')}


                </div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>

<Star className={style.zapIcon} />

              </div>
              <div className = {style.btit4}>
              {t('740')}


</div>
              <div className = {style.bcont4}>
              {t('741')}


</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>

<CircleDollarSign className={style.zapIcon} />


              </div>
              <div className = {style.btit4}>
              {t('742')}


</div>
              <div className = {style.bcont4}>
              {t('743')}




</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <FileText className={style.zapIcon} />

              </div>
              <div className = {style.btit4}> {t('744')}

        

</div>
              <div className = {style.bcont4}>
              {t('737')}



</div>
            </div>

          </div>
          <div className = {style.row4}>
          <div className = {style.box4}>
              <div className = {style.icon4}>
           
<Mail className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>{t('746')}


</div>
              <div className = {style.bcont4}>
              {t('745')}

</div>
            </div>
          </div>
        </div>
     </div>
     </div>
     <div className = {style.section5}>
     <div className = {style.main5}>
      <div className = {style.left5}>
      <Image src = {villa} alt = "villa" className={style.villa}/>
      </div>
      <div className = {style.right5}>
        <div className = {style.stit5}>
          {t('748')}
        </div>
        <div className = {style.maintit5}>   {t('749')}
</div>
<div className = {style.points5}>
  <div className = {style.point1}>
    <div className = {style.icon5}>
    <CircleCheck className={style.zcon} />

    </div>
    <div className = {style.ptcont5}>
    <div className = {style.pointit5}>
    {t('750')}
</div>
<div className = {style.contentpt5}>
{t('751')}
</div>
  </div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}>

    <Clock className={style.zcon} />

    </div>
    <div className = {style.ptcont5}>
    <div className = {style.pointit5}>
    {t('752')}

</div>
<div className = {style.contentpt5}>
{t('753')}
</div>

</div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}>

<Sparkles className={style.zcon} />


    </div>
    <div className = {style.ptcont5}>
    <div className = {style.pointit5}>
    {t('754')}

</div>
<div className = {style.contentpt5}>   {t('755')}
</div>
</div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}><Database className={style.zcon} />


</div>  <div className = {style.ptcont5}>
    <div className = {style.pointit5}>
    {t('756')}

</div>
<div className = {style.contentpt5}>
{t('757')}
</div>

</div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}>
    <TrendingUp className={style.zcon} />
      </div>  <div className = {style.ptcont5}>
    <div className = {style.pointit5}>   {t('758')}
      

</div>
<div className = {style.contentpt5}>   {t('759')}
</div>

</div>
  </div>
</div>
      </div>
     </div>
     </div>
     <div className = {style.section6}>
     <div className = {style.main6}>
      <div className = {style.l6}>
        <div className = {style.small6}>
        {t('760')}
</div>
<div className = {style.maint6}>
{t('761')}
</div>
<div className = {style.lcont6}>
{t('762')}
</div>
<div className = {style.pts6}>
  <div className = {style.pt1}>
    <div className = {style.ic}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>
    {t('763')}
</div>
  </div>
  <div className = {style.pt1}>
    <div className = {style.ic6}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>   {t('764')}

</div>
  </div>
  <div className = {style.pt1}>
    <div className = {style.ic6}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>
    {t('765')}
</div>
  </div>
  <div className = {style.pt1}>
    <div className = {style.ic6}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>
    {t('766')}
</div>
  </div>
</div>
      </div>
      <div className = {style.r6}>
      <Image src = {contactform} alt = "contact" className = {style.cf}/>
      </div>
     </div>
     </div>
     <div className = {style.main7}>
      <div className = {style.smallt7}>   {t('767')}</div>
      <div className = {style.maint7}>
      {t('768')}
      </div>
      <section className={style.faq}>
      {faqs.map((faq, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            className={`${style.item} ${isOpen ? style.open : ""}`}
            key={index}
          >
<button
  className={style.question}
  onClick={() => toggleFAQ(index)}
  aria-expanded={isOpen}
>
  <span>{t(faq.question)}</span>

  {/* + / × icon */}
  <span className={style.icon7}>
    <span className={style.horizontal}></span>
    <span className={style.vertical}></span>
  </span>
</button>

<div className={style.answerWrapper} style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
  <div className={style.answer}>
    <p>{t(faq.answer)}</p>
  </div>
</div>
          
          </div>
        );
      })}
    </section>
     </div>
     <div className = {style.main8}>
      <div className = {style.maint8}>   {t('785')}</div>
      <div className = {style.subt8}>   {t('786')}</div>
      
      <div className = {style.button8}>
      <Link href="/content/contact">
        <button className = {style.but8}>   {t('708')} <span className = {style.arrow}> <FiArrowRight/> </span> </button>
        </Link>
      </div>
     </div>
    <Footer/>
    </div>
  )
}
export default Pg12 ; 
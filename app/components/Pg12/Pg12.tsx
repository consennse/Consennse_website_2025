'use client';
import React from 'react'
import style from "./pg12.module.css"
import Nav from "@/app/components/Nav/Nav"
import Footer from '../Footer/Footer'
// import { useTranslation } from 'react-i18next'
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
  {
    question: "What is WEBSITE for Propertybase?",
    answer:
      "WEBSITE for Propertybase is a service that designs and develops modern real estate websites fully integrated with Propertybase. It enables automatic listing publication, lead capture, and CRM synchronisation — eliminating manual work and data duplication",
  },
  {
    question: "How does the integration with Propertybase work?",
    answer:
      "We connect your website directly to Propertybase via API. Property listings sync automatically, website inquiries are created as leads in your CRM, and contact data is enriched with user activity — all in real time.",
  },
  {
    question: "Do I need technical knowledge to manage the website?",
    answer:
      "No. We build every site with a user-friendly CMS that lets you update content, add pages, and manage listings without any coding knowledge. Our team also provides training and ongoing support.",
  },
  {
    question: "Can the website handle multiple languages?",
    answer:
      "Yes. Our websites support multilingual content, allowing you to reach international audiences and expand into new markets with localised property listings and pages.",
  },
  {
    question: "Is the website optimised for search engines?",
    answer:
      "Absolutely. Every site is built with SEO best practices — fast loading times, clean code, structured data, and optimised content — to help you rank higher in search results and attract more organic traffic.",
  },
  {
    question: "How long does it take to launch the website?",
    answer:
      "A typical project takes 6–10 weeks from kickoff to launch, depending on the scope and complexity. We follow a structured process with clear milestones to keep everything on track.",
  },
  {
    question: "What costs do I have afterwards: Hosting, CMS License?",
    answer:
      "After launch, ongoing costs depend on your setup. Hosting is typically covered by your chosen platform or infrastructure provider. If your CMS requires a commercial license, renewal fees apply annually. We provide a transparent cost breakdown during the project so there are no surprises.",
  },
  {
    question: "I don't have Propertybase. Can I still use WEBSITE for Propertybase?",
    answer:
      "Ongoing costs may include hosting, domain registration, CMS licensing, and optional maintenance.",
  },
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
  // const {t} = useTranslation();
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
      <div className = {style.dottext}>WEBSITE FOR PROPERTYBASE </div>
      </div>
      <div className={style.hellotxt}>

<div>
  Your real
  <br className={style.mobileBreak} />
  estate website
  <span className={style.desktopDash}> —</span>
</div>

<div>
  <span className={style.mobileDash}>— </span>
  <span className={style.midtext}>fully</span>
  <br className={style.mobileBreak} />
  <span className={style.midtext}>connected</span> to
</div>

<div>
  Propertybase.
</div>

</div>
<div className = {style.mainheading}>
We design and develop modern real estate websites that integrate seamlessly with Propertybase. Publish listings automatically, capture leads, and manage inquiries directly in your CRM — without manual work or duplicate data.
  </div>
  <div className = {style.buttondiv}>
  <Link href="/content/contact">
    <button className= {style.button}> 
      Ready for the next step?
     
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
        Built for real estate agencies
        </div>
        <div className = {style.leftsubtit}>From website visitor to CRM lead — automatically.
</div>
<div className = {style.leftcontent}>
Turn your website into an active part of your sales process. High performance, modern technology, and a clear focus on lead generation.
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
        <div className = {style.tit3}>One connected workflow.
</div>
<div className = {style.boxes}>
  <div className = {style.box}>
    <div className = {style.number}>01</div>
    <div className = {style.boxcont}>Prepare your Property listings in the CRM</div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>02</div>
    <div className = {style.boxcont}>Property listings sync directly from Propertybase</div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>03</div>
    <div className = {style.boxcont}>Website inquiries are automatically created in the CRM</div>
  </div>
  <div className = {style.box}>
    <div className = {style.number}>04</div>
    <div className = {style.boxcont}>Deliver the property brochure automatically</div>
  </div>
</div>
      </div> 
      </div>
      <div className = {style.section4}>
     <div className={style.main4}>
     <div className={style.lefttit1}>
     Key Features
        </div>
        <div className = {style.toptitle}>
          <div className = {style.lefttop}>Everything a modern real estate site needs.
</div>
          <div className = {style.righttop}>Designed for agencies that want speed, structure, and a website that does the heavy lifting in lead generation.

</div>
        </div>
        <div className = {style.boxes4}>
          <div className = {style.row1}>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Zap className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>Modern technology platform</div>
              <div className = {style.bcont4}>Built with scalable, high-performance technologies for speed, security, and future readiness.</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Building2 className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>New developments & units
</div>
              <div className = {style.bcont4}>Showcase projects, buildings, and individual units in a clear, structured, and visually appealing way.

</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}> 
              <SquarePen className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>User-friendly CMS
</div>
              <div className = {style.bcont4}>Easily manage and update your website content — no technical knowledge required.

</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <MapPin className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>Interactive map search
</div>
              <div className = {style.bcont4}>Enable intuitive property discovery with interactive maps and location-based search.

</div>
            </div>
          </div>
          <div className = {style.row2}>
          <div className = {style.box4}>
              <div className = {style.icon4}>
              <Search className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>SEO-optimized structure
</div>
              <div className = {style.bcont4}>
              Improve search engine visibility with optimized pages, content, and performance.


                </div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <BellRing className={style.zapIcon} />




              </div>
              <div className = {style.btit4}>Property Alert

</div>
              <div className = {style.bcont4}>
              Capture client criteria and send weekly updates of matching new listings, automatically.



</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Newspaper className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>
              Articles & Blogs

</div>
              <div className = {style.bcont4}>Publish editorial content to grow organic traffic and build authority in your market.



</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <Languages className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>Multilingual support

</div>
              <div className = {style.bcont4}>
              Reach international audiences with flexible multilingual capabilities.



</div>
            </div>
          </div>
          <div className = {style.row3}>
          <div className = {style.box4}>
              <div className = {style.icon4}>
              <Heart className={style.zapIcon} />

              </div>
              <div className = {style.btit4}>
                Property Shortlist
</div>
              <div className = {style.bcont4}>
              Improve search engine visibility with optimized pages, content, and performance.


                </div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>

<Star className={style.zapIcon} />

              </div>
              <div className = {style.btit4}>
                Featured Properties 

</div>
              <div className = {style.bcont4}>
              Capture client criteria and send weekly updates of matching new listings, automatically.



</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>

<CircleDollarSign className={style.zapIcon} />


              </div>
              <div className = {style.btit4}>
              Multi-currency Support

</div>
              <div className = {style.bcont4}>Publish editorial content to grow organic traffic and build authority in your market.



</div>
            </div>
            <div className = {style.box4}>
              <div className = {style.icon4}>
              <FileText className={style.zapIcon} />

              </div>
              <div className = {style.btit4}>Brochure Download

</div>
              <div className = {style.bcont4}>
              Reach international audiences with flexible multilingual capabilities.



</div>
            </div>

          </div>
          <div className = {style.row4}>
          <div className = {style.box4}>
              <div className = {style.icon4}>
           
<Mail className={style.zapIcon} />
              </div>
              <div className = {style.btit4}>Newsletter 

</div>
              <div className = {style.bcont4}>
              Reach international audiences with flexible multilingual capabilities.



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
        <div className = {style.stit5}>Benefits</div>
        <div className = {style.maintit5}>Less work. More leads. Better data.
</div>
<div className = {style.points5}>
  <div className = {style.point1}>
    <div className = {style.icon5}>
    <CircleCheck className={style.zcon} />

    </div>
    <div className = {style.ptcont5}>
    <div className = {style.pointit5}>Less manual work
</div>
<div className = {style.contentpt5}>No duplicate data entry between your website and Propertybase.
</div>
  </div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}>

    <Clock className={style.zcon} />

    </div>
    <div className = {style.ptcont5}>
    <div className = {style.pointit5}>Faster response times

</div>
<div className = {style.contentpt5}>Process incoming leads instantly and respond more efficiently.
</div>

</div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}>

<Sparkles className={style.zcon} />


    </div>
    <div className = {style.ptcont5}>
    <div className = {style.pointit5}>Better customer experience

</div>
<div className = {style.contentpt5}>Make it easy for visitors to find properties and get in touch.

</div>
</div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}><Database className={style.zcon} />


</div>  <div className = {style.ptcont5}>
    <div className = {style.pointit5}>Consistent, reliable data

</div>
<div className = {style.contentpt5}>Keep listings, contacts, and inquiries fully synchronised.
</div>

</div>
  </div>
  <div className = {style.point1}>
    <div className = {style.icon5}>
    <TrendingUp className={style.zcon} />
      </div>  <div className = {style.ptcont5}>
    <div className = {style.pointit5}>Scalable solution

</div>
<div className = {style.contentpt5}>Grow your website alongside your business and Propertybase setup.
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
        <div className = {style.small6}>Property Alert
</div>
<div className = {style.maint6}>Turn visitors into qualified leads — automatically.
</div>
<div className = {style.lcont6}>Let visitors define exactly what they&apos;re looking for — region, city, property type, bedrooms, budget, and lifestyle features. Their preferences are captured directly in Propertybase, and they receive a weekly digest of new matching listings.
</div>
<div className = {style.pts6}>
  <div className = {style.pt1}>
    <div className = {style.ic}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>Granular criteria: location, type, price, features
</div>
  </div>
  <div className = {style.pt1}>
    <div className = {style.ic6}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>Automated weekly email of matching new listings

</div>
  </div>
  <div className = {style.pt1}>
    <div className = {style.ic6}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>Leads and preferences synced into Propertybase
</div>
  </div>
  <div className = {style.pt1}>
    <div className = {style.ic6}>  <CircleCheck className={style.checkIcon} /> </div>
    <div className = {style.pt61}>GDPR-compliant consent and easy unsubscribe
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
      <div className = {style.smallt7}>Q & A</div>
      <div className = {style.maint7}>Frequently asked questions</div>
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
              <span>{faq.question}</span>

              {/* + / × icon */}
              <span className={style.icon7}>
                <span className={style.horizontal}></span>
                <span className={style.vertical}></span>
              </span>
            </button>

            <div
              className={style.answerWrapper}
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className={style.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
     </div>
     <div className = {style.main8}>
      <div className = {style.maint8}>Turn your website into a lead machine.</div>
      <div className = {style.subt8}>Let&apos;s build a website that not only looks great but actively supports your sales and marketing processes in Propertybase.</div>
      
      <div className = {style.button8}>
      <Link href="/content/contact">
        <button className = {style.but8}>Ready for the next step? <span><FiArrowRight/> </span> </button>
        </Link>
      </div>
     </div>
    <Footer/>
    </div>
  )
}
export default Pg12 ; 
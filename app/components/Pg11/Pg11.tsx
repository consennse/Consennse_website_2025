'use client';
import React from 'react'
import style from "./pg11.module.css"
import Nav from "@/app/components/Nav/Nav"
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import CurrencyDisplay from '../CurrencyDisplay/CurrencyDisplay';
import { FaChevronRight } from 'react-icons/fa';
import people from "./Rectangle 2683-2.png"
const Pg11 = () => {
  const {t} = useTranslation();
  return (
    <div className={style.body}>
    <Nav/>
    <div className={style.main}>
    <div className = {style.top}>
            <div className = {style.heading1}>
            <h1>
            Our Propertybase Packages
              </h1>
              </div>
            <div className = {style.line}></div>
            <div className = {style.para}>It can be difficult to know where to start when selecting the right CRM onboarding package that fits within your budget. While it is an additional cost, user onboarding is a pivotal factor in getting value from your CRM quickly. So, we’ve put together the ultimate pricing guide that’ll help you choose an onboarding package that suits your needs.</div>
          <div className = {style.box}>
            <div className = {style.left}>
              <div className = {style.heading2}>
                <h2>
                Onboarding made easy
                </h2>
              </div>
              <div className={style.line2}></div>
              <div className = {style.para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
est laborum.
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Except.
</div>
            </div>
            <div className = {style.right}>
              <Image src = {people} alt = "people" className = {style.people} />
            </div>
          </div>
            </div>
            <div className = {style.mid}>
              <div className = {style.box2}>
                <div className = {style.left1}>
                  <div className = {style.head2}>
                    <h3>
                    Why is onboarding so important?
                    </h3>
                    </div>
                    <div className = {style.param1}>Onboarding is designed to get your whole team up and running faster, with increased ROI and reduced staff frustration. With a mixture of guided self-help and professional assistance, software experts can streamline your learning so that you’re on track to achieve your goals. In fact, the primary reason why companies discard software is because they don’t opt for onboarding and implementation help. Although CRM systems are designed for ease of use, there are still aspects of the system that you might not be immediately familiar with. Software can be challenging to work your way around, even after initial training, so continued onboarding support can assure your business’s success.</div>
                </div>
                <div className = {style.right1}>
                <div className = {style.head2}>
                    <h3>
                    What are the benefits of onboarding?
                    </h3>
                    </div>
                    <div className = {style.param1}>Our onboarding packages significantly reduce staff stress and frustration. After a new software system has been introduced into a company, staff may be reluctant to take this on as it’s seen as unchartered territory. Therefore, the best way to prevent hesitation is through making sure all the appropriate staff have the necessary training so they can feel their way around the new system and use it with ease.</div>
                </div>
              </div>
            </div>
            <div className = {style.bottom}>
              <div className = {style.head3}>
              TAILORED TO YOUR NEEDS
              </div>
              <div className = {style.head4}>
                <h2>
                Our onboarding packages in comparison </h2></div>
              <div className = {style.line3}></div>
              <div className = {style.parab1}>Below are our four contract models, tailored to meet the diverse needs of our customers. 
None of them a perfect fit? Contact us – we’ll be happy to provide advice and create a custom package for you.</div>
<div className = {style.boxes3}>
  <div className = {style.box31}>
    <div className = {style.hb1}>
    <h3>
      Basic Package
     </h3> 
      </div>
    <div className = {style.subhead1}>For small teams or CRM beginners</div>
    <div className = {style.bline11}></div>
    <div className = {style.bpara}>Get started quickly with essential setup and training.</div>
    <div className = {style.bar}><CurrencyDisplay/> 3’000</div>
    <div className = {style.subh1}>What’s included</div>
    <div className = {style.line4}></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Initial setup of Propertybase CRM </div>
    </div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Configuration of up to 5 user accounts
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Basic training (contacts, listings, tasks)
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      One branded email template
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Quick-start documentation or video guide
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      3 hours onboarding support included
    </div></div>
  </div>
  <div className = {style.box32}>
    <div className = {style.hb1}>
      <h3>
      Standard Package
      </h3>
      </div>
    <div className = {style.subhead1}>For growing businesses with defined processes</div>
    <div className = {style.bline1}></div>
    <div className = {style.bpara}>Enhance your CRM experience with useful automations and customization.</div>
    <div className = {style.bar}><CurrencyDisplay/> 5’000</div>
    <div className = {style.subh1}>What’s included</div>
    <div className = {style.line4}></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      All features of the Basic Package
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Setup of up to 10 user accounts
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Customized dashboards and list views
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Workflow automations (e.g. lead routing, task triggers)
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Up to 3 branded email templates
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      2 live training sessions for different user groups
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      5 hours onboarding support included
    </div></div>
  </div>
  <div className = {style.box33}>
    <div className = {style.hb1}>
      <h3>
      Premium Package
      </h3>
      </div>
    <div className = {style.subhead1}>For advanced teams with multiple roles and integration needs</div>
    <div className = {style.bline1}></div>
    <div className = {style.bpara}>Optimize your digital workflows with automation, reports, and integrations.</div>
    <div className = {style.bar}><CurrencyDisplay/> 7’000</div>
    <div className = {style.subh1}>What’s included</div>
    <div className = {style.line4}></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      All features of the Standard Package
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Setup of up to 20 user accounts
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Advanced workflows (e.g. deal stages, customer segmentation)
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      CRM portal or website interface check
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Email drip campaigns and auto-responses
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      KPI dashboards and performance reports
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Personalized recorded training
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      10 hours onboarding support included
    </div></div>
  </div>
  <div className = {style.box34}>
    <div className = {style.hb1}>
      <h3>
      Individual Package
      </h3>
      </div>
    <div className = {style.subhead1}>For complex environments or special business requirements</div>
    <div className = {style.bline1}></div>
    <div className = {style.bpara}>Fully tailored onboarding based on your structure, processes, and tools.</div>
    <div className = {style.bar}>Price upon request</div>
    <div className = {style.subh1}>What’s included</div>
    <div className = {style.line4}></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Individual strategy session and requirement analysis
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Custom CRM configuration & field mapping
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Integration of external tools or APIs
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Data migration from existing systems
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Process consulting & best practice guidance
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Custom training plan (live, recorded, or on-site)
    </div></div>
    <div className = {style.minis}>
      <FaCheck className = {style.check}/>
      <div className = {style.checktext}>
      Ongoing support until handover and acceptance
    </div></div>
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
    <Footer/>
    </div>
  )
}
export default Pg11 ; 
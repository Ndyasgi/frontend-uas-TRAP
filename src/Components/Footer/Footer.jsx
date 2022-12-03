import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (1).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            {/* <small>KEEP IN TOUCH</small> */}
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>TripTrap
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Practical, No Hassle
            <p>Free transactions anywhere and anytime, from desktops, mobile applications, or mobile websites.</p>
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineFacebook className="icon"/>
              <AiFillInstagram className="icon"/>
              <AiOutlineWhatsApp className="icon"/>
            </div>
          </div>
          
          <div className="footerLinks grid">
            {/* grup 1 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Payment
              </li>

            </div>

            {/* grup 2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Rental Car
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Hostel World
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Trip Advisor
              </li>

            </div>

            {/* grup 3 */}
            {/* <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Bali
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Surabaya
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Manado
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Bandung
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Kalimantan
              </li>

            </div> */}
          </div>

          <div className="footerDiv flex">
            {/* <small>BEST TRAVEL WEBSITE THEME</small> */}
            <small>Copyright © 2022 TRAP</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
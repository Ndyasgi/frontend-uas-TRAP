import React, {useEffect} from 'react'
import './main.css'

// import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Lihaga Island',
    location: 'Likupang',
    grade: 'CULTURAL RELAX',
    fees: 'Rp. 1.000.000',
    description: 'Laut disekitar pulau yang relatif berombak tenang dan air laut yang sejernih kristal berwarna tosca. Pulau Lihaga merupakan pulai yang tak berpenghuni, sehingga keasriannya sangat terjaga.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Gangga Island',
    location: 'Likupang',
    grade: 'CULTURAL RELAX',
    fees: 'Rp. 1.000.000',
    description:'Keindahan bawah lautnya tidak akan mengecewakan. Inilah yang akhirnya membuat pulau Gangga banyak dikunjungi oleh wisatawan yang berasal dari berbagai daerah.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Bunaken island',
    location: 'Manado',
    grade: 'CULTURAL RELAX',
    fees: 'Rp. 1.500.000',
    description:'Taman Laut Bunaken adalah surga bagi berbagai macam biota laut yang unik dan penuh warna. Taman laut yang ada di sekitar Bunaken adalah bagian dari Taman Nasional.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Siladen island',
    location: 'Manado',
    grade: 'CULTURAL RELAX',
    fees: 'Rp. 1.000.000',
    description:'pulau Siladen ini memiliki hamparan pasir putih yang sangat cantik dan mengelilingi hampir seluruh pulau. Keindahan dari pulau ini pun didukung dengan laut yang memiliki air yang jernih.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Paal Beach',
    location: 'Likupang',
    grade: 'CULTURAL RELAX',
    fees: 'Rp. 500.000',
    description:'Pantai Paal berada di Likupang Timur, Kabupaten Minahasa Utara. Pantai Paal memiliki pasir putih yang lembut, Lautnya biru dan jernih. Di sekitar pantai juga banyak perbukitan hijau. '
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Pulisan Beach',
    location: 'Likupang',
    grade: 'CULTURAL RELAX',
    fees: 'Rp. 500.000',
    description:'Pantai Pulisan merupakan salah satu pantai pasir putih yang terletak di Kabupaten Minahasa Utara Provinsi Sulawesi Utara. Pasir putih di pantai ini masih sangat terjaga keasriannya.'
  },
]

const Main = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {/*  */}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small> +1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }


      </div>

    </section>
  )
}

export default Main
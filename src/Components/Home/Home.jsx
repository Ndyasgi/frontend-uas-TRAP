import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video (2).mp4'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4" ></video>
        

        {/* rubah teks tengah */}
          <div className="homeContent ">
            <h1 style={{textAlign: "center"}} className="text" >
            <span className="wrn">Trip</span>Trap
            </h1>
            <p style={{textAlign: "center"}} className="style">
            APLIKASI SARANA INFORMASI TEMPAT WISATA DI SULAWESI UTARA BERBASIS WEB
            </p>
          </div>

    </section>
  )
}

export default Home
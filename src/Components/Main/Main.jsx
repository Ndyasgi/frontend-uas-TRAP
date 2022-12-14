import React, {useEffect} from 'react'
import './main.css'

// import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Star from '../../Assets/star.svg'
import img from '../../Assets/pantai pulisan.jpg'
import img2 from '../../Assets/bunaken.jpg'
import img3 from '../../Assets/pulau lembeh.jpg'
import img4 from '../../Assets/pulau lihaga.jpeg'
import img5 from '../../Assets/tangkoko.jpg'
import img6 from '../../Assets/pinus.jpg'
import img7 from '../../Assets/patung yesus.jpg'
import img8 from '../../Assets/bukit larata.jpg'
import img9 from '../../Assets/bukit doa mahawu.jpg'
import img10 from '../../Assets/danau linow.jpg'
import img11 from '../../Assets/tuur maasering.jpg'
import img12 from '../../Assets/arung jeram.jpg'
import img13 from '../../Assets/bukit kasih.jpg'
import img14 from '../../Assets/pantai paal.jpg'
import img15 from '../../Assets/gunung klabat.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
{
    id: 1,
    imgSrc: img,
    nama: "Pantai Pulisan",
    alamat: "Desa Pulisan Kec. Likupang Timur",
    penilaian: "9/10",
    deskripsi: "Pantai Pulisan terkenal dengan sebutannya sebagai “the hidden paradise”, Sebutan ini diberikan karena lokasi dari pantai ini yang tersembunyi. Selain karena keindahan alamnya."
},

{
    id: 8,
    imgSrc: img2,
    nama: "Taman Nasional Bunaken",
    alamat: "Kota Manado, Sulawesi Utara",
    penilaian: "10/10",
    deskripsi: "Taman Nasional Bunaken merupakan kawasan pelestarian ekosistem tropis perairan yang berada di pusat segitiga terumbu karang dunia"
},

{
    id: 9,
    imgSrc: img3,
    nama: "Pulau Lembeh",
    alamat: "Pulau Lembeh, Kota Bitung",
    penilaian: "8/10",
    deskripsi: "Bagi pecinta diving, kamu nggak akan kehabisan spot diving deh kalau liburan ke Sulawesi Utara. Tapi, kalau mencari spot yang paling cantik maka pesona keindahan bawah laut Pulau Lembeh ini tiada duanya."
},

{
    id: 10,
    imgSrc: img4,
    nama: "Pulau Lihaga",
    alamat: "Gangga Satu, Likupang Barat",
    penilaian: "8/10",
    deskripsi: "Walau letaknya jauh dari pusat Kota Manado, keindahan Pulau Lihaga memang susah ditandingi. Hamparan pasir putih bersih yang dikelilingi air biru nan jernih akan seketika menenangkan pikiranmu!"
},

{
    id: 11,
    imgSrc: img5,
    nama: "Taman Nasional Tangkoko",
    alamat: "Pinangunian, Aertembaga, Kota Bitung",
    penilaian: "8/10",
    deskripsi: "Kamu akan dengan mudah menemukan hewan imut ini di sela-sela rimbunnya pepohonan. Gemas sekali. Rasanya ingin dibawa pulang, tapi tidak boleh ya karena hewan ini sudah langka dan harus dilestatrikan"
},

{
    id: 12,
    imgSrc: img6,
    nama: "Hutan Pinus Lahendong",
    alamat: "Jalan Lahendong, Tomohon Selatan",
    penilaian: "8/10",
    deskripsi: "Berada di antara pepohonan pinus yang menjulang tinggi tentu membuat pikiran kita terasa lebih segar. Apalagi bagi kamu yang jenuh dan lelah dengan rutinitas harian yang menyita sebagian besar waktu"
},

{
    id: 13,
    imgSrc: img7,
    nama: "Patung Yesus Memberkati",
    alamat: "Winangun Satu, Kec. Malalayang, Kota Manado",
    penilaian: "8/10",
    deskripsi: "Patung setinggi 30 meter dengan penyangga setinggi 20 meter ini disebut-sebut sebagai sala satu Patung Kristus termegah di dunia, nggak kalah sama yang ada di Rio de Janeiro, Brazil. Dari kejauhan, keindahan patung ini sudah terlihat jelas dengan jubah yang seakan-akan terbang tertiup angin."
},

{
    id: 14,
    imgSrc: img8,
    nama: "Bukit Larata",
    alamat: "Pulisan, Likupang Timur, Kab. Minahasa Utara",
    penilaian: "9/10",
    deskripsi: "Perpaduan antara hijaunya bukit dengan birunya langit dan laut yang membentang di depan mata membuat tempat ini seperti salah satu kepingan surga yang jatuh di salah satu sudut Indonesia."
},

{
    id: 15,
    imgSrc: img9,
    nama: "Bukit Doa Mahawu Tomohon",
    alamat: "Kakaskasen Tiga, Kec. Tomohon Utara, Kota Tomohon",
    penilaian: "10/10",
    deskripsi: "Saking indahnya, tak jarang tempat ini jadi lokasi favorit para para pasangan yang ingin melakukan pemotretan pre-wedding. Bahkan bisa juga kalau ingin melakukan pemberkatan pernikahan di sini karena juga tersedia sebuah kapel nan indah serta gedung berkapasitas 200 orang."
},

{
    id: 16,
    imgSrc: img10,
    nama: "Danau Linow",
    alamat: "Lahendong, Tomohon Sel., Kota Tomohon",
    penilaian: "9/10",
    deskripsi: "Danau ini merupakan danau vulkanik dengan tingkat keasaman yang tinggi sehingga wajar jika kamu mencium bau belerang. Uniknya, warna Danau Linow berubah-ubah tergantung cuaca dan aktivitas belerang di dalamnya. Terkadang danaunya berwarna kehijauan, terkadang biru, dan terkadang campuran antara keduanya bahkan coklat."
},

{
    id: 17,
    imgSrc: img11,
    nama: "Tuur Maasering",
    alamat: "Kumelembuay, Tomohon Timur, Kota Tomohon",
    penilaian: "8/10",
    deskripsi: "Sebuah cafe dengan bangunan yang terbuat dari kayu dan bambu ini memang asyik untuk jadi tempat nongkrong santai bareng teman-teman."
},

{
    id: 18,
    imgSrc: img12,
    nama: "Arung Jeram Desa Timbukar",
    alamat: "Timbukar, Sonder, Kabupaten Minahasa",
    penilaian: "8/10",
    deskripsi: "Sepanjang arung jeram, kamu akan disuguhkan pemandangan sawah, kebun, hutan, pedesaan, dan tebing-tebing serta bebatuan sungai."
},

{
    id: 19,
    imgSrc: img13,
    nama: "Bukit Kasih",
    alamat: "Jl. Kawangkoan-Kanonang, Kec. Kawangkoan Barat, Kab. Minahasa",
    penilaian: "8/10",
    deskripsi: "Tempat ini sebagai pusat spiritual dimana mereka sering bermeditasi atau berkumpul di bukit ini."
},

{
    id: 20,
    imgSrc: img14,
    nama: "Pantai Paal",
    alamat: "Pantai Paal di Desa Marinsow, Likupang Timur",
    penilaian: "9/10",
    deskripsi: "Pantai Paal di Sulawesi Utara ini memiliki hamparan pasir putih dan halus ditambah nuansa warna kontras gradasi air laut."
},

{
    id: 21,
    imgSrc: img15,
    nama: "Gunung Klabat",
    alamat: "Airmadidi, Kab. Minahasa Utara",
    penilaian: "9/10",
    deskripsi: "Ini nih gunung yang wajib kamu taklukan saat berada di Sulawesi Utara. Puncak gunungnya berada di ketinggian 2.100mdpl dan menjadi gunung tertinggi di Sulawesi Utara."
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
          Data.map(({id, imgSrc, nama, alamat, penilaian, deskripsi})=>{
            return(
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={nama} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{nama}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{alamat}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                      <img src={Star} style={{ width: 20, height: 20 }}/>
                        {penilaian}</span>
                    </div>
                    {/* <div className="price">
                      <h5>{fees}</h5>
                    </div> */}
                  </div>

                  <div className="desc">
                    <p>Deskripsi :</p>
                    <p>{deskripsi}</p>
                  </div>

                  {/* <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button> */}
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
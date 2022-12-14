import React, {useState} from 'react'
import './navbar.css'
// import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



import logo from "../../Assets/TripTrap.jpg"

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  // function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  // function to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    
    <section className='navBarSection'>
      <header className="header">

        {/* <div className="logoDiv"> */}
          <a href="#">
            <img style={{ width: 50, height: 45 }} src={logo} />
            {/* <strong>TripTrap</strong> */}
          </a>
        {/* </div> */}

        <div className={active}>
          <ul className="navLists">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="#" className= "navLink">Explore</a>
            </button>

          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar
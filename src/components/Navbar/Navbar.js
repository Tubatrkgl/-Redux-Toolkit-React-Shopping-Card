import React ,{ useState }  from 'react'
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md"
import { TiTimes } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

import "./Navbar.scss"
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false);
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='container'>
          <div className='navbar-top flex flex-between'>
            <Link to='/' className='navbar-brand'>
              <span className='text-regal-blue'>Shopping</span>
              <span className='text-gold'>Hub.</span>
            </Link>
            <form className='navbar-search flex'>
              <input type='text' placeholder='Search here...' />
              <button type='submit'>
                <IoMdSearch className='navbar-search-btn' />
              </button>
            </form>
            <div className='navbar-btns'>
              <Link to="./cart" className='add-to-cart-btn flex'>
                <span className='btn-ico'>
                  <MdShoppingCart className='fs-23' />
                </span>
                <div className='btn-txt fw-5'>
                  Card<span className='cart-count-value'>0</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
          <ul className = {`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type='button' 
              className='navbar-hide-btn text-white'
              onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                <TiTimes className='times-icon'/>
              </button>
              <li>
                <Link to='/' className='nav-link text-white'>Demos</Link>
              </li>
            </ul>
            <button type='button' 
            className='navbar-show-btn text-gold'
            onClick={()=>setIsSidebarOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
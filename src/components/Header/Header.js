import { useState } from 'react';
import './header.css';
function Header() {

    const[hamburgerOpen, SetHamburgerOpen] = useState(false)
    
    return (
      <>
        <header>
            <div className="d-flex justify-content-between nav align-center">
                <div className="logo">SHAMSKHUS <br/> ROBOTICS </div>
                <div className={hamburgerOpen ? "nav-brand expanded" : "nav-brand"}
                
                id="nav-links">
                    <ul className="navbar d-flex">
                        <li className="nav-list"><a href="/About">About</a>
                            <ul className="nav-content">
                                <li><a href="/">Leadership</a></li>
                                <li><a href="/">Award</a></li>
                                <li><a href="/">Meat the team</a></li>
                            </ul>
                        </li>
                        <li className="nav-list"><a href="#">Robots</a>
                            <ul className="nav-content">
                                <li className="sub-nav-list"><a href="#">Sophia</a>
                                    <ul className="sub-nav-content">
                                        <li><a href="/">Being Sophia</a></li>
                                        <li><a href="/">Art By Sophia The Robot</a></li>
                                        <li><a href="/">Sophia 2022</a></li>
                                        <li><a href="/">SophiaDao</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Little Sophia</a></li>
                                <li><a href="/">All Robots</a></li>
                            </ul>
                        </li>
                        <li className="nav-list"><a href="/">Resource</a></li>
                        <li className="nav-list"><a href="/">Contact</a></li>
                        
                    </ul>
                    <button className='hamburger' onClick={() => {
                        SetHamburgerOpen(!hamburgerOpen)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </header>
        
      </>
    );
}
export default Header;
  
import React, { useState, useEffect } from 'react';
import '../index.css';
// import Logo1 from '../assets/images/logo-1.png';
// import Logo2 from '../assets/images/logo-2.png';
// import Bottel from '../assets/images/bottle.png';
// import T from '../assets/images/t.png';
// import U from '../assets/images/u.png';
// import F from '../assets/images/f.png';
// import A from '../assets/images/a-2.png';
// import Svg from '../assets/images/stars.svg'

export default function Testing() {

    const [scrolling, setScrolling] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div>
         <div className={`menu-bar ${scrolling ? 'scrolling' : ''}`}>
         <header className="header-style-1 style-3 ">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="main-navigation">
                        <div className="navigation-left">
                            <div className="nav-inner">

                                <div className="main-menu">
                                    <ul>
                                        <li className="anchor-animation menu-item active">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="anchor-animation menu-item">
                                            <a href="/">About</a>
                                        </li>
                                        <li className="anchor-animation menu-item">
                                            <a href="/">News</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="center-logo">
                            <a href="index.html" className="logo anchor-animation">
                                {/* <img src={Logo1} className="logo-1" alt="logo" />
                                <img src={Logo2} className="logo-2" alt="logo" /> */}
                            </a>
                            <div className="hamburger-menu anchor-animation" >
                                <div className="menu-btn">
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                    <span className="nav-dot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="navigation-right">
                            <div className="nav-inner">
                                <div className="main-menu">
                                    <ul>
                                        <li className="anchor-animation menu-item">
                                            <a href="https://sushi-life.fr/wp-content/uploads/2023/08/SUSHI-LIFE-PAGE-A-PAGE-MENU-PDF-BD.pdf" target='blank'>Menu</a>
                                        </li>
                                        <li className="anchor-animation menu-item">
                                            <a href="/">Reservation</a>
                                        </li>
                                        <li className="anchor-animation menu-item">
                                            <a href="/">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="mobile-header">
        <div className="mobile-hamburger anchor-animation">
            <div className="menu-btn">
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
            </div>
        </div>
        <div className="mobile-logo">
            <a href="index.html">
                {/* <img src={Logo2} className="image-fit" alt="logo" /> */}
            </a>
        </div>
        <div className="mobile-call-btn">
            <a href="tel:"><i className="fal fa-phone-alt"></i></a>
        </div>
    </header>
    <nav className="navigation-main">
        <div className="nav-overlay-1"></div>
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="nav-div p-relative">
                        <div className="nav-overlay"></div>
                        <div className="nav-content">
                            <div className="row no-gutters">
                                <div className="col-lg-5 col-12">
                                    <div className="navigation-main-inner">
                                        <div className="close-nav anchor-animation">
                                            <div className="close-btn">
                                                <span className="dots">
                                                    <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                </span>
                                                <span className="text">
                                                    Close
                                                </span>
                                            </div>
                                        </div>
                                        <div className="main-menu-desktop">
                                            <ul>
                                                <li className="anchor-animation first-link">
                                                    <a href="index.html">Fattsushi</a>
                                                </li>
                                                <li className="anchor-animation active">
                                                    <a href="index.html">Homepage 1</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="homepage-2.html">Homepage 2</a>
                                                </li>
                                                <li className="anchor-animation border-right-0">
                                                    <a href="homepage-3.html">Homepage 3</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="homepage-4.html">Homepage 4</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="homepage-5.html">Homepage 5</a>
                                                </li>
                                                <li className="anchor-animation border-right-0">
                                                    <a href="homepage-6.html">Homepage 6</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="menu-slider-wrap p-relative">
                                        <div className="menu-slider">
                                            <div className="slide-item">
                                                <a href="/">
                                                  {/* <img src={Bottel} className="img-fluid" alt="img" /> */}
                                                </a>
                                            </div>
                                            <div className="slide-item">
                                                <a href="/">
                                                    {/* <img src={Bottel} className="img-fluid" alt="img" /> */}
                                                </a>
                                            </div>
                                            <div className="slide-item">
                                                <a href="/">
                                                    {/* <img src={Bottel} className="img-fluid" alt="img" /> */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <a href="index.html" className="center-logo-wrap">
                                        <div className="svg-box">
                                            {/* <img src={T} className="logo-svg-1" alt="icon" />
                                            <img src={U} className="logo-svg-2" alt="icon" />
                                            <img src={F} className="logo-svg-3" alt="icon" />
                                            <img src={A} className="logo-svg-4" alt="icon" />
                                            <img src={T} className="logo-svg-5" alt="icon" />
                                            <img src={T} className="logo-svg-6" alt="icon" /> */}
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-5 col-12 pt-0">
                                    <div className="navigation-main-inner right-side full-height">
                                        <div className="main-menu-desktop">
                                            <ul>
                                                <li className="large-nav">
                                                    <ul className="social-media custom-flex">
                                                        <li>
                                                            <a href="/"><i className="fal fa-phone-alt"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="/"><i className="fal fa-envelope"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="/"><i className="fab fa-instagram"></i></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="small-nav">
                                                    <ul>
                                                        <li className="lang anchor-animation">
                                                            <a href="/">En</a>
                                                        </li>
                                                        <li className="search anchor-animation">
                                                            <a href="/"><i className="fal fa-search"></i></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="history.html">History</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="team.html">Team</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="menu.html">Menu</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="our-chef.html">Chef</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="gallery.html">Gallery</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="blog-left-sidebar.html">Blog Left</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="typography.html">Typography</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="reservation.html">Reservation</a>
                                                </li>
                                                <li className="anchor-animation">
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu-testimonial">
                                            <div className="menu-testimonial-wrap">
                                                <div className="testimonial-item">
                                                    <div className="stars">
                                                        {/* <img src={Svg} alt="icon" />
                                                        <img src={Svg} alt="icon" />
                                                        <img src={Svg} alt="icon" />
                                                        <img src={Svg} alt="icon" />
                                                        <img src={Svg} alt="icon" /> */}
                                                    </div>
                                                    <h5 className="fw-600">Excellent trout tartar, excellent beer, impeccable service!</h5>
                                                    <a href="/" className="fs-16">- Jhon Deo</a>
                                                </div>
                                                <a href="menu.html" className="theme-btn">Browse Our Menu <span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 pt-0">
                                    <div className="search-box-input">
                                        <div className="input-group">
                                            <div className="input-group-prepend anchor-animation">
                                                <button type="submit"><i className="fal fa-search"></i></button>
                                            </div>
                                            <input type="text" placeholder="Search"/>
                                            <div className="input-group-append anchor-animation close-search">
                                                <button type="button"><i className="fal fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>
    </div>
  )
}

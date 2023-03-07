import React from 'react';
import './style.css';



const SignIn = () => {

    return (<>
        <div className="header">
            <div className="leftbox">
                <img src="favicon.ico" className='heartStreamIcon' alt="" />
            </div>
            <div className="centerbox">
                <ul className='listing'>
                    <li className='home'><a href="/"><button className='navbarBtns'>Home</button> </a></li>
                    <li className='clannels'><a href="/"><button className='navbarBtns'>Channels</button> </a></li>
                    <li className='videos'><a href="/"><button className='navbarBtns'>Videos</button></a></li>
                    <li className='podcast'><a href="/"><button className='navbarBtns'>Podcast</button> </a></li>
                    <li className='mylist'><a href="/"><button className='navbarBtns'>My List</button> </a></li>
                </ul>
            </div>
            <div className="rightbox">
                <ul className='contents'>
                    <li><button className='subsBtn'><img src="SUBSCRIBE.png" className='subs' alt="" /></button></li>
                    <li><div className="searchButton"><button className='buttonSearch'><img src="Vector_search_icon.svg.png" className='searchIcon' alt="" /></button></div></li>
                    <li>
                        <div className="dropdown">
                            <button className='dropbtn'>
                                <i className="fa fa-caret-down"></i>
                                <img src="dropdown.png" className='drop' alt="" />
                            </button>
                            <div className="dropdown-content">
                                <a href="/">Link 1</a>
                                <a href="/">Link 2</a>
                                <a href="/">Link 3</a>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------- */}

        <div className="main">
            <div className="container1">
                <h3>Quick Search</h3>
            </div>
            <div className="container2">
                <ul className='contentQuickSearch'>
                    <li><a href="/"><button className='btnContainer2'>Search</button></a></li>
                    <li><a href="/"><button className='btnContainer2'>Movies</button></a></li>
                    <li><a href="/"><button className='btnContainer2'>Live Stream</button></a></li>
                    <li><a href="/"><button className='btnContainer2'>Schedule</button></a></li>
                    <li><a href="/"><button className='btnContainer2'>Podcast</button></a></li>
                </ul>
            </div>

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}
            <div className="container3">
                <h3>Programs on HBO NOW</h3>
            </div>
            <div className="container4">
                <ul className='movies'>
                    <li><a href="/"><img src="a.jpg" className='movieImg' alt="" /></a></li>
                    <li><a href="/"><img src="b.jpg" className='movieImg' alt="" /></a></li>
                    <li><a href="/"><img src="c.jpg" className='movieImg' alt="" /></a></li>
                    <li><a href="/"><img src="d.webp" className='movieImg' alt="" /></a></li>
                </ul>
            </div>

        </div>

        <div className="footer">
            <div className="left1">
                <div className="firstLine">
                    <ul>
                        <li><a href="/"><button className='firstLineBtns'>Channels</button></a></li>
                        <li><a href="/"><button className='firstLineBtns'>Live Stream</button></a></li>
                        <li><a href="/"><button className='firstLineBtns'>Videos</button></a></li>
                        <li><a href="/"><button className='firstLineBtns'>Schedule</button></a></li>
                        <li><a href="/"><button className='firstLineBtns'>Podcast</button></a></li>
                        <li><a href="/"><button className='firstLineBtns'>Search</button></a></li>
                        <li><a href="/"><button className='firstLineBtns1'>Subscribe</button></a></li>
                    </ul>
                </div>
                <div className="secondLine">
                    <ul>
                        <li><a href="/"><button className='secondLineBtns'>About Us</button></a></li>
                        <li><a href="/"><button className='secondLineBtns'>Help</button></a></li>
                        <li><a href="/"><button className='secondLineBtns'>Terms of Use</button></a></li>
                        <li><a href="/"><button className='secondLineBtns'>Contact Us</button></a></li>
                        <li><a href="/"><button className='secondLineBtns'>Privacy Policy</button></a></li>
                        <li><a href="/"><button className='secondLineBtns1'>Career</button></a></li>
                    </ul>
                </div>
                <div className="lastLine">
                    <p>Best viewed on Google Chrome 80+, Mozilla Firefox 75+, Safari 5.1.5+
                    <br />Copyright \00a9 2021 HeartStream.com</p>
                </div>
            </div>
            <div className="center1">
                <h6 className='text2'>Connect with us</h6>
                <div className="centerImg">
                    <ul className='alpha1'>
                        <li className='fb'><img src="fb.png" className='socialMedia' alt="" /></li>
                        <li className='insta'><img src="fb.png" className='socialMedia' alt="" /></li>
                        <li className='twitter'><img src="fb.png" className='socialMedia' alt="" /></li>
                        <li className='yt'><img src="fb.png" className='socialMedia' alt="" /></li>
                    </ul>
                </div>
            </div>


            {/* ................................................... */}
            <div className="right1">
                <h6 className='text1'>Download App from</h6>
                <div className="storeImg">
                    <ul className='alpha'>
                        <li className='imgList'><img src="google-play-badge.png" className='storeIcon' alt="" /></li>
                        <li className='imgList1'><img src="app-store-badge-128x128.png" className='storeIcon' alt="" /></li>
                    </ul>
                </div>
                <img src="480px-Eo_circle_red_arrow-up.svg.png" className='arrowIcon' alt="" />
            </div>
        </div>


    </>)

}

export default SignIn;



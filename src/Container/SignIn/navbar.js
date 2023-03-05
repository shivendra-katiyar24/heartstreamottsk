import React from 'react';
import './style.css';



const SignIn = () => {

    return (<>
        <div className="header">
            <div className="leftbox">
                <img src="favicon.ico" alt="" />
            </div>
            <div className="centerbox">
                <ul className='listing'>
                    <li className='home'><a href="/"><button id='navbarBtns'>Home</button> </a></li>
                    <li className='clannels'><a href="/"><button id='navbarBtns'>Channels</button> </a></li>
                    <li className='videos'><a href="/"><button id='navbarBtns'>Videos</button></a></li>
                    <li className='podcast'><a href="/"><button id='navbarBtns'>Podcast</button> </a></li>
                    <li className='mylist'><a href="/"><button id='navbarBtns'>My List</button> </a></li>
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
                    <li><a href=""><button id='btnContainer2'>Search</button></a></li>
                    <li><a href=""><button id='btnContainer2'>Movies</button></a></li>
                    <li><a href=""><button id='btnContainer2'>Live Stream</button></a></li>
                    <li><a href=""><button id='btnContainer2'>Schedule</button></a></li>
                    <li><a href=""><button id='btnContainer2'>Podcast</button></a></li>
                </ul>
            </div>

{/* ----------------------------------------------------------------------------------------------------------------------------- */}
            <div className="container3">
                <h3>Programs on HBO NOW</h3>
            </div>

        </div>


    </>)

}

export default SignIn;



import { useState } from 'react'
import './index.css'
import logo from "./assets/logo-black.jpg"

function Header() {
    console.log(logo)
    return( 
        <div className="header">
            <img src={logo} className="header-logo"/>
            <h1 className='header-title'>A Natural Approach to Healing</h1>
            <div className='socials'>
                <a href="https://www.facebook.com/profile.php?id=100083172138963"><button id='header-social'><i className="fa-brands fa-facebook-f"></i></button></a>
                <br></br>
                <a href='https://instagram.com/black_pine_wellness?igshid=YmMyMTA2M2Y='><button id='header-social'><i className="fa-brands fa-instagram" ></i></button></a>
            </div>   
           
        </div>
    )
}

export default Header
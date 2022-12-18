import { useState } from 'react'
import './App.css'

function Footer (){
    return(
        <div className='footer-container'>
            <p>©2022 by Black Pine Wellness.</p>
            <div className='footer-socials'>
                <a href="https://www.facebook.com/profile.php?id=100083172138963"><button><i className="fa-brands fa-facebook-f" ></i></button></a>
                <br></br>
                <a className='footer-insta' href='https://instagram.com/black_pine_wellness?igshid=YmMyMTA2M2Y='><button><i className="fa-brands fa-instagram" ></i></button></a>
            </div>    
        </div>
)
}

export default Footer


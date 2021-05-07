import './style.css'
import React, { useEffect, useState } from 'react'



const Footer = ({bgColor}) => {
    return (

        <div className={"footer" + " " + bgColor}>
            <div className='footer_text'>Copyright 2021 MEDIA CANNIBAL LLP</div>
            <div className='footer_text text_spacer'>|</div>
            <div className='footer_text'>All rights reserved.</div>
            <div className='footer_text text_spacer'>|</div>
            <div className='footer_text'>Privacy Policy</div>
        </div>

    )
}

export default Footer;

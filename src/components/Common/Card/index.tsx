import './style.css'
import React, { useEffect, useState } from 'react'
import * as up_down_arrow from '../../../assets/up_down.svg'
import { ColourObject } from 'store/ColourStore'


const Card = ({ classname, card_title, card_body, onexpand }) => {
    const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

    const [card_open, setCard_open] = useState(true)

    useEffect(() => {
        if (!Colour) {
            loadColour();
        }
    }, [])

    return (
        <div className={'dashboard_card ' + classname}>
            <div className='card_title' style={{ color: colourObj.color_1 }}>
                {card_title}
                <img className={card_open ?
                    'open_close_arrow_icon'
                    :
                    'open_close_arrow_icon rotate180'
                } src={up_down_arrow} onClick={() => {
                    setCard_open(!card_open)
                    { !card_open && onexpand }
                }} />
            </div>
            {card_open &&
                <div className='card_details_wrapper'>
                    {card_body}
                </div>
            }
        </div>
    )
}

export default Card;

import './style.css'
import React, { useEffect, useState } from 'react'
import * as up_down_arrow from '../../../assets/up_down.svg'
import { ColourObject } from 'store/ColourStore'

const McCard = ({ classname, card_body, onexpand, task_project, task_description, task_assigned_to, task_assisted_by, task_title, task_domain, task_type, time_spent, task_start }) => {
    const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

    const [card_open, setCard_open] = useState(true)

    useEffect(() => {
        if (!Colour) {
            loadColour();
        }
    }, [])

    return (
        <div className={'mc_dashboard_card ' + classname}>
            <div className="arrow_img">
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

export default McCard;

import './style.css'
import React, { useState } from 'react'
import * as up_down_arrow from '../../../assets/updownarrows.svg'


const UpDownArrow = ({ classname, onexpand }) => {
    const [up_arrow, setup_arrow] = useState(true)
    return (
        <img
            className={
                up_arrow ?
                    'open_close_arrow_icon'
                    :
                    'open_close_arrow_icon rotate180'
            }
            src={up_down_arrow}
            onClick={() => {
                setup_arrow(!up_arrow)
                onexpand()
            }}
        />
    )
}

export default UpDownArrow;

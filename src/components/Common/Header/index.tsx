import './style.css'
import React, { useEffect, useState } from 'react'
import '../../../components/app.css'
import * as logo from '../../../assets/images/logo.svg';
import * as add from '../../../assets/add.svg'
import * as back from '../../../assets/previous.svg'
import { useHistory } from 'react-router-dom';
import * as menu from '../../../assets/menu.svg'
const Header = ({ screen, Headerinfofunction, isaddform }) => {

    const history = useHistory();

    const [menuorback, setmenuorback] = useState(true)
    const [addiconvisible, setaddiconvisible] = useState(true)
    const [menu_popup, setmenu_popup] = useState(false)
    const [menuitems, setmenuitems] = useState(true)
    const [usertype, setusertype] = useState("NORMAL")
    const [loggedin, setloggedin] = useState(false)

    useEffect(() => {
        let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
        if (screen === "Home" || screen === "Login") { setmenuitems(false) }
        if (UserDetails !== null) {
            setloggedin(true)
            let usertype1 = UserDetails.user_type
            console.log(screen, usertype1)
            setusertype(usertype1)
            if (screen === "BidLog" || screen === "Admin" || screen === "UserManagement") { setaddiconvisible(true) }
            if (screen === "Booking" || screen === "BracketEntry") { setmenuorback(false) }
            if (screen === "HomeScreen" || screen === "Login") { setmenuitems(true) }
        }
    }, [])

    return (
        <>
            <div className="header">

                {menuitems ?
                    <div className='header_left'>
                        {menuorback ?
                            <div onClick={() => {
                                setmenu_popup(true)
                            }} className='header_subcontainer'>
                                <img className='header_icon' src={menu} />
                                <div className='site_navtitle'>Menu</div>
                            </div>
                            :
                            <div onClick={() => {
                                if (screen === "Booking")
                                    history.replace('/BidLog')
                                else if (screen === "BracketEntry")
                                    history.replace('/Admin')
                                else if (screen === "HomeScreen") {
                                    setmenuorback(false)
                                    Headerinfofunction(false)
                                    isaddform(false)
                                    setaddiconvisible(false)
                                }
                            }} className='header_subcontainer'>
                                <img className='header_icon' src={back} />
                                <div className='site_navtitle'>Back</div>
                            </div>
                        }
                    </div>
                    : null}

                <div className='header_center'>
                    <div className='header_center_subcontainer'>
                        <img className='header_logo' src={logo}></img>
                        <div className='site_title'>MC BDE</div>
                    </div>
                </div>

                {menuitems ?
                    <div className='header_right'>
                        {addiconvisible ?
                            <div onClick={() => {
                                // if (screen === "BidLog")
                                //     history.replace('/Booking')
                                // else if (screen === "Admin")
                                //     history.replace('/BracketEntry')
                                // else if (screen === "UserManagement") {
                                //     setmenuorback(false)
                                //     Headerinfofunction(true)
                                //     setaddiconvisible(false)
                                // }
                            }} className='header_subcontainer'>
                                <div className='site_navtitle'>Add</div>
                                <img className='header_icon' src={add} />
                            </div>
                            :
                            null
                        }
                    </div>
                    : null}
            </div>

            {menu_popup ?
                <div className="menu_popup_bg"
                    onClick={() => {
                        setmenu_popup(false)
                    }}>
                    <div className="popup_container">
                        <div className="menu_popup">
                            <div className='menu_title'
                                onClick={() => {
                                    history.replace('/HomeScreen')
                                }}
                            >Home</div>
                            <div className='menu_title'
                                onClick={() => {
                                    history.replace('/TaskList')
                                }}
                            >TaskList</div>
                            <div className='menu_title'
                                onClick={() => {
                                    history.replace('/TaskDetails')
                                }}
                            >TaskDetails</div>
                            {(usertype === "SUPERUSER") ?
                                <>  <div className='menu_title'
                                    onClick={() => {
                                        history.replace('/BidLogOverview')
                                    }}
                                >Agent Overview</div>
                                    <div className='menu_title'
                                        onClick={() => {
                                            history.replace('/BracketEntry')
                                        }}
                                    >Bracket Entry</div>
                                    <div className='menu_title'
                                        onClick={() => {
                                            history.replace('/Admin')
                                        }}
                                    >Bracket Overview</div>
                                    <div className='menu_title'
                                        onClick={() => {
                                            history.replace('/UserManagement')
                                        }}
                                    >User Management</div>
                                </>
                                :
                                null
                            }
                            {loggedin ?
                                <div className='menu_title'
                                    onClick={() => {
                                        localStorage.clear()
                                        window.location.reload()
                                    }}
                                >Logout</div>
                                : null
                            }
                            <div
                                onClick={() => {
                                    console.log("***CANCEL***")
                                    setmenu_popup(false)
                                }}
                                className='menu_popup_cancel_button'> {"<"} </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}

export default Header

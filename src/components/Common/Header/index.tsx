import './style.css'
import React, { useEffect, useState } from 'react'
import '../../../components/app.css'
import * as logofull from '../../../assets/MC_logo_with_title.svg'
import * as logo from '../../../assets/MC_logo.svg'
import * as add from '../../../assets/add.svg'
import * as back from '../../../assets/previous.svg'
import { useHistory } from 'react-router-dom';
import * as menu from '../../../assets/menu.svg'
import * as home from '../../../assets/home (2).svg'
import * as tasklist from '../../../assets/tasklist.svg'
import * as bug from '../../../assets/bug2.svg'
import * as meeting from '../../../assets/meeting.svg'
import * as tested from '../../../assets/tested.svg'
import * as team from '../../../assets/team.svg'
import * as user from '../../../assets/user_icon.svg'
import * as up_down_arrow from '../../../assets/up_down.svg'
import * as bell from '../../../assets/bell.svg'
import * as settings from '../../../assets/settings.svg'

const Header = ({ screen, Headerinfofunction, isaddform, page, page_name }) => {

    const history = useHistory();

    const [menu_open, setMenu_open] = useState(true)
    const [usertype, setusertype] = useState("NORMAL")
    const [username, setUsername] = useState("")
    const [loggedin, setloggedin] = useState(false)

    const [user_menu_open, setUser_menu_open] = useState(false)

    useEffect(() => {
        let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
        if (UserDetails !== null) {
            setloggedin(true)
            let usertype1 = UserDetails.user_type
            let username1 = UserDetails.firstname
            console.log(screen, usertype1)
            setusertype(usertype1)
            setUsername(username1)
        }
    }, [])

    return (
        <div className="main_wrapper">

            <div className="main_menu_left">

                <div className="menu_logo_wrapper">

                    <div
                        onClick={() => { history.replace('/Home') }} >
                        <img className='main_menu_logo' src={menu_open ? logofull : logo} />
                    </div>

                </div>

                <div className="menu_items_wrapper">

                    <div className='menu_title'
                        onClick={() => { history.replace('/Home') }} >
                        <img className='main_menu_item_icon' src={home} />
                        {menu_open ? <div className='main_menu_item_title'>Home</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/TaskList') }} >
                        <img className='main_menu_item_icon' src={tasklist} />
                        {menu_open ? <div className='main_menu_item_title'>Tasks</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/TaskDetails') }} >
                        <img className='main_menu_item_icon' src={menu} />
                        {menu_open ? <div className='main_menu_item_title'>TaskDetails</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/BugList') }} >
                        <img className='main_menu_item_icon' src={bug} />
                        {menu_open ? <div className='main_menu_item_title'>Bug Log</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/Meeting') }} >
                        <img className='main_menu_item_icon' src={meeting} />
                        {menu_open ? <div className='main_menu_item_title'>Meeting</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/Project') }} >
                        <img className='main_menu_item_icon' src={menu} />
                        {menu_open ? <div className='main_menu_item_title'>Project</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/TestingChecklist') }} >
                        <img className='main_menu_item_icon' src={tested} />
                        {menu_open ? <div className='main_menu_item_title'>Test Center</div> : null}
                    </div>

                    <div className='menu_title'
                        onClick={() => { history.replace('/UserManagement') }} >
                        <img className='main_menu_item_icon' src={team} />
                        {menu_open ? <div className='main_menu_item_title'>Users</div> : null}
                    </div>

                    {/* {(usertype === "SUPERUSER") ?
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
                            } */}
                    {/* {loggedin ?
                        <div className='menu_title'
                            onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }}
                        >Logout</div>
                        : null
                    } */}
                    {/* <div
                        onClick={() => {
                            console.log("***CANCEL***")
                            setmenu_popup(false)
                        }}
                        className='menu_popup_cancel_button'> x</div> */}
                </div>

                <div className="menu_items_wrapper_bottom">

                    <div onClick={() => { setMenu_open(!menu_open) }} >
                        <img className={menu_open ? 'main_menu_item_icon' : 'main_menu_item_icon rotate180'} src={back} />
                    </div>

                </div>

            </div>

            <div className={menu_open ? "page_wrapper page_shift_left" : "page_wrapper margin_left"}>

                <div className="header">

                    <div className='header_left'>
                        <div className='header_page_title'>{page_name}</div>
                    </div>

                    <div className='header_center'>
                        <div className='header_center_subcontainer'>
                        </div>
                    </div>

                    <div className='header_right'>

                        <div
                            className='header_subcontainer'>
                            <img className='header_icon' src={bell} />
                            <div className='header_user_wrapper' onClick={() => { setUser_menu_open(!user_menu_open) }}>
                                <img className='user_icon' src={user} />
                                <div className='header_title'>{username}</div>
                                <img className={user_menu_open ? 'user_menu_arrow_icon' : 'user_menu_arrow_icon rotate180'} src={up_down_arrow} />

                                {user_menu_open

                                    ? <div className='user_menu'>

                                        <div className='user_menu_item'>
                                            <img className='header_icon' src={user} />
                                            <div className='header_title'>Profile</div>
                                        </div>
                                        <div className='user_menu_item'>
                                            <img className='header_icon' src={back} />
                                            <div className='header_title'>misc</div>
                                        </div>
                                        <div className='user_menu_item'>
                                            <img className='header_icon' src={settings} />
                                            <div className='header_title'>Settings</div>
                                        </div>
                                        <div className='user_menu_item'
                                        onClick={() => {
                                            localStorage.clear()
                                            window.location.reload()
                                            history.replace('/Login')
                                        }}>
                                            <img className='header_icon' src={back} />
                                            <div className='header_title'>Logout</div>
                                        </div>

                                    </div>

                                    : null
                                }

                            </div>
                        </div>

                    </div>

                </div>

                {page}

            </div>

        </div>
    )
}

export default Header

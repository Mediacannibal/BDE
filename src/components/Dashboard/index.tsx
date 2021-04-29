import './style.css'
import React, { useEffect, useState } from 'react'
import '../../components/app.css'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


import * as logofull from '../../assets/MC_logo_with_title.svg'
import * as logo from '../../assets/MC_logo.svg'
import * as defaultusericon from '../../assets/user_icon.svg'
import * as back from '../../assets/previous.svg'
import * as menu from '../../assets/menu.svg'
import * as home from '../../assets/home (2).svg'
import * as tasklist from '../../assets/tasklist.svg'
import * as bug from '../../assets/bug.svg'
import * as meeting from '../../assets/meeting.svg'
import * as tested from '../../assets/tested.svg'
import * as team from '../../assets/team.svg'
import * as up_down_arrow from '../../assets/up_down.svg'
import * as bell from '../../assets/bell.svg'
import * as chat from '../../assets/chat.svg'
import * as settings from '../../assets/settings.svg'
import * as api from '../../assets/api.svg'

import UserSettings from 'components/UserMenuItems/UserSettings';


const Dashboard = ({ screen, screen_name, header_options }, props: any) => {

    const history = useHistory();

    const [menu_open, setMenu_open] = useState(true)
    const [usertype, setusertype] = useState("NORMAL")
    const [username, setUsername] = useState("")
    const [profile_picture, setprofile_picture] = useState("")

    const [settings_popup, setsettings_popup] = useState(false)

    const [user_menu_open, setUser_menu_open] = useState(false)
    const [user_notification, setuser_notification] = useState(false)

    const location = useLocation();

    useEffect(() => {

        console.log("screenlocation: ", location.pathname);

        let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
        if (UserDetails !== null) {
            let usertype = UserDetails.user_type
            let username = UserDetails.firstname
            let profile_picture = UserDetails.photo_url
            console.log(screen, usertype)
            setusertype(usertype)
            setUsername(username)
            setprofile_picture(((profile_picture === undefined)
                || (profile_picture === null)) ? defaultusericon : profile_picture)
            console.log("someidentifier", profile_picture)
        }
    }, [])

    const menu_items = [
        { path: '/Home', icon: home, title: 'Home' },
        { path: '/Project', icon: menu, title: 'Project' },
        { path: '/TaskList', icon: tasklist, title: 'Tasks' },
        { path: '/TestingChecklist', icon: tested, title: 'Test Center' },
        { path: '/BugList', icon: bug, title: 'Bug Log' },
        { path: '/Meeting', icon: meeting, title: 'Meeting' },
        { path: '/UserManagement', icon: team, title: 'Users' },
        { path: '/ApiRecords', icon: team, title: 'Api Records' },
        { path: '/report', icon: team, title: 'Analytics Report' },
    ]

    return (
        <div className="main_wrapper">
            {settings_popup ?
                <UserSettings
                    setPopup={() => {
                        setsettings_popup(false)
                    }}
                />
                :
                null
            }
            <div className="main_menu_left">

                <div className="menu_logo_wrapper">

                    <div
                        onClick={() => { history.replace('/') }} >
                        <img className='main_menu_logo' src={menu_open ? logofull : logo} />
                    </div>

                </div>

                <div className="menu_items_wrapper">

                    {menu_items.map((data: any) =>
                        <div className={(data.path === screen_name) ? 'menu_title active' : 'menu_title'}
                            onClick={() => { history.replace(data.path) }} >
                            <img className='main_menu_item_icon' src={data.icon} />
                            {menu_open ? <div className='main_menu_item_title'>{data.title}</div> : null}
                        </div>
                    )}

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
                        <div className='header_page_title'>{header_options}</div>
                    </div>

                    <div className='header_center'>
                        <div className='header_center_subcontainer'>
                        </div>
                    </div>

                    <div className='header_right'>

                        <div
                            className='header_subcontainer'>
                            <img className='header_icon' src={chat} onClick={() => {
                                history.push('/TaskDetails')
                            }} />
                            <div>
                                <img className='header_icon' src={bell} onClick={() => {
                                    setuser_notification(!user_notification)
                                }} />
                            </div>
                            <div className='header_user_wrapper' onClick={() => { setUser_menu_open(!user_menu_open) }}>
                                <img className='user_icon' src={profile_picture} />
                                <div className='header_title'>{username}</div>
                                <img className={user_menu_open ? 'open_close_arrow_icon' : 'open_close_arrow_icon rotate180'} src={up_down_arrow} />

                                {user_notification &&
                                    <div className="user_notification_menu">
                                        <div className="user_notification_header_container">
                                            <div className="user_notification_header">NOTIFICATIONS</div>
                                            <img className='header_icon' src={settings} />
                                        </div>

                                        <div className="user_notification_title_container">

                                            <div className="user_notification_title_subcontainer1">
                                                <img className='header_icon' src={settings} />
                                                <div className="user_notification_title">Media Cannibal</div>
                                            </div>

                                            <div className="user_notification_title_subcontainer2">

                                                <div className="user_notification_notify">
                                                    <img className='header_icon' src={settings} />
                                                    <div>
                                                        <div className="user_notification_title_text">Call Them</div>
                                                        <div>miss call</div>
                                                    </div>
                                                    <div>2 hours ago</div>
                                                </div>
                                                <div className="user_band"></div>
                                                <div className="user_notification_notify">
                                                    <img className='header_icon' src={settings} />
                                                    <div>
                                                        <div className="user_notification_title_text">What's up</div>
                                                        <div>hello</div>
                                                    </div>
                                                    <div>6 hours ago</div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="user_notification_title_container">

                                            <div className="user_notification_title_subcontainer1">
                                                <div>***</div>
                                                <div className="user_notification_title">Media Cannibal</div>
                                            </div>

                                            <div className="user_notification_title_subcontainer2">

                                                <div className="user_notification_notify">
                                                    <div>...</div>
                                                    <div>
                                                        <div className="user_notification_title_text">Call Them</div>
                                                        <div>miss call</div>
                                                    </div>
                                                    <div>2 hours ago</div>
                                                </div>
                                                <div className="user_band"></div>
                                                <div className="user_notification_notify">
                                                    <div>!!!</div>
                                                    <div>
                                                        <div className="user_notification_title_text">What's up</div>
                                                        <div>hello</div>
                                                    </div>
                                                    <div>6 hours ago</div>
                                                </div>

                                            </div>

                                        </div>

                                        <div>
                                            <div className="user_notification_footer"
                                                onClick={() => { history.replace('/Notifications') }}
                                            >ALL NOTIFICATIONS</div>
                                        </div>
                                    </div>
                                }

                                {user_menu_open

                                    ? <div className='user_menu'>

                                        <div className='user_menu_item' onClick={() => {
                                            history.push("/UserProfile")
                                        }}>
                                            <img className='header_icon' src={profile_picture} />
                                            <div className='header_title'>Profile</div>
                                        </div>
                                        <div className='user_menu_item'>
                                            <img className='header_icon' src={back} />
                                            <div className='header_title'>misc</div>
                                        </div>
                                        <div className='user_menu_item'>
                                            <div className="header_settings"
                                                onClick={() => { setsettings_popup(true) }}>
                                                <img className='header_icon' src={settings} />
                                                <div className='header_title'>Settings</div>
                                            </div>
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

                {screen}

            </div>

        </div>
    )
}

export default Dashboard

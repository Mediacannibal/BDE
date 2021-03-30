import './style.css'
import React, { useEffect, useState } from 'react'
import '../../components/app.css'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import HomeScreen from '../HomeScreen';
import ProjectScreen from '../ProjectScreen';
import TaskList from '../TaskList';
import TestingChecklist from '../Testing Checklist';
import BugList from '../BugList';
import MeetingScreen from '../MeetingScreen';
import UserManagement from '../UserManagement';


import * as logofull from '../../assets/MC_logo_with_title.svg'
import * as logo from '../../assets/MC_logo.svg'
import * as add from '../../assets/add.svg'
import * as back from '../../assets/previous.svg'

import * as menu from '../../assets/menu.svg'
import * as home from '../../assets/home (2).svg'
import * as tasklist from '../../assets/tasklist.svg'
import * as bug from '../../assets/bug.svg'
import * as meeting from '../../assets/meeting.svg'
import * as tested from '../../assets/tested.svg'
import * as team from '../../assets/team.svg'
import * as user from '../../assets/user_icon.svg'
import * as up_down_arrow from '../../assets/up_down.svg'
import * as bell from '../../assets/bell.svg'
import * as chat from '../../assets/chat.svg'
import * as settings from '../../assets/settings.svg'

const Dashboard = ({ screen, screen_name, header_options }) => {

    const history = useHistory();

    const [menu_open, setMenu_open] = useState(true)
    const [usertype, setusertype] = useState("NORMAL")
    const [username, setUsername] = useState("")

    const [user_menu_open, setUser_menu_open] = useState(false)

    const location = useLocation();

    useEffect(() => {

        console.log("screenlocation: ", location.pathname);

        let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
        if (UserDetails !== null) {
            let usertype1 = UserDetails.user_type
            let username1 = UserDetails.firstname
            console.log(screen, usertype1)
            setusertype(usertype1)
            setUsername(username1)
        }
    }, [])

    const menu_items = [
        { path: '/Home', icon: home, title: 'Home' },
        { path: '/Project', icon: menu, title: 'Project' },
        { path: '/TaskList', icon: tasklist, title: 'Tasks' },
        { path: '/TestingChecklist', icon: tested, title: 'Test Center' },
        { path: '/BugList', icon: bug, title: 'Bug Log' },
        { path: '/Meeting', icon: meeting, title: 'Meeting' },
        { path: '/UserManagement', icon: team, title: 'Users' }]

    const screens = [
        { path: '/', component: HomeScreen, header: header_options },
        { path: '/Project', component: ProjectScreen, header: header_options },
        { path: '/TaskList', component: TaskList, header: header_options },
        { path: '/TestingChecklist', component: TestingChecklist, header: header_options },
        { path: '/BugList', component: BugList, header: header_options },
        { path: '/Meeting', component: MeetingScreen, header: header_options },
        { path: '/UserManagement', component: UserManagement, header: header_options },]

    return (
        <div className="main_wrapper">

            <div className="main_menu_left">

                <div className="menu_logo_wrapper">

                    <div
                        onClick={() => { history.replace('/') }} >
                        <img className='main_menu_logo' src={menu_open ? logofull : logo} />
                    </div>

                </div>

                <div className="menu_items_wrapper">

                    {menu_items.map((data: any) =>
                        <div className='menu_title'
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
                        <div className='header_page_title'>{screen_name}{header_options}</div>
                    </div>

                    <div className='header_center'>
                        <div className='header_center_subcontainer'>
                        </div>
                    </div>

                    <div className='header_right'>

                        <div
                            className='header_subcontainer'>
                            <img className='header_icon' src={chat} />
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

                {screen}

            </div>

        </div>
    )
}

export default Dashboard

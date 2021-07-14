import './style.css'
import React, { useEffect, useState } from 'react'
import '../../components/app.css'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

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
import * as pause from '../../assets/pause.svg'
import * as stop from '../../assets/stop.svg'
import * as play from '../../assets/play.svg'

import UserSettings from 'components/UserMenuItems/UserSettings'
import { getMainTask, getTasktimelog } from 'utils/api'
import { useAuth } from 'store/authStore'
import AddEditTaskTimeLog from 'components/Forms/AddEditTaskTimeLog'
import { ColourObject } from 'store/ColourStore'
import UserSetup from 'components/Forms/UserSetup'
import { useuserDetails } from 'store/userDetailsStore'

const Dashboard = ({ screen, screen_name, header_options }, props: any) => {
  const history = useHistory()
  const { auth } = useAuth()
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { userDetail, loaduserDetail } = useuserDetails();

  const [menu_open, setMenu_open] = useState(true)
  const [usertype, setusertype] = useState('NORMAL')
  const [username, setUsername] = useState('')
  const [profile_picture, setprofile_picture] = useState('')
  const [addEditTaskTimeLog_popup, setaddEditTaskTimeLog_popup] = useState(false)
  const [seleted_taskid, setseleted_taskid] = useState('')
  const [projecttaskTitle, setprojecttaskTitle] = useState(false)
  const [current_task, setcurrent_task] = useState(false)

  const [task_Ids, settask_Ids] = useState('')

  const [settings_popup, setsettings_popup] = useState(false)
  const [taskItems, settaskItems] = useState([])

  const [startorpausetask, setstartorpausetask] = useState(false)
  const [startorpausetaskid, setstartorpausetaskid] = useState()

  const [user_menu_open, setUser_menu_open] = useState(false)
  const [user_notification, setuser_notification] = useState(false)

  const [task, settask] = useState('')
  const [users, setusers] = useState('')
  const [parent_child, setparent_child] = useState('')
  const [project, setproject] = useState('1')
  const [task_priority, settask_priority] = useState('')
  const [task_domain, settask_domain] = useState('')
  const [isuser_active, setisuser_active] = useState(false)

  const location = useLocation()

  useEffect(() => {
    // console.log("screenlocation: ", location.pathname);

    let UserDetails = JSON.parse(String(localStorage.getItem('UserDetails')))
    if (UserDetails !== null) {
      let usertype = UserDetails.user_type
      let username = UserDetails.firstname
      let profile_picture = UserDetails.photo_url
      // console.log(screen, usertype)
      setusertype(usertype)
      setUsername(username)
      setprofile_picture(
        profile_picture === undefined || profile_picture === null
          ? defaultusericon
          : profile_picture
      )
      setisuser_active(UserDetails.is_active)
      // console.log("someidentifier", profile_picture)
    }

    if (!Colour) {
      loadColour();
    }

    mainTask()

    taskTimeLog()

  }, [])

  const mainTask = () => {
    // console.log("SELETED TASKTYPE: ", task);
    getMainTask(
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          settaskItems(data.data.results.Assigned)
        } else {
          console.log('error ' + JSON.stringify(data))
          console.log('error ' + JSON.stringify(errorresponse))
        }
      },
      auth,
      // task,
      // users,
      // parent_child,
      // task_domain,
      // task_priority,
      // project
    )
  }

  const taskTimeLog = () => {
    getTasktimelog(
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          // console.log("Current Task: ", data.data.results[0])
          setcurrent_task(data.data.results[0])
          setstartorpausetask(false)
        } else {
          console.log('error ' + JSON.stringify(data))
          console.log('error ' + JSON.stringify(errorresponse))
        }
      },
      auth,
      task_Ids,
      users
    )
  }

  const menu_items = [
    { path: '/Home', icon: home, title: 'Home' },
    { path: '/Project', icon: menu, title: 'Project' },
    { path: '/TaskList', icon: tasklist, title: 'Tasks' },
    { path: '/TaskTimeLog', icon: tasklist, title: 'Task Time Log' },
    { path: '/TestingChecklist', icon: tested, title: 'Test Center' },
    { path: '/BugList', icon: bug, title: 'Bug Log' },
    { path: '/Meeting', icon: meeting, title: 'Meeting' },
    { path: '/UserManagement', icon: team, title: 'Users' },
    { path: '/ApiRecords', icon: team, title: 'Api Records' },
    { path: '/report', icon: team, title: 'Analytics Report' },
    { path: '/AppGantt', icon: team, title: 'Gantt Chart' },
  ]

  return (
    <div className='main_wrapper'>
      {!isuser_active && (
        <UserSetup
          setPopup={() => {
            setsettings_popup(false)
          }}
        />
      )}

      {settings_popup && (
        <UserSettings
          setPopup={() => {
            setsettings_popup(false)
          }}
        />
      )}

      {addEditTaskTimeLog_popup && (
        <AddEditTaskTimeLog
          setPopup={() => {
            setaddEditTaskTimeLog_popup(false)
          }}
          taskid={startorpausetaskid}
          startorpausetask={startorpausetask}
        />
      )}

      <div className='main_menu_left' style={{ backgroundColor: colourObj.color_6 }}>
        <div className='menu_logo_wrapper'>
          <div
            onClick={() => {
              history.replace('/')
            }}
          >
            <img className='main_menu_logo' src={menu_open ? logofull : logo} />
          </div>
        </div>

        <div className='menu_items_wrapper'>
          {menu_items.map((data: any) => (
            <div
              className={
                data.path === screen_name ? 'menu_title active' : 'menu_title'
              }
              // style={{ backgroundColor: colourObj.color_5 }}
              onClick={() => {
                history.replace(data.path)
              }}
            >
              <img className='main_menu_item_icon' src={data.icon} />
              {menu_open ? (
                <div className='main_menu_item_title' style={{ color: colourObj.color_1 }}>
                  {data.title}</div>
              ) : null}
            </div>
          ))}
        </div>

        <div className='menu_items_wrapper_bottom'>
          <div
            onClick={() => {
              setMenu_open(!menu_open)
            }}
          >
            <img
              className={
                menu_open
                  ? 'main_menu_item_icon'
                  : 'main_menu_item_icon rotate180'
              }
              src={back}
            />
          </div>
        </div>
      </div>

      <div
        className={
          menu_open
            ? 'page_wrapper page_shift_left'
            : 'page_wrapper margin_left'
        }
      >
        <div className='header' style={{ backgroundColor: colourObj.color_6 }}>
          <div className='header_left'>
            <div className='header_page_title' style={{ color: colourObj.color_1 }}>{header_options}</div>
          </div>

          <div className='header_center'>
            <div className='header_center_subcontainer'>
              <div className='header_title  active_task_wrapper'
                style={{ color: colourObj.color_1 }}>
                {'Active Task: '}
                <div
                  onClick={() => {
                    setprojecttaskTitle(!projecttaskTitle)
                  }}
                >
                  <img
                    className={
                      projecttaskTitle
                        ? 'open_close_arrow_icon'
                        : 'open_close_arrow_icon rotate180'
                    }
                    src={up_down_arrow}
                  />
                </div>
              </div>
              {current_task !== undefined && (
                <div className="taskName_wrapper">

                  <div className="taskName">
                    {current_task.task_name}
                  </div>

                  {startorpausetask ? (
                    <img
                      onClick={() => {
                        setstartorpausetaskid(current_task.task_ref)
                        setaddEditTaskTimeLog_popup(true)
                      }}
                      className='header_icon'
                      src={play}
                    />
                  ) : (
                    <img
                      onClick={() => {
                        setstartorpausetaskid(current_task.task_ref)
                        setaddEditTaskTimeLog_popup(true)
                      }}
                      className='header_icon'
                      src={pause}
                    />
                  )}
                  <img className='header_icon' src={stop} />

                </div>
              )}


            </div>
          </div>

          {projecttaskTitle && (
            <div className='projecttask_container'>
              <div className='projecttask_wrapper' style={{ backgroundColor: colourObj.color_12 }}>
                {taskItems.map((element: any, key: any) => {
                  return (
                    <div
                      className='projecttask_subwrapper'
                      onClick={() => {
                        setstartorpausetaskid(element.id)
                        setstartorpausetask(true)
                        // setaddEditTaskTimeLog_popup(true)
                      }}
                    >
                      <div className='header_title' style={{ color: colourObj.color_1 }}>
                        {element.project_ref + ': ' + element.title}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className='header_right'>
            <div className='header_subcontainer'>
              <img
                className='header_icon'
                src={chat}
                onClick={() => {
                  history.push('/TaskDetails')
                }}
              />
              <img
                className='header_icon'
                src={bell}
                onClick={() => {
                  setuser_notification(!user_notification)
                }}
              />
            </div>
            <div
              className='header_user_wrapper'
              onClick={() => {
                setUser_menu_open(!user_menu_open)
              }}
            >
              <img className='user_icon' src={profile_picture} />
              <div className='header_title' style={{ color: colourObj.color_1 }}>
                {username}</div>
              <img
                className={
                  user_menu_open
                    ? 'open_close_arrow_icon'
                    : 'open_close_arrow_icon rotate180'
                }
                src={up_down_arrow}
              />
            </div>
          </div>

          {user_notification && (
            <div className='user_notification_menu' style={{ color: colourObj.color_12 }}>
              <div className='user_notification_header_container'>
                <div className='user_notification_header' style={{ color: colourObj.color_1 }}>NOTIFICATIONS</div>
                <img className='header_icon' src={settings} />
              </div>

              <div className='user_notification_title_container'>
                <div className='user_notification_title_subcontainer1' style={{ backgroundColor: colourObj.color_5 }}>
                  <img className='header_icon' src={settings} />
                  <div className='user_notification_title' style={{ color: colourObj.color_1 }}>Media Cannibal</div>
                </div>

                <div className='user_notification_title_subcontainer2'>
                  <div className='user_notification_notify' style={{ backgroundColor: colourObj.color_12 }}>
                    <img className='header_icon' src={settings} />
                    <div>
                      <div className='user_notification_title_text' style={{ color: colourObj.color_1 }}>
                        Call Them
                      </div>
                      <div>miss call</div>
                    </div>
                    <div>2 hours ago</div>
                  </div>
                  <div className='user_band' style={{ color: colourObj.color_10 }}></div>
                  <div className='user_notification_notify' style={{ backgroundColor: colourObj.color_12 }}>
                    <img className='header_icon' src={settings} />
                    <div>
                      <div className='user_notification_title_text' style={{ color: colourObj.color_1 }}>
                        What's up
                      </div>
                      <div>hello</div>
                    </div>
                    <div>6 hours ago</div>
                  </div>
                </div>
              </div>

              <div className='user_notification_title_container'>
                <div className='user_notification_title_subcontainer1' style={{ backgroundColor: colourObj.color_5 }}>
                  <div>***</div>
                  <div className='user_notification_title' style={{ color: colourObj.color_1 }}>Media Cannibal</div>
                </div>

                <div className='user_notification_title_subcontainer2'>
                  <div className='user_notification_notify'>
                    <div>...</div>
                    <div>
                      <div className='user_notification_title_text' style={{ color: colourObj.color_1 }}>
                        Call Them
                      </div>
                      <div>miss call</div>
                    </div>
                    <div>2 hours ago</div>
                  </div>
                  <div className='user_band' style={{ backgroundColor: colourObj.color_10 }}></div>
                  <div className='user_notification_notify'>
                    <div>!!!</div>
                    <div>
                      <div className='user_notification_title_text' style={{ color: colourObj.color_1 }}>
                        What's up
                      </div>
                      <div>hello</div>
                    </div>
                    <div>6 hours ago</div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className='user_notification_footer'
                  style={{
                    color: colourObj.color_1,
                    backgroundColor: colourObj.color_10
                  }}
                  onClick={() => {
                    history.replace('/Notifications')
                  }}
                >
                  ALL NOTIFICATIONS
                </div>
              </div>
            </div>
          )}

          {user_menu_open ? (
            <div className='user_menu'
              style={{
                backgroundColor: colourObj.color_12
              }}>
              <div
                className='user_menu_item'
                onClick={() => {
                  history.push('/UserProfile')
                }}
              >
                <img className='header_icon' src={profile_picture} />
                <div className='header_title' style={{ color: colourObj.color_1 }}>Profile</div>
              </div>
              <div className='user_menu_item'>
                <img className='header_icon' src={back} />
                <div className='header_title' style={{ color: colourObj.color_1 }}>misc</div>
              </div>
              <div className='user_menu_item'>
                <div
                  className='header_settings'
                  onClick={() => {
                    setsettings_popup(true)
                  }}
                >
                  <img className='header_icon' src={settings} />
                  <div className='header_title' style={{ color: colourObj.color_1 }}>Settings</div>
                </div>
              </div>
              <div
                className='user_menu_item'
                onClick={() => {
                  localStorage.clear()
                  sessionStorage.clear()
                  // window.location.reload()
                  history.replace('/')
                }}
              >
                <img className='header_icon' src={back} />
                <div className='header_title' style={{ color: colourObj.color_1 }}>Logout</div>
              </div>
            </div>
          ) : null}
        </div>

        {screen}
      </div>
    </div >
  )
}

export default Dashboard

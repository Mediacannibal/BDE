import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import * as sendIcon from '../../assets/send.svg'
import * as AttachmentImg from '../../assets/attach-paperclip-symbol.png'
import { ProgressBar } from 'components/Common/Spinner';
import SimpleEditor from 'react-simple-image-editor';
import { useAuth } from 'store/authStore';
import Footer from '../Common/Footer';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { userInfo } from 'os';
const chatSocket: WebSocket = new WebSocket("wss://apimccbdechat.mediacannibal.com/ws/chat/roomName/");

const TaskDetails = () => {
  const { auth } = useAuth();

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [tasknameinput, settasknameinput] = useState(false)
  const [taskpriorityinput, settaskpriorityinput] = useState(false)
  const [taskDueinput, settaskDueinput] = useState(false)
  const [taskasigneeinput, settaskasigneeinput] = useState(false)
  const [taskDescriptioninput, settaskDescriptioninput] = useState(false)
  const [taskHistoryinput, settaskHistoryinput] = useState(false)

  const [chat_send, setchat_send] = useState('')
  const [chat_receive, setchat_receive] = useState('')
  const [userinfo, setuserinfo] = useState('')
  const [chat_log_list, setchat_log_list] = useState([])

  const addtolist = (message: any) => {
    let a = chat_log_list
    a.push(JSON.parse(String(message)))
    setchat_log_list(a.reverse())
  }
  useEffect(() => {
    chatSocket.onmessage = async (e) => {
      var data = JSON.parse(e.data);
      var message = data['message'];
      await addtolist(message)
      setchat_receive(message)
    };
    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      setspinner(false)
      setuserinfo(UserDetails)
      // console.log(screen, user_id, usertype1)
      setusertype(UserDetails.user_type)
      setuserID(UserDetails.user_id)
    }
  }, [])

  const messageSend = () => {
    let message = chat_send
    let time = new Date()
    chatSocket.send(JSON.stringify({
      'message': JSON.stringify({
        "name": userinfo.firstname + userinfo.lastname,
        "message_text": message,
        "time": String(time.toLocaleString()),
      })
    }));
    console.log(message);
    setchat_send("")
  }

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      messageSend()
    }
  }

  return (
    <div className="main">
      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <>
            <div className="MAINsomwethin">

              <div className="task_details">

                <div className="column">
                  <div className="subtitle">Task:{tasknameinput ? <input></input> : <div>Add image</div>} </div>
                </div>

                <div className="column">
                  <div className="subtitle">Priority: {taskpriorityinput ? <input></input> : <div>Add Table</div>} </div>
                  <div className="subtitle">Due Date:{taskDueinput ? <input></input> : <div>15-03-2021</div>}</div>
                  <div className="subtitle">Assignee:{taskasigneeinput ? <input></input> : <div>Kiran</div>}</div>

                </div>

              </div>

              <div className="tasklog">
                <div className="subtitle">Descrition:{taskDescriptioninput ? <input></input> : <div>Some description</div>}</div>
                <div className="subtitle">History:{taskHistoryinput ? <input></input> : <div>Some history</div>}</div>
              </div>

              <div className="chat_container">
                <div className="subtitle">CHAT</div>

                <div className="chatbox">
                  {
                    chat_log_list.map((object, index) => {
                      return (
                        (String(userinfo.firstname + userinfo.lastname) === object.name) ?
                          <div className="message mymessage">
                            {
                              object.name + "\n" + object.message_text + "\n" + object.time
                            }
                          </div>
                          :
                          <div className="message recievedmessage">
                            {
                              object.name + "\n" + object.message_text + "\n" + object.time
                            }
                          </div>

                      )
                    })
                  }
                </div>

                <div className="bottom_container">
                  <div className="icon_container" onClick={() => { }}>
                    <img className="iconimg" src={AttachmentImg} />
                  </div>
                  <input className="message_box"
                    placeholder="Type a message"
                    type="text"
                    onChange={(e) => { setchat_send(e.target.value) }}
                    value={chat_send}
                    onKeyPress={handleKeyPress}
                  />
                  <div className="icon_container" onClick={(e) => { messageSend() }}>
                    <img className="iconimg" src={sendIcon} />
                  </div>
                </div>

                <div>
                  {/* <Launcher
                agentProfile={{
                  teamName: 'react-chat-window',
                  imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                // onMessageWasSent={this._onMessageWasSent.bind(this)}
                // messageList={this.state.messageList}
                showEmoji
              /> */}
                </div>
              </div>
            </div>
          </>
        }
      </div>
      <Footer />
    </div >
  )
}

export default TaskDetails;

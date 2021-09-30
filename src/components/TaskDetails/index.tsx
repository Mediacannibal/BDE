import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Camera } from "react-camera-pro";
import '../../components/app.css'
import * as sendIcon from '../../assets/send.svg'
import * as AttachmentImg from '../../assets/attach-paperclip-symbol.png'
import * as document from '../../assets/document.svg'
import * as gallery from '../../assets/gallery.svg'
import * as cameraicon from '../../assets/camera.svg'
import * as download from '../../assets/download.svg'
import { ColourObject } from 'store/ColourStore'
import * as defaultusericon from '../../assets/user_icon.svg'
import * as search from '../../assets/search.png'

import { ProgressBar } from 'components/Common/Spinner';
import SimpleEditor from 'react-simple-image-editor';
import { useAuth } from 'store/authStore';
import { useUserChatList } from 'store/activeChatThread'
import Footer from '../Common/Footer';
import { CommonAPi, fileupload } from 'utils/api';
import McInput from 'components/Common/McInput';
import { useuserDetails } from 'store/userDetailsStore';

const TaskDetails = () => {
  const { auth } = useAuth();
  // const { loaduserChatDetail, userChat, addtolist } = useUserChatList();
  const [userChat, setuserChat] = useState([])
  const history = useHistory();
  const { id } = useParams();
  const { userDetail, loaduserDetail } = useuserDetails();

  const inputFile = useRef(true);
  const camera = useRef(null);
  const [image, setImage] = useState();
  const [iscamera, setiscamera] = useState(false)
  const [imgPreview, setimgPreview] = useState(false)
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [spinner, setspinner] = useState(true)

  const [title, settitle] = useState('')

  const [firstname, setfirstname] = useState('')
  const [secondname, setsecondname] = useState('')
  const [profile_picture, setprofile_picture] = useState('')

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [Attachments, setAttachments] = useState(false)
  const [photoMessagesend, setphotoMessagesend] = useState(false)

  const [project_Task_Data, setproject_Task_Data] = useState(null)

  // const [chat_id, setchat_id] = useState("")
  const [chat_send, setchat_send] = useState('')
  const [userinfo, setuserinfo] = useState('')
  const [photo_send, setphoto_send] = useState('')
  const [dataUri, setDataUri] = useState('');

  let location = useLocation();

  const [chatSocket] = useState(new WebSocket(`wss://apimccbdechat.mediacannibal.co/ws/chat/${id}/`))
  const loaduserChatDetail = (auth: any, id: any) => {
    CommonAPi(
      {
        path: `chat/list/?chat_id=${id}`,
        method: 'get',
        auth: auth ? auth : false,
      },
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          // console.log('data: ', data.data.results)
          let a = data.data.results
          let x = a.sort(function (a: any, b: any) {
            return new Date(b.time) - new Date(a.time)
          })

          setuserChat(x)
        } else {
          console.log('error ' + JSON.stringify(data))
          console.log('error ' + JSON.stringify(errorresponse))
        }
      }
    )
  }
  useEffect(() => {
    chatSocket.onmessage = async (e) => {
      var data = JSON.parse(e.data);
      var message = data['message'];
      await addtolist(message)
      // loaduserChatDetail(auth, id);
    };

    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      let userID = UserDetails.user_id
      let firstname = UserDetails.firstname
      let secondname = UserDetails.secondname
      let profile_picture = UserDetails.photo_url

      setspinner(false)
      setuserinfo(UserDetails)

      setuserID(userID)
      setusertype(UserDetails.user_type)
      setfirstname(firstname)
      setsecondname(secondname)
      setprofile_picture(
        profile_picture === undefined || profile_picture === null
          ? defaultusericon
          : profile_picture
      )
    }

    if (!Colour) {
      loadColour();
    }

    if (!userDetail) {
      loaduserDetail();
    }
    // getchathistorybyid(id)  
    setproject_Task_Data(location.state ? location.state : null)

    loaduserChatDetail(auth, id)

  }, [])

  const addtolist = (message: any) => {
    setuserChat((oldarr: any) => {
      return [JSON.parse(message), ...oldarr]
      // .sort(function (a: any, b: any) {
      //   return new Date(b.time) - new Date(a.time)
      // })
    })
  }

  const messageSend = () => {
    let user_id = userDetail.user_id
    let message = chat_send
    let photo = photo_send
    let time = new Date()
    let a = JSON.stringify({
      'message': JSON.stringify({
        "user_id": user_id,
        "name": userDetail.firstname + userDetail.lastname,
        "time": String(time.toLocaleString()),
        "message_type": "text",
        "content": message,
        "photo": photo,
        "chat_id": id
      })
    })
    chatSocket.send(a)
    setchat_send("")
  }


  const photoSend = () => {
    let message = chat_send
    let photo = photo_send
    let time = new Date()
    let a = JSON.stringify({
      'message': JSON.stringify({
        "user_id": user_id,
        "name": userDetail.firstname + userDetail.lastname,
        "time": String(time.toLocaleString()),
        "message_type": "image",
        "content": message,
        "photo": photo,
        "chat_id": id
      })
    })
    chatSocket.send(a)
    setchat_send("")
  }

  const getfilename = (url: any) => {
    let a = "filename";
    let temp = String(url).split('/')
    a = temp[temp.length - 1]
    return a
  }

  const renderchat = (object: any, index: any) => {
    return (
      ((userDetail) && String(userDetail.user_id) === String(object.user_id)) ?

        <div className="chat_mymessage_container">
          <div className="message mymessage">
            <div className="chat_user_name">{object.name}</div>
            {object.message_type === "text" ?
              <>
                <div className="chat_text_message">
                  {object.content}
                </div>
              </>
              :
              <>
                {
                  object.message_type === "image" ?
                    <>
                      <img className='activity_selectedimage' src={object.content} />
                      <img className='activity_selectedimage' src={object.photo} />
                      <div className="chat_doc_container">
                        <div className='chat_file_name'>{getfilename(object.content)}</div>
                        <img className='chat_doc_icon' src={download} onClick={() => {
                          window.open(object.content)
                        }} />
                      </div>
                    </>
                    :
                    <div className="chat_doc_upload recievedmessage">
                      <div className="chat_doc_container">
                        <img className='chat_doc_icon' src={document} />
                        <div className='chat_file_name'>{getfilename(object.content)}</div>
                      </div>
                      <img className='chat_doc_icon' src={download} onClick={() => {
                        window.open(object.content)
                      }} />
                    </div>
                }
              </>
            }
          </div>
          <div className="chat_mymessage_time">{object.time}</div>
        </div >
        :
        <div className="chat_recievedmessage_container">
          <div className="message recievedmessage">
            <div className="chat_user_name">{object.name}</div>
            {object.message_type === "text" ?
              <div className="chat_text_message">
                {object.content}
              </div>
              :
              <>
                {
                  object.message_type === "image" ?
                    <>
                      <img className='activity_selectedimage' src={object.content} />
                      <div className="chat_doc_container">
                        <div className='chat_file_name'>{getfilename(object.content)}</div>
                        <img className='chat_doc_icon' src={download} onClick={() => {
                          window.open(object.content);
                        }} />
                      </div>
                    </>
                    :
                    <div className="chat_doc_upload" >
                      <div className="chat_doc_container">
                        <img className='chat_doc_icon' src={document} />
                        <div className='chat_file_name'>{getfilename(object.content)}</div>
                      </div>
                      <img className='chat_doc_icon' src={download} onClick={() => {
                        window.open(object.content)
                      }} />
                    </div>
                }
              </>
            }
          </div>
          <div className="chat_recievedmessage_time">{object.time}</div>
        </div >
    )
  }

  const docSend = (type: any, url: any) => {
    let time = new Date()
    let a = (JSON.stringify({
      'message': JSON.stringify({
        "user_id": user_id,
        "name": userDetail.firstname + userDetail.lastname,
        "time": String(time.toLocaleString()),
        "message_type": type,
        "content": url,
        "chat_id": id
      })
    }));
    chatSocket.send(a)
    setchat_send("")
  }

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      messageSend()
    }
  }

  const onClickDocs = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const _onChangeHandler = (data: any) => {
    let formdata = new FormData()
    let filedata = data.target.files[0]

    formdata.append("file", filedata)
    fileupload(Callback, auth, formdata, data.target.files[0])
  }

  const Callback = async (data: any, errorresponse: any, file: any) => {
    if (data.status === 200) {
      // console.log("respnse :", data.data.result.file_url)
      setDataUri(data.data.result.file_url)
      let a = "image"
      if (file.type !== "image/png")
        a = "docs"
      docSend(a, data.data.result.file_url)
    }
    else {
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  };


  return (
    <div className="main">
      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <>
            <div className="chat_main_container">
              {/* <div className="subtitle">CHAT</div> */}

              <div className="chat_log">

                <div className="chatlog_box">

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"Search or start new chat"}
                      id="chat_title_data"
                      name={`data.Title`}
                      input_inner_leftprop={<img className="search_icon" src={search} />}
                      inputtype="Text"
                      required={false}
                      type="text"
                      value={title}
                      onChange={settitle}
                    />
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={(userDetail) &&  userDetail.photo_url} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {(userDetail) && userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>

                  <div className="chatlog_list">
                    <div className="chat_user_wrap">
                      <img className='user_icon' src={profile_picture} />
                      <div className="chat_user_preview">
                        <div className='header_title' style={{ color: colourObj.color_1 }}>
                          {userDetail.firstname} {userDetail.secondname}
                        </div>
                        <div className="chat_message_preview">
                          You: hii
                        </div>
                      </div>
                    </div>

                    <div className="chat_time">
                      4:40
                      {/* {object.time} */}
                    </div>
                  </div>



                </div>
              </div>

              <div className="chat_container">
                <div className="chatbox" >
                  {
                    (userChat) && userChat.map(renderchat)
                  }
                </div>

                <div className="bottom_container" style={{ background: colourObj.color_14 }}>
                  <>
                    <div className="icon_container" onClick={() => { setAttachments(!Attachments) }}>
                      <img className="iconimg" src={AttachmentImg} ></img>
                      <input id="myInput"
                        type="file"
                        onChange={(ref) => _onChangeHandler(ref)}
                        ref={inputFile}
                      />
                    </div>
                  </>

                  <input className="message_box"
                    style={{
                      color: colourObj.color_2,
                      backgroundColor: colourObj.color_5,
                    }}
                    placeholder="Type a message"
                    type="text"
                    onChange={(e) => { setchat_send(e.target.value) }}
                    value={chat_send}
                    onKeyPress={handleKeyPress}
                  />

                  {photoMessagesend ?
                    <div className="icon_container"
                      style={{ backgroundColor: colourObj.color_12 }}
                      onClick={(e) => {
                        photoSend()
                        setimgPreview(false)
                      }}>
                      <img className="iconimg" src={sendIcon} />
                    </div>
                    :
                    <div className="icon_container"
                      style={{ backgroundColor: colourObj.color_12 }}
                      onClick={(e) => {
                        messageSend()
                      }}>
                      <img className="iconimg" src={sendIcon} />
                    </div>
                  }
                </div>

                {Attachments &&
                  <div className="attachments_container">
                    <img className="iconimg" src={cameraicon} onClick={() => { setiscamera(!iscamera) }} />
                    <img className="iconimg" src={document} onClick={() => { onClickDocs() }} />
                    <img className="iconimg" src={gallery} onClick={() => { onClickDocs() }} />
                  </div>
                }

                {iscamera &&
                  <div>
                    <Camera ref={camera} />
                    <button onClick={(e) => {

                      setImage(camera.current.takePhoto())
                      setphoto_send(camera.current.takePhoto())
                      setiscamera(false);
                      setimgPreview(true)
                    }}
                    >Take photo
                    </button>
                  </div>
                }

                {imgPreview &&
                  <>
                    <img className="camera_img_preview" src={image} alt='Taken photo'
                      onClick={() => {
                        // console.log("Photo:", image);
                      }}
                    />
                  </>
                }

                <div>
                  {/* Do not delete this code >>>>> This is a image editor */}

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

              <div className="task_details">

                <div className="column">

                  <div className="data_wrap">
                    <div className="card_title">Company ID: </div>
                    <div className="text_data">{" " + project_Task_Data?.company_ref}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Branch ID: </div>
                    <div className="text_data">{" " + project_Task_Data?.branch_ref}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Task ID: </div>
                    <div className="text_data">{" " + project_Task_Data?.id}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Project ID:</div>
                    <div className="text_data"> {" " + project_Task_Data?.project_ref_id}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Title: </div>
                    <div className="text_data">{" " + project_Task_Data?.title}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Domain:</div>
                    <div className="text_data"> {" " + project_Task_Data?.domain} </div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Priority:</div>
                    <div className="text_data"> {" " + project_Task_Data?.priority} </div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Task Type:</div>
                    <div className="text_data"> {" " + project_Task_Data?.task_type}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Progress:</div>
                    <div className="text_data">{" " + project_Task_Data?.progress}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Time Spent:</div>
                    <div className="text_data">{" " + project_Task_Data?.time_spent}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Start-Date:</div>
                    <div className="text_data"> {" " + project_Task_Data?.start_date}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">End-Date:</div>
                    <div className="text_data">{" " + project_Task_Data?.end_date}</div>
                  </div>

                  <div className="data_wrap">
                    <div className="card_title">Updated At:</div>
                    <div className="text_data">{" " + project_Task_Data?.updated_at}</div>
                  </div>

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

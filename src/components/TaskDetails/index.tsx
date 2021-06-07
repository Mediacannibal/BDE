import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import { Camera } from "react-camera-pro";
import '../../components/app.css'
import * as sendIcon from '../../assets/send.svg'
import * as AttachmentImg from '../../assets/attach-paperclip-symbol.png'
import * as document from '../../assets/document.svg'
import * as gallery from '../../assets/gallery.svg'
import * as cameraicon from '../../assets/camera.svg'
import * as download from '../../assets/download.svg'
import { ColourObject } from 'store/ColourStore'

import { ProgressBar } from 'components/Common/Spinner';
import SimpleEditor from 'react-simple-image-editor';
import { useAuth } from 'store/authStore';
import Footer from '../Common/Footer';
import { fileupload } from 'utils/api';

const chatSocket: WebSocket = new WebSocket("wss://apimccbdechat.mediacannibal.com/ws/chat/roomName/");

const TaskDetails = () => {
  const { auth } = useAuth();
  const history = useHistory();
  const inputFile = useRef(true);
  const camera = useRef(null);
  const [image, setImage] = useState();
  const [iscamera, setiscamera] = useState(false)
  const [imgPreview, setimgPreview] = useState(false)
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [Attachments, setAttachments] = useState(false)
  const [photoMessagesend, setphotoMessagesend] = useState(false)

  const [tasknameinput, settasknameinput] = useState(false)
  const [taskpriorityinput, settaskpriorityinput] = useState(false)
  const [taskDueinput, settaskDueinput] = useState(false)
  const [taskasigneeinput, settaskasigneeinput] = useState(false)
  const [taskDescriptioninput, settaskDescriptioninput] = useState(false)
  const [taskHistoryinput, settaskHistoryinput] = useState(false)

  const [chat_send, setchat_send] = useState('')
  const [chat_receive, setchat_receive] = useState('')
  const [userinfo, setuserinfo] = useState('')
  const [photo_send, setphoto_send] = useState('')
  const [chat_log_list, setchat_log_list] = useState(
    [
      // {
      //   content: "https://trtappfiles.s3.amazonaws.com/file/files/Screenshot_2.png",
      //   message_type: "docs",
      //   name: "KiranRaj",
      //   time: "5/14/2021, 8:28:05 PM"
      // }
    ])
  const [dataUri, setDataUri] = useState('');

  const addtolist = (message: any) => {
    let a = chat_log_list
    // [1,2,2]
    a.push(JSON.parse(String(message)));
    // [1,2,2,8]
    setchat_log_list(a.sort(function (a, b) {
      return new Date(b.time) - new Date(a.time);
    }))
  }

  useEffect(() => {
    chatSocket.onmessage = async (e) => {
      // console.log(">>>>>>>>>>>>>>", e.data);
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

    if (!Colour) {
      loadColour();
    }
  }, [])

  const messageSend = () => {
    let message = chat_send
    let photo = photo_send
    let time = new Date()
    chatSocket.send(JSON.stringify({
      'message': JSON.stringify({
        "name": userinfo.firstname + userinfo.lastname,
        "time": String(time.toLocaleString()),
        "message_type": "text",
        "content": message,
        "photo": photo,
      })
    }));
    console.log(message);
    setchat_send("")
  }

  const photoSend = () => {
    let message = chat_send
    let photo = photo_send
    let time = new Date()
    chatSocket.send(JSON.stringify({
      'message': JSON.stringify({
        "name": userinfo.firstname + userinfo.lastname,
        "time": String(time.toLocaleString()),
        "message_type": "image",
        "content": message,
        "photo": photo,
      })
    }));
    console.log(message);
    setchat_send("")
  }

  const getfilename = (url) => {
    let a = "filename";
    let temp = String(url).split('/')
    a = temp[temp.length - 1]
    return a
  }

  const docSend = (type: any, url: any) => {
    let message = chat_send
    let time = new Date()
    chatSocket.send(JSON.stringify({
      'message': JSON.stringify({
        "name": userinfo.firstname + userinfo.lastname,
        "time": String(time.toLocaleString()),
        "message_type": type,
        "content": url,
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

  const onClickDocs = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const _onChangeHandler = (data: any) => {
    // console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    // console.log(data.target.files[0].type);

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

                <div className="chatbox" style={{ background: colourObj.color_5 }}>
                  {
                    // [sdf,dsfsdf,dfsdf,sdf,sdf]
                    // [1,2,34,5,213] 
                    // [{},{},{}]
                    //{"name":"sdfasdf"}
                    //{name:"sdfasdf"}

                    chat_log_list.map((object, index) => {
                      // console.log('chat_log_list', chat_log_list, object);
                      return (
                        (String(userinfo.firstname + userinfo.lastname) === object.name) ?

                          <div className="chat_mymessage_container">
                            <div className="message mymessage">
                              <div className="chat_user_name">{object.name}</div>
                              {object.message_type == "text" ?
                                <>
                                  <div className="chat_text_message">
                                    {object.content}
                                  </div>
                                </>
                                :
                                <>
                                  {
                                    object.message_type == "image" ?
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
                              {object.message_type == "text" ?
                                <div className="chat_text_message">
                                  {object.content}
                                </div>
                                :
                                <>
                                  {
                                    object.message_type == "image" ?
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
                    })
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

                      console.log(camera.current.takePhoto());
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
            </div>
          </>
        }
      </div>
      <Footer />
    </div >
  )
}

export default TaskDetails;

import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import moment from 'moment';


const ChatProject = () => {

  const history = useHistory();

  const [messages, setmessages] = useState('')

  useEffect(() => {


  }, [])



  const componentDidMount = () => {
    const roomName = location.pathname.substr(1);

    var socketPath = 'ws://'
      + window.location.host
      + '/ws/'
      + roomName;

    const chatSocket = new WebSocket(socketPath);

    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var message = { text: data.message, date: data.utc_time };
      message.date = moment(message.date).local().format('YYYY-MM-DD HH:mm:ss');

      let updated_messages = [message];
      updated_messages.push(message);
      setmessages({ messages: updated_messages })
    };

    chatSocket.onclose = (e) => {
      console.error('Chat socket closed unexpectedly');
    };

    document.querySelector('#chat-message-input').focus();
    document.querySelector('#chat-message-input').onkeyup = (e: any) => {
      clickSubmitMessage
    };

    document.querySelector('#chat-message-submit').onclick = (e: any) => {
      var messageInputDom = document.querySelector('#chat-message-input');
      var message = messageInputDom.value;

      chatSocket.send(JSON.stringify({
        'message': message
      }));
      messageInputDom.value = '';
    };
  }


  return (
    <>
      <div className="main">
        <div className="body">
          <div>
            {(function (item: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) {
              <div key={i} id="message" className="card">
                <div className="cell large-4">{item.text}</div>
                <div className="cell large-2 text-right"><small>{item.date}</small></div>
              </div>
                ;
            }
            )}
            <textarea id="chat-message-input" type="text" cols="100" /><br />
            <input id="chat-message-submit" type="button" className="button" value="Send" />
            {componentDidMount}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatProject;
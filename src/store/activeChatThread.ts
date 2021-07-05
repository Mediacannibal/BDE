import { CommonAPi } from 'utils/api'
import { Store, useStore } from './Store'

export class isChatThread {
  chat_id: String
  content: String
  id: String
  message_type: String
  name: String
  photo: String
  time: String
  user_id: String

  constructor(o: {
    chat_id: String
    content: String
    id: String
    message_type: String
    name: String
    photo: String
    time: String
    user_id: String
  }) {
    this.chat_id = o.chat_id
    this.content = o.content
    this.id = o.id
    this.message_type = o.message_type
    this.name = o.name
    this.photo = o.photo
    this.time = o.time
    this.user_id = o.user_id
  }
}

export const activeChatThread = new Store<isChatThread[] | false>(false)

export const useUserChatList = () => {
  const [userChat, setuserChat] = useStore(activeChatThread)

  return {
    userChat,
    setuserChat,

    async loaduserChatDetail(auth: any, id: any) {
      CommonAPi(
        {
          path: `chat/list/?chat_id=${id}`,
          method: 'get',
          auth: auth ? auth : false,
        },
        async (data: any, errorresponse: any) => {
          if (data.status === 200) {
            console.log('data: ', data.data.results)
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
    },
//     async addtolist(message: any,list:any) {
//       let a = [];
//       console.log(list);
      
// (list)&& list.map((o: any) => {
//           let arr = {
//             chat_id: o.chat_id,
//             content: o.content,
//             id: o.id,
//             message_type: o.message_type,
//             name: o.name,
//             photo: o.photo,
//             time: o.time,
//             user_id: o.user_id,
//           }
//           a.push(arr)
//         })
//       await a.push(JSON.parse(String(message)))
//       setuserChat(
//         a.sort(function (a: any, b: any) {
//           return new Date(b.time) - new Date(a.time)
//         })
//       )
//     },
  }
}

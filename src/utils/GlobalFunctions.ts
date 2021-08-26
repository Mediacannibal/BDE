export const getChatID = (type: any, id: any) => {
  let chatroomid: any = String(type) + String(id)
  // str.replace(['+','/','='],['-','_','']);
  chatroomid = window.btoa(chatroomid)
  chatroomid = chatroomid.replace('+', '-')
  chatroomid = chatroomid.replace('/', '_')
  chatroomid = chatroomid.replace('=', '')

  return chatroomid
}

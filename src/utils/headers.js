/**
 * Created by rozer on 8/16/2018.
 */


const headers = (auth) => {
    if (auth === null ||auth === "null" )
      return ({
         'Accept': 'application/json',
      })
   else
      return ({
         'Accept': 'application/json',
         'Authorization': auth ? `Token ${JSON.parse(auth)}` : ''
      })
};



export default headers

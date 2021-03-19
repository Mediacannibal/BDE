import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';


const HomeScreen = () => {

  const history = useHistory();

  useEffect(() => {
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    if (token === null)
      history.push("/Login")
    else {
      let usertype = JSON.parse(String(localStorage.getItem("UserDetails"))).user_type
      if (usertype !== "SUPERUSER") {
        history.push("/")
      }
    }
  }, [])


  return (
    <div className="main">


    </div >

  );
}

export default HomeScreen

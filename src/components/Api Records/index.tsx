import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useAuth } from 'store/authStore';

const ApiRecords = () => {
  const { auth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    if (auth)
    // history.push("/Login")
    { }
    else {
      let usertype = JSON.parse(String(localStorage.getItem("UserDetails"))).user_type
      if (usertype !== "SUPERUSER") {
        // history.push("/")
      }
    }
  }, [])


  return (
    <div className="main">
      <div className="body">

        <iframe src="https://apimcbde.mediacannibal.com/docs/" name="targetframe" height="100%" width="100%" title="API-RECORDS"></iframe>

      </div>
    </div>
  );
}

export default ApiRecords

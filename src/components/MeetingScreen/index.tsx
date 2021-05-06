import React, { useEffect, useState } from 'react';
import { Input, Button } from '@material-ui/core';
import "./style.css"
import ReactGA from 'react-ga';

const MeetingScreen = () => {

	const [url, setUrl] = useState('')

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);

	}, [])

	const join = () => {
		if (url !== "") {
			let temp = url.split("/")
			window.location.href = `/meetinghome/${temp[temp.length - 1]}`
		} else {
			let temp = Math.random().toString(36).substring(2, 7)
			window.location.href = `/meetinghome/${temp}`
		}
	}

	return (
		<div className="container2">

			<div style={{
				background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
				textAlign: "center", margin: "auto", marginTop: "100px"
			}}>
				<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
				<Input placeholder="URL" onChange={e => setUrl(e.target.value)} />
				<Button variant="contained" color="primary" onClick={join} style={{ margin: "20px" }}>Go</Button>
			</div>
		</div>
	)
}


export default MeetingScreen;
import React, { useEffect, useState,useRef  } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import "./style.css"
import ReactGA from 'react-ga';


const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;
const MeetingScreen = () => { 

	const [yourID, setYourID] = useState("");
	const [users, setUsers] = useState({});
	const [stream, setStream] = useState();
	const [receivingCall, setReceivingCall] = useState(false);
	const [caller, setCaller] = useState("");
	const [callerSignal, setCallerSignal] = useState();
	const [callAccepted, setCallAccepted] = useState(false);

	const userVideo = useRef();
	const partnerVideo = useRef();
	const socket = useRef();

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search); 

		socket.current = io.connect("http://localhost8000/");
		// socket.current = io.connect("http://apimcbde.mediacannibal.com/");
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
			setStream(stream);
			if (userVideo.current) {
				userVideo.current.srcObject = stream;
			}
		})

		socket.current.on("yourID", (id) => {
			setYourID(id);
		})
		socket.current.on("allUsers", (users) => {
			setUsers(users);
		})

		socket.current.on("hey", (data) => {
			setReceivingCall(true);
			setCaller(data.from);
			setCallerSignal(data.signal);
		})
	}, []);

	function callPeer(id) {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			config: {

				iceServers: [
					{
						urls: "stun:numb.viagenie.ca",
						username: "sultan1640@gmail.com",
						credential: "98376683"
					},
					{
						urls: "turn:numb.viagenie.ca",
						username: "sultan1640@gmail.com",
						credential: "98376683"
					}
				]
			},
			stream: stream,
		});

		peer.on("signal", data => {
			socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
		})

		peer.on("stream", stream => {
			if (partnerVideo.current) {
				partnerVideo.current.srcObject = stream;
			}
		});

		socket.current.on("callAccepted", signal => {
			setCallAccepted(true);
			peer.signal(signal);
		})

	}

	function acceptCall() {
		setCallAccepted(true);
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream,
		});
		peer.on("signal", data => {
			socket.current.emit("acceptCall", { signal: data, to: caller })
		})

		peer.on("stream", stream => {
			partnerVideo.current.srcObject = stream;
		});

		peer.signal(callerSignal);
	}

	let UserVideo;
	if (stream) {
		UserVideo = (
			<Video playsInline muted ref={userVideo} autoPlay />
		);
	}

	let PartnerVideo;
	if (callAccepted) {
		PartnerVideo = (
			<Video playsInline ref={partnerVideo} autoPlay />
		);
	}

	let incomingCall;
	if (receivingCall) {
		incomingCall = (
			<div>
				<h1>{caller} is calling you</h1>
				<button onClick={acceptCall}>Accept</button>
			</div>
		)
	}

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
			<Container>
				<Row>
					{UserVideo}
					{PartnerVideo}
				</Row>
				<Row>
					{Object.keys(users).map(key => {
						if (key === yourID) {
							return null;
						}
						return (
							<button onClick={() => callPeer(key)}>Call {key}</button>
						);
					})}
				</Row>
				<Row>
					{incomingCall}
				</Row>
			</Container>

		</div>
	)
}


export default MeetingScreen;
import React from "react";
import { v1 as uuid } from "uuid";
import { useHistory } from 'react-router-dom';



const MeetingScreen = (props) => {

  const history = useHistory();

    function create() {
        const id = uuid();
        history.push(`/MeetingRoom/${id}`);
    }

    return (
        <button onClick={create}>Create room</button>
    );
};

export default MeetingScreen;

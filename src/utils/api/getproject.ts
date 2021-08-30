import axios from '../axios';
import headers from '../headers';

const getproject = async () => {

    return (await axios.get(`tasks/project/?user=`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getproject;
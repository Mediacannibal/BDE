import axios from '../axios';
import headers from '../headers';

const postproject = async (data: any) => {

    return (await axios.post(`tasks/project/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default postproject;
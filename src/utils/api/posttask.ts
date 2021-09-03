import axios from '../axios';
import headers from '../headers';

const posttask = async (data: any) => {

    return (await axios.post(`tasks/maintask/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default posttask;
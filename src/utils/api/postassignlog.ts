import axios from '../axios';
import headers from '../headers';

const postassignlog = async (data: any) => {

    return (await axios.post(`tasks/v2/assign/list/dropdown/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default postassignlog;
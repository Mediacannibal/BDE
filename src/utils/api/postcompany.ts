import axios from '../axios';
import headers from '../headers';

const postcompany = async (data: any) => {

    return (await axios.post(`company/list/dropdown/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default postcompany;
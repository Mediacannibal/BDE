import axios from '../axios';
import headers from '../headers';

const getcompany = async () => {

    return (await axios.get(`company/list/dropdown/`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getcompany;
import axios from '../axios';
import headers from '../headers';

const getcompany = async () => {

    return (await axios.get(`company/add/?user=all`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getcompany;
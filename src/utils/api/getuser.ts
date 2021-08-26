import axios from '../axios';
import headers from '../headers';

const getuser = async () => {

    return (await axios.get(`/api/user/list/`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getuser;
import axios from '../axios';
import headers from '../headers';

const getbranch = async () => {

    return (await axios.get(`company/branch/list/dropdown/`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getbranch;
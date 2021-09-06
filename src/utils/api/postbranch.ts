import axios from '../axios';
import headers from '../headers';

const postbranch = async (data: any) => {

    return (await axios.post(`company/branch/list/dropdown/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default postbranch;
import axios from '../axios';
import headers from '../headers';

const getprojectDetails = async () => {

    return (await axios.get(`tasks/project/list/dropdown/`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getprojectDetails;
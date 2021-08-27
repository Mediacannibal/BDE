import axios from '../axios';
import headers from '../headers';

const gettask = async () => {

    return (await axios.get(`tasks/list/dropdown/?project_id=&company_id=&branch_id=`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default gettask;
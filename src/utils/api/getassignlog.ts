import axios from '../axios';
import headers from '../headers';

const getassignlog = async (data: any) => {

    return (await axios.get(`tasks/v2/assign/list/dropdown/?project_task=${data}`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default getassignlog;
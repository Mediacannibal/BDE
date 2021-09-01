import axios from '../axios';
import headers from '../headers';

const gettask = async (data1: any, data2: any, data3: any, data4: any) => {

    return (await axios.get(`tasks/list/dropdown/?project_ref=${data1}&priority=${data2}&task_type=${data3}&status=&domain=${data4}`, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default gettask;
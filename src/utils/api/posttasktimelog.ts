import axios from '../axios';
import headers from '../headers';

const posttasktimelog = async (data: any) => {

    return (await axios.post(`tasks/tasktimelog/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default posttasktimelog;
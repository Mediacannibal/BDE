import axios from '../axios';
import headers from '../headers';

const edittask = async (id: any, data: any) => {

    return (await axios.put(`tasks/maintask/edit/${id}/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default edittask;
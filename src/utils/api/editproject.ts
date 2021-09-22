import axios from '../axios';
import headers from '../headers';

const editproject = async (id: any, data: any) => {

    return (await axios.put(`tasks/project/edit/${id}/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default editproject;
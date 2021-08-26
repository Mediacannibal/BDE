import axios from '../axios';
import headers from '../headers';

const edituser = async (id: any, data: any) => {

    return (await axios.put(`api/user/edit_profile/${id}/`, data, { "headers": headers(String(localStorage.getItem("AuthToken"))) }));
};

export default edituser;
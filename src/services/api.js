import axios from 'axios';

const getUserStatus = async () => (await axios.get('https://yesno.wtf/api')).data;

const api = {
    getUserStatus,
};
export default api;

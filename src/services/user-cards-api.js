import axios from "axios";

axios.defaults.baseURL = 'https://645ea29112e0a87ac0f4c028.mockapi.io/api/v1';

export async function fetchUser (page) {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
};

export async function updateUser (newUserInfo) {
    const response = await axios.put(`/users/${newUserInfo.id}`, {...newUserInfo});
    return response.data;
};
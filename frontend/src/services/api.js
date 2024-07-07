import axios from 'axios';

const api = {
    getPosts: async () => {
        const response = await axios.get('/api/posts');
        return response.data;
    },
    getSubRAHdit: async (name) => {
        const response = await axios.get(`/api/subRAHdits/${name}`);
        return response.data;
    },
    getUser: async (username) => {
        const response = await axios.get(`/api/users/${username}`);
        return response.data;
    }
};

export default api;

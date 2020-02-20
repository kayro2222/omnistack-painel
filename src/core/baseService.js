import axios from 'axios';

const baseService = axios.create({
    baseURL: 'http://localhost:3333'
});

export default baseService;
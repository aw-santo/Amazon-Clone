import axios from "axios";

const instance = axios.create({
    baseURL: '...' // API (card function) URL
});

export default instance;
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-9c1f4/us-central1/api' // API (card function) URL
});

export default instance;
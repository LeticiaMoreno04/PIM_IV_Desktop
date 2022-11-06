import axios from 'axios';

const connection = axios.create({
    //Production
    baseURL: "https://pim-liart.vercel.app",
    //dev
    //baseURL: "https://localhost:3333/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default connection;
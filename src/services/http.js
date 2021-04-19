import axios from 'axios';

export default axios.create({
    baseURL: 'http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1',
    headers: {
        "Content-type": "application/json"
    }
})
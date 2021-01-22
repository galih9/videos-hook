import axios from 'axios';
const KEY = 'AIzaSyD6Lqdd13SzX-hJewtaua1WKHSoAamf5oo'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
        type: 'video',
    }
})
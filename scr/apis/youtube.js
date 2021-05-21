import axios from 'axios';
const KEY='AIzaSyC9Mr3vndbSCuqXgpiNcycmk-v4ygg79aQ';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});


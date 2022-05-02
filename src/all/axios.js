import axios from 'axios'
const instance=axios.create({
    baseURL:'https://nodejs-news-website-ssce.herokuapp.com/',
})
export default instance;
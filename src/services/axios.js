import axios from 'axios';

const api_uri = 'https://fakestoreapi.com/'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL||api_uri,
});


export const Get = async (url, params) => {
    try {
        const response = await axiosInstance.get(url)
        return response
    } catch (error) {
        console.log(`error in Get api call - ${url}`)
    }

}
export const Post = async (url, params, body) => {
    try {

    } catch (error) {
        console.log(`error in Get api call - ${url}`)
    }

}
export const Put = async (url, params, body) => {
    try {

    } catch (error) {
        console.log(`error in Get api call - ${url}`)
    }

}

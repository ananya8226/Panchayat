import axios from 'axios';
import { Buffer } from 'buffer';

const axiosInstance = axios.create({
    baseURL: "http://43.204.173.209:3000/v1/",
   
});

const  auth= {
    username: "panchayat",
    password: "panchayat@123",
}
axiosInstance.interceptors.request.use(
    function configuration(config) {
        const token = localStorage.getItem("ACCESS_TOKEN");
        // console.log(token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        else{
            config.headers.Authorization = `Basic ${Buffer.from(auth.username+":"+auth.password).toString("base64")}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const GET = async (url, params) => {   
    try {
        let result = await axiosInstance.get(url, { params: params });
        return result;
    } catch (error) {
        return error?.response;
    }
};

export const POST = async (url, body, options) => {
    try {
        let result = await axiosInstance.post(url, body, options);
        return result;
    } catch (error) {
        return error?.response;
    }
};

export const PUT = async (url, body, options) => {
    try {
        let result = await axiosInstance.put(url, body, options);
        return result;
    } catch (error) {
        return error?.response;
    }
};

export const PATCH = async (url, body, options) => {
    try {
        let result = await axiosInstance.patch(url, body, options);
        return result;
    } catch (error) {
        return error?.response;
    }
};

export const DELETE = async (url, params, data) => {
    try {
        let result = await axiosInstance.delete(url, { params, data });
        return result;
    } catch (error) {
        return error?.response;
    }
};
import Axios from "axios";


// const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const apiBaseUrl = "http://127.0.0.1:8000/api/"
// const user = localStorage.getItem('user');

const defaultOptions = {
    baseURL: apiBaseUrl,
    headers: {
        "content-type": "application/json",
    },
};

const axiosInstance = Axios.create(defaultOptions);
axiosInstance.interceptors.request.use(function (config) {
    // const token = user ? JSON.parse(user).token : null;
    // config.headers["authorization"] = token ? `Bearer ${token}` : "";
    config.headers["Access-Control-Allow-Origin"] = "*"
    return config;
});

export const getData = (url) => {
    return axiosInstance.get(`${url}`);
};

export const postData = (url, requestData) => {
    return axiosInstance.post(`${url}`, requestData);
};

export const updateData = (url, requestData) => {
    return axiosInstance.put(`${url}`, requestData);
};

export const deleteData = (url) => {
    return axiosInstance.delete(`${url}`);
};

export const postPaginateData = (url) => {
    return axiosInstance.post(url, []);
};

export const getPaginateData = (url) => {
    return axiosInstance.get(url);
};

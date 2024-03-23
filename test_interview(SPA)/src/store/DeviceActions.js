import {getDevices, startGetDevices, getDevicesFailed, addDevice} from "./DeviceSlice";
import {postData} from "../adapters/axios"

const BASE_URL = 'http://127.0.0.1:8000/api/'
export const fetchDevices = (data) => async (dispatch) => {
    dispatch(startGetDevices());
    const search = data != undefined && data.search ? '?&search='+data.search : ''
    fetch(BASE_URL+'devices'+search)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => dispatch(getDevices(data)))
        .catch(error => console.log('There has been a problem with your fetch operation: ', error));
};

export const createDevice = (data) => async (dispatch) => {
    dispatch(startGetDevices());
    try {
        const res = await postData('devices', data);

        dispatch(addDevice(res.data));
    } catch (err) {
        dispatch(getDevicesFailed(err.message));
    }
};
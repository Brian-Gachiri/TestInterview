import {createSlice} from '@reduxjs/toolkit'

export const DeviceSlice = createSlice({
    name: 'devices',
    initialState : {
        deviceList : [],
        status: 'idle',
        error: null
    },
    reducers: {
        getDevices:(state,action) => {
            state.status = 'success'
            state.deviceList = action.payload
        },
        addDevice: (state,action) => {
            const new_id = state.deviceList.length + 1;
            const new_device = {
                id: new_id,
                text: action.payload.text,
                description: action.payload.description,
                date: action.payload.date,
                status: false,
                priority: action.payload.priority,
            }
            state.deviceList =
                [
                    ...state.deviceList,
                    new_device
                ]
        },
        removeDevice:(state) => {

        },
        markAsComplete: (state) => {

        },
        getDevicesFailed: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        startGetDevices: (state) => {
            state.status = 'loading'
        }

    }
})

export const {addDevice, removeDevice, markAsComplete, getDevices, getDevicesFailed, startGetDevices} = DeviceSlice.actions

export default DeviceSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import DeviceReducer from './DeviceSlice'
import CartReducer from './CartSlice'

export default configureStore({
    reducer: {
        devices : DeviceReducer,
        cart : CartReducer
    },
})
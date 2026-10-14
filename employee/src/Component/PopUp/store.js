import {configureStore } from '@reduxjs/toolkit'
import employeeReducer from './popupslice'
import employee from './Confige/employee'
let Store=configureStore({
    reducer:{
        Popup:employeeReducer,
        employee
    }
})
export default Store;
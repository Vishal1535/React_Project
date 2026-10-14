import {configureStore} from '@reduxjs/toolkit'
import SliceReducer from './Slice'
let Store=configureStore({
    reducer:{
       SliceReducer 
    }
})
export default Store
import { createSlice } from '@reduxjs/toolkit'
let initialState = {
    employeePopUp: false,
    DeletePopUp: false,
    selectedId: null,
   
}
const PopUpSlice=createSlice ({
    name:'employee',
    initialState,
    reducers:{
        OpenEmployee:(state,action)=>{
            state.employeePopUp=action.payload??true
          
        },
        CloseEmployee:(state,action)=>{
            state.employeePopUp=false
            state.EmployeeDetails={}
        },
      OpenDeletePopUp: (state, action) => {
    state.DeletePopUp = true;
    state.selectedId = action.payload;
},
       CloseDeletePopUp: (state) => {
    state.DeletePopUp = false;
    state.selectedId = null;
}

    }
})
export const {OpenDeletePopUp,CloseDeletePopUp,OpenEmployee,CloseEmployee} =PopUpSlice.actions;
export default PopUpSlice.reducer
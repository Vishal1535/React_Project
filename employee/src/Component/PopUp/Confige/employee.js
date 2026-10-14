import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from './axiosInstance'
let initialState={
    employee:[],
    loading:false,
    error:null
}
let FetchData=createAsyncThunk(
    'employee/FetchData',
    async ()=>{
        let response=await api.get('employee');
        // console.log(response.data);
        
        
       return(response.data);
       
        
    }
)
export const PostApi = createAsyncThunk(
  'employee/PostApi',
  async (details) => {
    let response = await api.post('employee', details);
    return response.data;
  }
);
export const DeleteApi = createAsyncThunk(
  'employee/DeleteApi',
  async (id, thunkAPI) => {
    const { dispatch } = thunkAPI;

    let response = await api.delete(`employee/${id}`);

    dispatch(FetchData()); // refresh list

    return response.data;
  }
);
export const UpdateAPi = createAsyncThunk(
  'employee/UpdateAPi',
  async ({id,details}, thunkAPI) => {
    const { dispatch } = thunkAPI;

    let response = await api.put(`employee/${id}`,details);

    dispatch(FetchData()); // refresh list

    return response.data;
  }
);

const EmployeeSlice=createSlice({
    name:'employee',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(FetchData.pending,(state,action)=>{
            state.loading=true;
           
            
            state.error=null
        })
       builder.addCase(FetchData.fulfilled,(state,action)=>{
    state.employee =  action.payload;
    state.loading = false;
});
        builder.addCase(FetchData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })

        // Post
         builder.addCase(PostApi.pending,(state,action)=>{
            state.loading=true;
            state.error=null
        })
      builder.addCase(PostApi.fulfilled,(state,action)=>{
    state.employee.push(action.payload);
    state.loading = false;
});
        builder.addCase(PostApi.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
        // Deltete
          builder.addCase(DeleteApi.pending,(state,action)=>{
            state.loading=true;
            state.error=null
        })
      builder.addCase(DeleteApi.fulfilled,(state,action)=>{
    state.employee.push(action.payload);
    state.loading = false;
});
        builder.addCase(DeleteApi.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
        // Update
           builder.addCase(UpdateAPi.pending,(state,action)=>{
            state.loading=true;
            state.error=null
        })
      builder.addCase(UpdateAPi.fulfilled,(state,action)=>{
    state.employee.push(action.payload);
    state.loading = false;
});
        builder.addCase(UpdateAPi.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})
export {FetchData}
export default EmployeeSlice.reducer
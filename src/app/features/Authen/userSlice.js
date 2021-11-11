import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//import userApi from './../../api/userApi';
import api from './../../api/axiosService';
export const registers= createAsyncThunk('user/register', async (payload) => {
    const endpoint= '/user';
    const data = await api.get(endpoint).registers(payload);
    //save data
    //localStorage.setItem('access_token',data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.user;
});
const userSlice = createSlice ({
    name :'user',
    initialState:{
        current: JSON.parse(localStorage.getItem('user'))||{},
        setting:{},
        
    }, 
    reducers:{},
    extraReducers:{
        [registers.fulfilled]:(state, action) => {
            state.current = action.payload;
        }
    }
});
const {reducer} = userSlice;
export default reducer;

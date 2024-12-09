import { createSlice } from '@reduxjs/toolkit';
import { getUSer } from './actions';
import { SimpleUser } from "../../src/types/apiTypes";

interface UserState {
    user: SimpleUser | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(getUSer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })  
        },
});

export default userSlice.reducer;

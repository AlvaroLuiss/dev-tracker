import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<SimpleUser>) => {
            state.user = action.payload;
        },
    },    extraReducers: (builder) => {
        builder
            .addCase(getUSer.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(getUSer.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })  
        },
});

export default userSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userReducer, { userSlice } from './userSlice';
import { SimpleUser } from '@/types/apiTypes';
import repositoriesReducer from './repositoriesSlice';



export const store = configureStore({
    reducer: {
        user: userReducer,
        repositories: repositoriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

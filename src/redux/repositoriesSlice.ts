import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserRepositories } from "../redux/actions";
import { MinimalRepository } from "@/types/apiTypes";


interface RepositoriesState {
  repositories: Array<MinimalRepository> | null;
  loading: boolean;
  error: string | null;
}


const initialState: RepositoriesState = {
  repositories: [],
  loading: false,
  error: null,
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action: PayloadAction<Array<MinimalRepository>>) => {
      state.repositories = action.payload;
      state.loading = false;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      }).addCase(getUserRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.repositories = action.payload;
      })
    }
})
      

export default repositoriesSlice.reducer;
      

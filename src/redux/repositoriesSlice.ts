import { createSlice } from "@reduxjs/toolkit";
import { getUserRepositories } from "../redux/actions";

const initialState = {
  repositories: [],
  loading: false,
  error: null,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    }
})
      

export default repositoriesSlice.reducer;

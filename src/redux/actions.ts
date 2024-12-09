import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GitHubUserRepositories, SimpleUser } from "../../src/types/apiTypes";
import { sortGitHubUserRepositories } from "@/utils/sortRepos";

const API_URL = "https://api.github.com/users/";

export const getUSer = createAsyncThunk<SimpleUser, string>(
    'user/getUser',
    async (username, thunkAPI) => {
        try {
            const response = await axios.get<SimpleUser>(`${API_URL}${username}`);
            return response.data; 
        } catch (error: any) {

            const errorMessage = error.response?.data?.message;
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const getUserRepositories = createAsyncThunk<GitHubUserRepositories, string>(
    'user/getRepositories',
    async (username, thunkAPI) => {
        try {
            const response = await axios.get<GitHubUserRepositories>(`${API_URL}${username}/repos`, {
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                    "Content-Type": "application/json",
                },
            });
           return sortGitHubUserRepositories(response.data, "stars", "desc");
        } catch (error: any) {
          return thunkAPI.rejectWithValue(error.message || "Failed to fetch repositories");
        }
      }
    )
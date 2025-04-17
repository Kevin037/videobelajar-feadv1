import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../utils/db/service";

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const user = await loginUser(credentials);
      const token = btoa(JSON.stringify({ email: user.email, time: new Date() }));
      localStorage.setItem("user", user.id);
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;   
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
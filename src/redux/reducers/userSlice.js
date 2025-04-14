import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../../utils/db/service';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const res = await registerUser(userData);
      return res; // res berisi data document baru dari Firestore
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    resetAll: () => {
      return initialState;
    },
    resetError: (state) => {
      state.error = false;
    },
    resetclass: (state) => {
      state.userData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload; // data user baru dari Firestore
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
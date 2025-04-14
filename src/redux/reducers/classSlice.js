import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { retrieveData } from '../../utils/db/service';

const initialState = {
  classData: [],
  loading: false,
  error: null,
};

export const getClasses = createAsyncThunk('users/fetch', async (filterGroup, thunkAPI) => {
  try {
    const data = await retrieveData('classes', filterGroup);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const classSlice = createSlice({
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
      state.classData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.classData = action.payload;
      })
      .addCase(getClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { resetAll, resetError, resetclass } = classSlice.actions;

export default classSlice.reducer;
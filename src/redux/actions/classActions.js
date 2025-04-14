// import api from '@/utils/api';
// import { showToast, toastErrorTimeOut } from '@/utils/toastMessage';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getClass = createAsyncThunk(
//   'class/get',
//   async (params, { rejectWithValue }) => {
//     try {
//       const response = await api.get('/class', params);
//       return response.data;
//     } catch (error) {
//       const _error = rejectWithValue(error.response);
      
//       // showing message from server
//       if (_error?.payload?.data?.data) showToast('error!',_error?.payload?.data?.data, 'error');
//       else toastErrorTimeOut();
//       return rejectWithValue(false);
//     }
//   },
// );
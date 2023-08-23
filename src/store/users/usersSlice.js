import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action creator pour récupérer les utilisateurs
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://api.example.com/users'); // Remplacez par votre point d'accès API
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
export const { users } = usersSlice.actions;

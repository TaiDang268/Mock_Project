import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userProfile: null,
  },
  reducers: {
    showProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});
export const { showProfile } = profileSlice.actions;
export default profileSlice.reducer;

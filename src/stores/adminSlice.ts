import { createSlice } from '@reduxjs/toolkit';

interface adminState {
  modal: boolean;
}

const initialState: adminState = {
  modal: false
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setModal(state, action) {
      state.modal = action.payload;
    }
  }
});

export const { setModal } = adminSlice.actions;

export default adminSlice.reducer;

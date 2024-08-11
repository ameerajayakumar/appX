import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  activeApp: null,
  dynamicComponents: {},
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMenu(state, action) {
      console.log('Initial State:', state);
      return { ...state, menu: action.payload };
    },
    loadApp(state, action) {
      return { ...state, activeApp: action.payload };
    },
    registerComponent(state, action) {
      return {
        ...state,
        dynamicComponents: {
          ...state.dynamicComponents,
          [action.payload.name]: action.payload.component,
        },
      };
    },
  },
});

export const { setMenu, loadApp, registerComponent } = globalSlice.actions;

export default globalSlice.reducer;

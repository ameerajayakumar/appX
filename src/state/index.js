import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  activeApp: null,
  // dynamicComponents: {},
  formData: {},
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMenu(state, action) {
      return { ...state, menu: action.payload };
    },
    loadApp(state, action) {
      return { ...state, activeApp: action.payload };
    },
    registerComponent(state, action) {
      return {
        // ...state,
        // dynamicComponents: {
        //   ...state.dynamicComponents,
        //   [action.payload.name]: action.payload.component,
        // },
      };
    },
    saveFormData(state, action) {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    },
  },
});

export const { setMenu, loadApp, registerComponent, saveFormData } = globalSlice.actions;

export default globalSlice.reducer;

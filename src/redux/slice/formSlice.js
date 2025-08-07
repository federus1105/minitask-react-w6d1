import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    name: "",
    age: "",
    gender: "",
    smoker: "",
    brands: [],
  },
  list: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm(state, action) {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    toggleBrand(state, action) {
      const brand = action.payload;
      if (state.form.brands.includes(brand)) {
        state.form.brands = state.form.brands.filter((b) => b !== brand);
      } else {
        state.form.brands.push(brand);
      }
    },
    submitForm(state) {
      state.list.push({ ...state.form });
      state.form = {
        name: "",
        age: "",
        gender: "",
        smoker: "",
        brands: [],
      };
    },
    removeEntry(state, action) {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { updateForm, toggleBrand, submitForm, removeEntry } =
  formSlice.actions;
export default formSlice.reducer;

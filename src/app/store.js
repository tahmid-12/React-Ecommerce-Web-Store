import { configureStore } from "@reduxjs/toolkit";
import sliderReducer  from "../features/slices/SliderSlice";
import productReducer from "../features/slices/productsSlice";

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productReducer
    },
});
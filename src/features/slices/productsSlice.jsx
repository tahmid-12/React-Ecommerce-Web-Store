import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialState = {
    filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData
    // filteredProducts: []
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        filterProducts(state, action){
            try{
                const filter = storeData.filter(product => product.type === action.payload);
                state.filteredProducts = filter;
                console.log("Filter", filter);
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", saveState);
            }catch(err){
                return err;
            }
        }
    }
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
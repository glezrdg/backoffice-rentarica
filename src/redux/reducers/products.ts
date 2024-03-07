import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../pages/Products/models/IProduct";
import { getproducts } from "../../pages/Products/services";

const initialState: InitialState = {
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetch_products",
  async (_, thunkApi) => {
    try {
      const res = await getproducts({});
      console.log(res)
      thunkApi.dispatch(setProducts(res))
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload
    }
  },
});

interface InitialState {
  products: IProduct[],
  loading: boolean;
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

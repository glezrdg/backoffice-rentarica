import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState: InitialState = {
  user: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')!) : null,
  loading: false,
};

export const signIn = createAsyncThunk(
  "auth/signin",
  async (info: any, thunkApi) => {
    try {

    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, thunkApi) => {
    try {
      localStorage.removeItem('auth')
      thunkApi.dispatch(setAuth(null))
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const AddRemoveUser = createAsyncThunk(
  "auth/add_remove_user",
  async (data: any, thunkApi) => {
    try {

    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload;
    },
    removeAuth: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // Sign In
    builder.addCase(signIn.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

interface InitialState {
  user: null | any;
  loading: boolean;
}

export const { setAuth, removeAuth } = authSlice.actions;

export default authSlice.reducer;

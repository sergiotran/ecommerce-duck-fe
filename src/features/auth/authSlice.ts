import { toast } from "react-toastify";
import { CommonErrorResponse } from "./../../common/constants/interfaces/xhr";
import { RootState } from "./../../app/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, VerifyTokenResponse } from "./authModel";
import { User } from "../../common/models/user";
import { AUTH_LOGIN_URL, AUTH_VERIFY_URL } from "../../app/api/apiUrl";
// State Interface
export interface AuthState {
  token?: string | undefined | null;
  isAuth?: boolean;
  isError?: boolean;
}
// Metadata
const name = "auth";
const initialState: AuthState = {
  token: null,
  isAuth: false,
  isError: false,
};
// Thunks
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: Pick<User, "email" | "password">, { rejectWithValue }) => {
    const fetching = await fetch(AUTH_LOGIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const res: LoginResponse = await fetching.json();

    if ((res.statusCode as number) >= 400) {
      return rejectWithValue((res as CommonErrorResponse).message);
    }

    return res;
  }
);
export const verifyUserByToken = createAsyncThunk(
  "auth/verify",
  async (token: string, { dispatch, fulfillWithValue }) => {
    const fetching = await fetch(AUTH_VERIFY_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const res: VerifyTokenResponse = await fetching.json();

    if (!res.success) {
      return dispatch(logout())
    }

    return fulfillWithValue({
      ...res,
      token
    });
  }
);
// Slice
const authSlice = createSlice({
  initialState,
  name,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsAuth: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    logout: (state: AuthState) => {
      state = {
        token: null,
        isAuth: false,
        isError: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.rejected,
      (state: AuthState, action: PayloadAction<any>) => {
        state.isAuth = false;
        state.isError = true;
        toast.error(action.payload);
      }
    );
    builder.addCase(
      loginUser.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.token = action.payload.access_token;
        state.isAuth = true;
        state.isError = false;
        localStorage.setItem('access_token', action.payload.access_token);
      }
    );
    builder.addCase(
      verifyUserByToken.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.token = action.payload.token;
        state.isAuth = true;
        state.isError = false;
      }
    );
  },
});

export const { setToken, setIsAuth, logout } = authSlice.actions;
export const selectAuthState = (state: RootState) => {
  const { isError, ...authState } = state.auth;
  return authState as {
    token?: string;
    isAuth?: string;
  }[];
};

export default authSlice.reducer;

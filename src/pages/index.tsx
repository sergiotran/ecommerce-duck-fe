import React, { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import {
  loginUser,
  selectAuthState,
} from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const HomePage: NextPage = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector(selectAuthState);

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(
      loginUser({
        email: "thanhcongoccho7@gmail.com",
        password: "occho123",
      })
    );
  }

  return (
    <>
      <button onClick={handleLogin}>Click here to login</button>
    </>
  );
};

export default HomePage;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import BoyBody from "./components/Body/Boy-Body/BoyBody";
import GirlBody from "./components/Body/Girl-Body/GirlBody";
import About from "./pages/About/About";
import Main from "./pages/MainPage/Main";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/body" element={<Body/>}>
          <Route index element={<Body />} />
          <Route path="boy" element={<BoyBody />} />
          <Route path="girl" element={<GirlBody />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

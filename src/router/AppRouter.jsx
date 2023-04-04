import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
// import Footer from "../components/Footer";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import MyBlog from "../pages/MyBlog";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myblogs" element={<MyBlog />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<Dashboard />}/>
          <Route path="" element={<PrivateRouter />}>
            <Route path="detail/:id" element={<Detail />} />
            <Route path="new-blogs" element={<NewBlog />} />
          </Route>
   

  

          

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRouter;

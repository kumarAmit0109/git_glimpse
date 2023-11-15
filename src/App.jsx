import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import UserInfo from "./Routes/UserInfo";
import Users from "./Routes/Users";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
     <div className="min-h-screen bg-[#f7f8fc] dark:bg-slate-900">
      <div div className="container mt-4 text-lg text-slate-700 dark:text-slate-400 py-3">
        <Navbar/>
        <Logo />
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:name" element={<UserInfo />}></Route>
        </Routes>
     </div> 
    </div>
 </div>
  );
};

export default App;

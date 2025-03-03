import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import EmailConfirmation from "./pages/signup/Email";
import Last from "./pages/signup/Last";
import LoginForm from "./pages/signin/Login";
import Forgot from "./pages/forgot/Forgot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/email" element={<Signup />}></Route>
          <Route path="/" element={<EmailConfirmation />}></Route>
          <Route path="/last" element={<Last />}></Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

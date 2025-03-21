import React from "react";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import EmailConfirmation from "./pages/signup/Email";
import Last from "./pages/signup/Last";
import LoginForm from "./pages/signin/Login";
import Forgot from "./pages/forgot/Forgot";
import CheckInbox from "./pages/forgot/Check";
import ResetPassword from "./pages/forgot/Setnew";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/emailconfirm" element={<EmailConfirmation />}></Route>
          <Route path="/last" element={<Last />}></Route>
          <Route path="/" element={<LoginForm />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/check" element={<CheckInbox />} />
          <Route path="/set" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

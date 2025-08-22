import React from "react";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import EmailConfirmation from "./pages/signup/Email";
import CompleteProfileForm from "./pages/signup/Last";
import Forgot from "./pages/forgot/Forgot";
import CheckInbox from "./pages/forgot/Check";
import ResetPassword from "./pages/forgot/Setnew";
import EmailVerificationPage from "./pages/signup/CompleteAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/emailconfirm" element={<EmailConfirmation />} />
          <Route path="/last" element={<CompleteProfileForm />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/check" element={<CheckInbox />} />
          <Route path="/set" element={<ResetPassword />} />
          <Route path="/setup/:token" element={<EmailVerificationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

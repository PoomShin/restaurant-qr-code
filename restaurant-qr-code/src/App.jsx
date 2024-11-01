import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const handleLoginClick = () => {navigate("/admin_login")};
  return (
    <div className="app-main">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/513/899/small_2x/blue-diamond-illustration-png.png" alt="DiamondBu Logo" className="logo-main" />
      <h1 className="title-main">DiamondBu</h1>
      <button className="login-button-main" onClick={handleLoginClick}>เข้าสู่ระบบ</button>
    </div>
  );
}

export default App;

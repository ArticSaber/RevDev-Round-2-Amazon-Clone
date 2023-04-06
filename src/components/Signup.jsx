import React, { useContext } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";
import "./Signup.css";
function Login() {
  const { Email, setEmail, Password, setPassword} =
    useContext(DataContext);
  const nav = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    let { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });
    if (data.user.id) nav("/Login");
    console.log(data, error);
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="/assets/darklogo.png" />
      </Link>
      <div className="login-container">
        <h1>Sign-Up</h1>

        <form>
          <h5>E-mail</h5>
          <input
            placeholder="Email"
            type="email"
            value={Email}
            onChange={(e) => setEmail(() => e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="password"
            value={Password}
            onChange={(e) => setPassword(() => e.target.value)}
          />
        </form>
        <Link to="/Signup">
          <button
            className="signup-button"
            onClick={handleSignup}
            type="submit"
          >
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

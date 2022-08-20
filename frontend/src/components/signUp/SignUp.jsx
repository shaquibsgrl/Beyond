import React from "react";
import { useState } from "react";
import axios from "axios";
import "./signUp.css";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const signup = () => {
    const { email, password, reEnterPassword } = user;
    if (email && password && password === reEnterPassword) {
      alert("posted");
      axios.post("http://localhost:5000/signup", user).then((res) => {
        alert("user created");
        history.push("/login")
      });
    } else {
      alert("invalid data");
    }
  };
  return (
    <div className="register">
      <h1>SignUp</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-Enter your Password"
        onChange={handleChange}
      />
      <div className="button" onClick={signup}>
        SignUp
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/login")}>
        Login
      </div>
    </div>
  );
};

export default SignUp;

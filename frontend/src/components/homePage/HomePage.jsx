import React, { useEffect, useState } from "react";
import axios from "axios"
import "./homePage.css";
const HomePage = ({ setLoginUser }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((res) => {
    //  console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="homepage">
      <h1>Welcome To HomePage</h1>
      <div>
        <h1>Admin Panel</h1>
        <h2>User details</h2>
        {data.map((e) => {
          return <div key={e._id}>{e.email}</div>;
        })}
      </div>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default HomePage;

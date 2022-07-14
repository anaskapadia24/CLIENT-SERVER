//[] client: srcc/components/screens/Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    fetch("/signup",{
      method:"post",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:"",
        password:"",
        email:""
      })
    }).then(res=>res.json())
    .then(data=>{console.log(data)})
  }

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaBook</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn waves-effect waves-light" onClick={()=>PostData()} >Sign Up</button>
        <h5>
          <Link to="/signin">Already have an account</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;

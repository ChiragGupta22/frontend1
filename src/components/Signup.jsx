import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/signup.css";
import api from "../lib/axios";
export default function Signup() {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      const res = await api.post("/auth/register", {
        username: userdata.username,
        email: userdata.email,
        password: userdata.password,
      });
      console.log(res.data);

      alert("Signup Successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="sign">
      <div className="signup-glass">
        <h1>Sign Up</h1>
        <p>Create your free account</p>

        <div className="field">
          <input
            onChange={(event) =>
              setUserdata({ ...userdata, username: event.target.value })
            }
            type="text"
            name="username"
            placeholder="Enter Name"
          />
        </div>

        <div className="field">
          <input
            onChange={(event) =>
              setUserdata({ ...userdata, email: event.target.value })
            }
            type="text"
            name="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="field">
          <input
            onChange={(event) =>
              setUserdata({ ...userdata, password: event.target.value })
            }
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>

        <button type="submit" onClick={handleSignup} className="signup-btn">
          Create Account
        </button>

        <div className="bottom-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/Login")}>Login</span>
        </div>
      </div>
    </div>
  );
}

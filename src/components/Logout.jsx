import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import "../style/logout.css";
import { Hand } from "lucide-react";
import { AuthContext } from "../services/AuthProvider";

export default function Logout() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await api.post("/auth/logout");
        setUser(null);
      } catch (error) {
        console.error(error);
      }
    };

    logoutUser();

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="emoji">
          <Hand />
        </div>
        <h1>Goodbye!</h1>
        <p>Thanks for using our Todo App</p>
        <p className="sub-text">We hope to see you again soon</p>

        <div className="loader"></div>
        <span className="redirect-text">Redirecting to login...</span>
      </div>
    </div>
  );
}

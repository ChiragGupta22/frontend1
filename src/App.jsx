import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import List from "./components/List";
import Update from "./components/Update";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/List" element={<List />} />
        <Route path="/Addtask" element={<TodoList />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;

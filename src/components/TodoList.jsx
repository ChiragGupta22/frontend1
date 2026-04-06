import { useState } from "react";
import "../style/todolist.css";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import List from "./List";
export default function TodoList() {
  const [taskdata, settaskdata] = useState({
    title: "",
    description: "",
  });

  const navi = useNavigate();

  const addtask = async (e) => {
    e.preventDefault();
    console.log("button clicked");

    try {
      const res = await api.post("/todo/create-todo", taskdata, {
        withCredentials: true,
      });
      navi("/List");
    } catch (err) {
      console.error("Add Task Error:", err);
      alert(err.response?.data?.message || "Server error");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Add new task</h1>

        <label>Title</label>
        <input
          onChange={(event) =>
            settaskdata({ ...taskdata, title: event.target.value })
          }
          type="text"
          name="title"
          placeholder="Enter Your Title"
        />

        <label>description</label>
        <textarea
          onChange={(event) =>
            settaskdata({ ...taskdata, description: event.target.value })
          }
          name="description"
          placeholder="Enter Your Task description"
        ></textarea>

        <button type="submit" onClick={addtask} className="submit">
          Add new task
        </button>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import "../style/todolist.css";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";

export default function Update() {
  const [taskdata, settaskdata] = useState({ title: "", description: "" });
  const navi = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/todo/update-todo/${id}`);
        const data = res.data;

        if (res.status === 200) {
          settaskdata(data.todo);
        } else {
          alert("Task not found");
        }
      } catch (error) {
        // console.error(error);
      }
    };

    fetchTask();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/todo/update-todo/${id}`, taskdata);
      const data = res.data;

      if (res.status === 200) {
        alert("Task Updated");
        navi("/List");
      } else {
        alert(data.message || "Error updating task");
      }
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <div className="container">
      <h1>Update Task</h1>
      <form onSubmit={handleUpdate}>
        <label>Title</label>
        <input
          type="text"
          value={taskdata.title || ""}
          onChange={(e) => settaskdata({ ...taskdata, title: e.target.value })}
        />

        <label>Description</label>
        <textarea
          value={taskdata.description || ""}
          onChange={(e) =>
            settaskdata({ ...taskdata, description: e.target.value })
          }
        />
        <button type="submit" className="submit">
          Update Task
        </button>
      </form>
    </div>
  );
}

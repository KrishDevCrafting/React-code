import React, { useState } from "react";

const Pind = () => {
  const [value, setValue] = useState({ title: "", date: "", Task: "" });
  const [Todo, setTodo] = useState([]);

  const handleWork = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({ ...value, [name]: inputValue });
  };

  const Submit = (e) => {
    e.preventDefault();
    setTodo([...Todo, value]);
    setValue({ title: "", date: "", Task: "" });
  };

  const handleDelete = (index) => {
    const newFormData = [...Todo];
    newFormData.splice(index, 1);
    setTodo(newFormData);
  };

  return (
    <>
      <div className="container my-5">
        <form onSubmit={Submit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            id=""
            value={value.title}
            className="form-control"
            onChange={handleWork}
          />
          <label>Date:</label>
          <input
            type="date"
            name="date"
            id=""
            value={value.date}
            className="form-control"
            onChange={handleWork}
          />
          <label>Task:</label>
          <input
            type="text"
            name="Task"
            value={value.Task}
            className="form-control"
            onChange={handleWork}
          />
          <button type="submit">Save</button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Todo.map((data, index) => (
              <tr key={index}>
                <td>{data.title}</td>
                <td>{data.date}</td>
                <td>{data.Task}</td>
                <td>
                  <span
                    onClick={() => handleDelete(index)}
                    style={{ cursor: "pointer" }}
                    className="material-symbols-outlined">
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pind;

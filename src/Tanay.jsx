import { useState } from "react";

const Todo = () => {
  const [formData, setFormData] = useState({ title: "", date: "", task: "" });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ title: "", date: "", task: "" });
  };

  const handleDelete = (index) => {
    const newFormData = [...tableData];
    newFormData.splice(index, 1);
    setTableData(newFormData);
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <label>Date:</label>
        <input
          className="form-control"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />

        <label>Task:</label>
        <input
          className="form-control"
          type="text"
          name="task"
          value={formData.task}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary my-2">
          Save
        </button>
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
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.date}</td>
              <td>{data.task}</td>
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
      {tableData.length === 0 && (
        <h1 className="text-danger text-center">No Data Found !</h1>
      )}
    </div>
  );
};
//json server Xios//
export default Todo;

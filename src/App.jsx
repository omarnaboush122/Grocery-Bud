import { useState } from "react";
import Alert from "./Alert";
import List from "./List";
import { nanoid } from "nanoid";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    message: "hello",
    type: "success",
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      const newItem = {
        id: nanoid(),
        title: name,
      };

      setList([...list, newItem]);
      setName("");
    }
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;

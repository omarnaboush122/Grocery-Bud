import { useState } from "react"
import Alert from "./Alert";
import List from "./List";


function App() {
  const [name,setName] = useState("");
  const [list,setList] = useState([]);
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({
    show: false,
    message: "",
    type: ""
  })

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g eggs" value={name} onChange={handleChange}/>
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List/>
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  )
}

export default App

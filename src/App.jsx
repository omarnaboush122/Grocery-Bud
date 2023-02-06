import { useState } from "react"


function App() {
  const [name,setName] = useState("");
  const [list,setList] = useState([]);
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({})

  return (
    <div className="App">
      
    </div>
  )
}

export default App

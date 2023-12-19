import React, { useState } from 'react;'
import './index.css'

function App() {

  const [newItem, setNewItem] = useState("");
return(


<div className="app">
<h1>My ToDo List </h1>

<input
type="text"
placeholder="Add an item..."
value={newItem}>
</input>

<button>Add</button>

<ul>
  <li></li>
</ul>



</div>
)
}

export default App

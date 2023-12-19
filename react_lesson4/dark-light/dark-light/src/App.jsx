import React from "react";
import Container from "./Container";
import "./index.css";

function App() {
const [darkMode, setDarkMode] = React.useState(true)
function toggleDarkMode(){
  setDarkMode((previousMode) => !previousMode)
}
  return(
<div  className="container">
  <Container darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Container>
</div>

  );

  
}

export default App

import React from "react";
import reactLogo from "./assets/react.svg"

function Container(props){
return(
    <div id="main" className={props.darkMode ? "dark" : ""}>
        <img className="logo" src={reactLogo}></img>
        <h3 className="text">React</h3>
<div className="toggler">
    <p className="">Light</p>
    <div className="toggler-slider" onClick={props.toggleDarkMode}>
<div className="toggler-circle"></div>
    </div>
    <p className="toggler-dark">Dark</p>
</div>
</div>

)


}
export default Container;
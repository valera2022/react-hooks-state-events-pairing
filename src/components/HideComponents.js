import React from "react";
import Comments from "./Comments";

function HideComponents({hideComms,commentState,toggle,setToggle}){
    console.log(commentState)

    function handleClick(event){
        console.log(event.target.value)
        hideComms(event.target.value)
        setToggle(!toggle )
        

    }
    return(
    <div>
         <button onClick={handleClick} value={commentState}className="btn btn-outline-dark">{toggle == true? "Hide Comments" : "Show Comments" }</button>
         <hr></hr>
         {/* <Comments/>  */}
    </div>
   
    )
}

export default HideComponents
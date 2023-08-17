import React from "react";

const Child = ({setInputValue})=>{
    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
        </div>
    )
}

export default Child
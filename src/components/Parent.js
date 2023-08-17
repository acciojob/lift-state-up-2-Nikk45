import React, { useState } from "react";
import Child from './Child'

const Parent = ()=>{

    let [inputValue, setInputValue] = useState()

    console.log(inputValue);

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            {
                inputValue && <p>{inputValue}</p>
            }
            <Child setInputValue={setInputValue}/>

        </div>
    )
}

export default Parent
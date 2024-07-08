import React from "react"

const Input = ({label, id, setValue, ...props}) =>{
    return(
       <div>
        <label htmlFor="">{label}</label>
        <input type="text"
        id={id}
        name={id}
        onChange={({target})=>setValue(target.value)}
        />
       </div>
    );
};

export default Input
import React, {useState} from "react";

function ToDo(props){

    const {runcuks, setRuncuks} = useState(props.completed);
    function handleChange(event){
        setRuncuks(event.target.checked);
    }
    
    return (
        <>
        <p>userId: {props.userId}</p> 
    <p>id:{props.id}</p>
    <p>{props.title}</p>
    <input type = "checkbox" checked = {runcuks} onChange = {handleChange}></input>
        </>
    );
}

export default ToDo;
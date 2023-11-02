import {useState} from "react";


function ToDo(props){

    const [runcuks, setRuncuks] = useState(props.completed);
    function handleChange(event){
        setRuncuks(event.target.checked);
    }
    
    return (
        <>
        <p>userId: {comment.userId}</p> 
    <p>id:{comment.id}</p>
    <p>{comment.title}</p>
    <input type = "checkbox" checked = {runcuks} onChange = {handleChange}></input>
        </>
    );
}

export default ToDo;
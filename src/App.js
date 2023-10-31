import { useEffect, useState } from "react";
import ToDo from "./ToDo";


function App() {
  const [toDo, setToDo] = useState({});
  
useEffect(() => {
  getToDo();
  async function getToDo(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/69");
    const data = await response.json();
    setToDo(data);
  }
}, [])


  // const toDo ={
  //   userId: 1, 
  //   id:1,
  //   title:"delecatus aut autem",
  //   completed: false,
  // };
  return (
    
      <ToDo {...toDo}/>
    
  );
}

export default App;

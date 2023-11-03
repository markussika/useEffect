import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Comment from "./Comment";

import Post from "./Post"

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  async function getToDo(){
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/3"
    );
    const data = await response.json();
      setToDo(data);
      setLoading(false);
    
  }
  getToDo()
},[]);


  // const toDo ={
  //   userId: 1, 
  //   id:1,
  //   title:"delecatus aut autem",
  //   completed: false,
  // };
  return (
    <>
      {loading ? <p>loading...</p> : <ToDo {...toDo}/> }
      <Comment />
      <Post />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Comment from "./Comment";

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);
  



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
    </>
  );
}

export default App;

import ToDo from "./ToDo";


function App() {
  const toDo ={
    userId: 1, 
    id:1,
    title:"delecatus aut autem",
    completed: false,
  };
  return (
    
      <ToDo {...toDo}/>
    
  );
}

export default App;

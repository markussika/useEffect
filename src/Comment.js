




function Comment() {
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    getComment();
    async function getComment(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  
      const data = await response.json();
      setComment(data);
      
    setLoading(false);
    }
    getComment();
  }, [])}




  export default Comment;
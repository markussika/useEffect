import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

function PostList(){
    const [posts, setPosts] = useState([]);
useEffect(() => {
    async function getPosts(){
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        const data = await response.json();
          setPosts(data);
         
        
      }
      getPosts()
}, []);

const postsJSX = posts.map((post, index) => {
    return <Post key={index} {...post}/> 
});

return (
    
<div>{postsJSX}</div>
    
)
}

export default PostList;
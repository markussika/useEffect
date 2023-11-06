function Post(props){
    return (
        <>
        <div>
    <p>UserId: {props.userId}</p>
      <p>Id: {props.id}</p>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
        </div>
        </>
    )
}
export default Post;
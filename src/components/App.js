import { useState } from "react";
import video from "../data/video.js";
import "bootstrap/dist/css/bootstrap.min.css";
import LikeButton from "./Likebutton.js";
import Comments from "./Comments.js"
import HideComponents from "./HideComponents.js";
import { createPortal } from "react-dom";

function App() {
   const[commentState,setComments]=useState(video.comments)
   const[toggle,setToggle]=useState(true)
   console.log(commentState)

   function hideComms(clickData){
    console.log(clickData)

    
        
   }
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{"views"+ video.views} | {"uploaded" + video.createdAt}</p>
      <LikeButton upvotes={video.upvotes}  downvotes={video.downvotes}/>
      <HideComponents toggle={toggle} setToggle={setToggle} hideComms={hideComms} commentState={commentState}/>
      {toggle === true? <Comments comments={commentState} /> : null }
     
      
    </div>
  );
}

export default App;

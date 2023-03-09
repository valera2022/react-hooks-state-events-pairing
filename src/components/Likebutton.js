import {React, useState} from "react";


function LikeButton({upvotes,downvotes}){
    console.log(downvotes)
    console.log(upvotes)
    const[like,setLike]= useState(upvotes)
    const[dislike,setDislike]= useState(downvotes)
    return(
        <div>
            <button onClick={handleLike} className="btn btn-outline-dark">{like} 👍</button>| 
            <button onClick={handleDislike} className="btn btn-outline-dark">{dislike}👎</button>
        </div>
    )

function handleLike(){
        setLike(()=>like+1)

}

function handleDislike(){
         setDislike(()=>dislike+1)
}






}




export default LikeButton
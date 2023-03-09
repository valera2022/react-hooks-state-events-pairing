import React from "react"
import { v4 as uuidv4 } from 'uuid';


function Comments({comments}){
    console.log(comments)
    //const[commentData,setCommentData]= useState(comments)
   // console.log(commentData)
    //setCommentData(handleClick)

   
    
    
    return(
        <div>

     {comments.map((comment ) => {
        console.log(comment)
      return(
        <div>
            <ul key={uuidv4()}>{comment.user}</ul>
      
            <ul>{comment.comment}</ul>
        </div>
      )
             
     })}
        </div>
    )

}



export default Comments
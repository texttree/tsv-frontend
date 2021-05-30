import React from "react";

import {Books} from './config'


function SendError({
    reference,
    bookId,
    resource,
    serverLink,
    fields
    
  }) {
  
  const checkReference = (reference.match(/\d+\:\d+([abc]?)(\-\d+)?[abc]?/))?true:false;
  const checkBookId = Books.includes(bookId);
  const checkResource = (resource.match(/^[a-z]+$/i))?true:false;
  let answerError={error: false, message:"Sending was successful"}
  
  if (checkReference && checkBookId  && checkResource) {
   const handleSend =()=> {
  
    fetch(serverLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:'type=' + 
      encodeURIComponent(resource) +
      '&bookId=' + 
      encodeURIComponent(bookId) +
      '&ref=' + 
      encodeURIComponent(reference) +
      '&selected=' +
      encodeURIComponent(fields.quote) +
      '&comment=' +
      encodeURIComponent(fields.comment) 
         })}
      
    handleSend()
  } else {
    answerError={error:"11",message:"Incorrect format of reference"}
  }

  return (answerError );
}
export default SendError;
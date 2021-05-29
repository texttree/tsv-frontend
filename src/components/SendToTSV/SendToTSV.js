import React from "react";
import {Books,Types} from './config'


function SendToTSV({
    reference,
    bookId,
    type,
    resourse,
    fields:{
      quote,
      comment
    }
   
  
}) {
  
  const checkReference = (\d+\:\d+([abc]?)(\-\d+)?[abc]?)
  const checkBookId = (Books.includes(bookId))?true:false;
  const checkType = (Types.includes(type))?true:false;
  // if reference === 

  
   const handleSend =()=> {
  
    fetch(reference.serverLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:'type=' + 
      encodeURIComponent(reference.resource) +
      '&bookId=' + 
      encodeURIComponent(reference.bookId) +
      '&ref=' + 
      encodeURIComponent(reference.chapter+':'+reference.verse) +
      '&selected=' +
      encodeURIComponent(reference.textSelected) +
      '&comment=' +
      encodeURIComponent(reference.comment) 
    })}
      
    handleSend()
  
  
  return (null );
}
export default SendToTSV;
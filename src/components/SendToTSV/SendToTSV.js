import React from "react";
import {Books,Types} from './config'


function SendToTSV({
    reference,
     bookId,
     type,
     resource,
    //  fields:{
    //    quote,
    //    comment
    //  },
   
  
}) {
  
  const checkReference = (reference.match(/\d+\:\d+([abc]?)(\-\d+)?[abc]?/))?true:false;
  const checkBookId = (Books.includes(bookId))?true:false;
  const checkType = (Types.includes(type))?true:false;
  const checkResource = (resource.match(/^[a-z]+$/i))?true:false;
  
  if (checkReference && checkBookId && checkType && checkResource) {
   const handleSend =()=> {
  
    fetch(reference.serverLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:'type=' + 
      encodeURIComponent(resource) +
      '&bookId=' + 
      encodeURIComponent(bookId) +
      '&ref=' + 
      encodeURIComponent(reference) 
      // '&selected=' +
      // encodeURIComponent(quote) +
      // '&comment=' +
      // encodeURIComponent(comment) 
    })}
      
    handleSend()
  } else {
    alert("Проверьте правильность написания");
  }

  

  
  
  
  
  return (null );
}
export default SendToTSV;
import React from "react";
import {Books,Types} from './config'


function SendToTSV({
    reference,
     bookId,
    // type,
    // resource,
    // fields:{
    //   quote,
    //   comment
    // }
   
  
}) {
  
  const checkReference = (reference.match(/\d+\:\d+([abc]?)(\-\d+)?[abc]?/))?true:false;
  const checkBookId = (Books.includes(bookId))?true:false;
  const checkType = (Types.includes(type))?true:false;
  console.log(checkBookId);

  
  //  const handleSend =()=> {
  
  //   fetch(reference.serverLink, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body:'type=' + 
  //     encodeURIComponent(reference.resource) +
  //     '&bookId=' + 
  //     encodeURIComponent(reference.bookId) +
  //     '&ref=' + 
  //     encodeURIComponent(reference.chapter+':'+reference.verse) +
  //     '&selected=' +
  //     encodeURIComponent(reference.textSelected) +
  //     '&comment=' +
  //     encodeURIComponent(reference.comment) 
  //   })}
      
  //   handleSend()
  
  
  return (null );
}
export default SendToTSV;
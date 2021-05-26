import React from "react";



function SendToTSV({
 reference
  
}) {

  
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
      
    
  
  
  return ( handleSend);
}
export default SendToTSV;
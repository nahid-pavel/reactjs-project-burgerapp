import React from 'react';
import Modal from 

const withErrorHandler = (WrappedComponent)=>{

   return (props)=>{
   
    return(
    
        <Modal>
          Something didn't work
       </Modal>
   
       <WrappedComponent {...props} />
       
    );
   
   
   }



}


export default withErrorHandler ;

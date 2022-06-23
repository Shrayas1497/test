
import React from 'react'

const Modal =props => {
  if (!props.data){
      return  null
  }
    return (
    <div className='modal' onClick={props.onClose}>
    <div className="modal-content" onClick={e=>e.stopPropagation()}>
    <div className="modal-header">
    <button onClick={props.onClose} className="button">close</button>
    <img src={props.data.thumbnail.large}/>

</div>
<div className='modal-body'>
        <h3>
        {props.data.title}
   
        </h3>
             

        <p>
        {props.data.content}
        
        </p>
     <div className='author__info' style={{}}>
     <img src={props.data.author.avatar} className='author__image'/>  
     <p className='author__name'> {props.data.author.name}</p>
     </div>
    
    
</div>
<div className='modal-footer'>
    
</div>


 </div>

 
            </div>
 
  )
}

export default Modal
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import React from "react";
import { useState } from "react";
import "./App.css";  


      
import db from "./db.json" ; 
import Modal from "./Modal";



const App = () => {
const [data,setData]=useState(null)  
 
// const handleClick = () =>{
//     console.log('add click logic');
//   }
  return (
    <>
    <h1> Blog App using React Js</h1>   
      <div className="blog__app">
      
      {
        db && db.map(value=>{ // if data exsist before or not
        console.log(value)
          return (
          <div className="box" key={value.id} >
              <img src={value.thumbnail.small} />
            <h3>
           { value.title}  
           </h3>
          <p className="box__content">
          {value.content}
            </p>           
           <div className="info-container" > 
            <div>
             {value.author.name}-{value.author.role}
             

             </div>

             
             <div>
             
             <SimpleDateTime>{value.date}  </SimpleDateTime>            
          </div>
            </div>
             <button onClick={()=> setData(value)}>
               view
             </button>

             <Modal onClose={()=> setData(null)} data={data} />
             
             </div>
             
             )})
            

          }

</div>
</>

);
  }
  export default App;
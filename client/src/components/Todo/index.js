import React, { Component } from 'react';

export function Todo(props) {
  // Renderiza un To-do, este componente funcional necesita: onClick - para actualizar el To-do, onClickDelete - para eliminar el To-do y el props.text para el texto del To-do
  // props.id para que sea usado en un futuro en onClickDelete
  return (
    <div className='row' style={{margin: "20px"}}>
        
        <div className="jumbotron jumbotron-fluid mx-auto" style={{width: "100%", "padding": "0px", borderRadius: "0.25rem" }}>
        <div style={{width: "50px" }} className="d-flex justify-content-end">
                <button style={{width: "50px"}} onClick={props.onClick} className='btn btn-primary' id={props.id}>
                  <i className="fa fa-pencil" style={{fontSize:"36px"}}>
                  </i>
                </button>
            </div>
          <div className='container'>
            {props.isComplete === "true" ? <h1 className="display-4 text-center" style={{textDecoration: "line-through"}}>{props.title}</h1> : <h1 className="display-4 text-center">{props.title}</h1>}

            {props.isComplete === "true" ? <p className="lead text-center" style={{textDecoration: "line-through"}}>{props.content}</p> : <p className="lead text-center">{props.content}</p>}
          
            
                  
            <div style={{width: "50px", margin: "15px"}} className="mx-auto">
              <button style={{width: "50px" }} onClick={props.onClickDelete} className='btn btn-danger' id={props.id}>x</button>
            </div>
   
            {props.isComplete === "true" ? <p>Created at: {props.date}&#9989;</p> : <p>Created at: {props.date}</p>}
           </div>
           
           
        </div>
    
    </div>
  );
};


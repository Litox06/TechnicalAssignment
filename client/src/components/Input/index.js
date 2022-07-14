import { process_params } from 'express/lib/router';
import React from 'react';

// Todo creator (input text for new todo)

export function Input(props) {
  return (
    <div className='row' style={{margin: "20px"}}>
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">To-do: </span>
            </div>
            
            <textarea className="form-control"  name={props.name} value={props.value} onChange={props.onChange}></textarea>
            <button onClick={((e) => {props.onClick(e)})} className='btn btn-primary'>✓</button>
        </div>
        
    </div>
  );
};

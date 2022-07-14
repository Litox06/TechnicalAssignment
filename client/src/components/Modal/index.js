import React from "react";

// Requeriendo los elementos de Bootstrap en React Bootstrap para hacer el modelo
import MainModal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export function Modal(props) {
  return (
    <MainModal show={props.open} >
      <ModalHeader>
        <ModalTitle>Update To-do</ModalTitle>
      </ModalHeader>
      {props.isComplete === "false" ? 
         <ModalHeader>
          <ModalTitle>Is the task done?</ModalTitle>
          <ModalTitle> <button onClick={props.onClickDone} className='btn btn-primary'>✓</button></ModalTitle>
         </ModalHeader> 
         : 
         ""}

      
      <div style={{margin: "15px"}}>
        <textarea  className="form-control" name={props.title_name} value={props.modalTitle} onChange={props.onChange}></textarea>
      </div>
      <div style={{margin: "15px"}}>
        <textarea  className="form-control" name={props.content_name} value={props.modalContent} onChange={props.onChange}></textarea>
      </div>
      <ModalFooter>
          <button onClick={props.onClickModalClose} className='btn btn-danger'>x</button>
          <button onClick={props.onClickUpdate} className='btn btn-primary'>✓</button>
      </ModalFooter>
    </MainModal>
  );
};

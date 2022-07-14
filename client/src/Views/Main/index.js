import React, { Component } from "react";
import { Todo } from "../../components/Todo/index";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import API from "../../utilities/apiCalls";

class Home extends Component {

  state = {
    data: [],
    textInput: "",
    modal: false,
    modalTitle: "",
    modalContent: "",
    currentId: "",
    todoStatus: false
  };

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos = () => {
    // Settea la data al array de objetos JSON en la respuesta obtenida por Express
    API.getAllTodos().then((response) => {
      this.setState({ data: response.data })
    });
  }

  createTodo = (title, content) => {
    // Haciendo un llamado al API con un body de POST /todo en Express
    return API.createTodo({ "title": title, "content": content })
  }

  handleCompleteTask = () => {
    // Request para actualizar el status del To-do
    API.updateTodoStatus(this.state.currentId, { "isComplete": true }).then((data) => {
      this.refreshTodos();
      this.setState({ modal: false });
    })

  }

  handleDeleteButton = (e, id) => {
    // Request para eliminar To-do
    API.deleteOneTodo(id).then((response) => {
      this.refreshTodos();
    });
  }

  handleInputOnClick = (e) => {
    // Enviar text input a la funcion createTodo
    this.createTodo(this.state.textInput, "").then(() => {
      // Poner input text vacio
      e.target.value = "";
      this.setState({ textInput: "" });

      // Render all todos with new todo
      // Renderizar todos los To-do con el nuevo To-do
      this.refreshTodos();
    });
  }

  todoClickHandler = (id, title, content, status) => {
    // En esta funcion importo los valores del To-do en el modal, puedo poner el texto en el input
    // y tambien actualizar el To-do con el To-do actual que esta en el modal.
    this.setState({ modalTitle: title });
    this.setState({ modalContent: content });
    this.setState({ currentId: id });
    this.setState({ todoStatus: status });
    this.setState({ modal: true });

  }

  modalClose = () => {
    this.setState({ modal: false });
  }

  modalUpdateBtn = () => {
    console.log(this.state.modalTitle);
    console.log(this.state.currentId);

    API.updateOneTodo(this.state.currentId, { title: this.state.modalTitle, content: this.state.modalContent }).then((data) => {
      alert("To-do updated successfully");
      this.refreshTodos();
      this.setState({ modal: false });
    }).catch((err) => {
      alert("DB error detected.");
      console.log(err);
    })
  }

  // Instantaneamente pone el input del usuario en el state
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };


  render() {
    return (
      <div>
        <h1 className="text-center">To-do list&#9201;</h1>
        <Modal
          title_name="modalTitle"
          content_name="modalContent"
          open={this.state.modal}
          modalTitle={this.state.modalTitle}
          modalContent={this.state.modalContent}
          isComplete={this.state.todoStatus}
          onChange={this.handleInputChange}
          onClickModalClose={this.modalClose}
          onClickUpdate={this.modalUpdateBtn}
          onClickDone={this.handleCompleteTask}
        />
        <Input
          name="textInput"
          value={this.state.textInput}
          onClick={this.handleInputOnClick}
          onChange={this.handleInputChange}
        />

        {this.state.data.map(todo => (
          // Mapping cada objeto del To-do
          <Todo
            id={todo._id}
            key={todo._id}
            title={todo.title}
            content={todo.content}
            onClickDelete={((e) => this.handleDeleteButton(e, todo._id))}
            // Obteniendo el texto y el id del To-do actual para poder usarlo en un futuro
            onClick={((e) => this.todoClickHandler(todo._id, todo.title, todo.content, todo.isComplete))}
            isComplete={todo.isComplete}
            date={new Date(todo.created_at).toDateString()}
          />
        ))}
      </div>
    );
  };
};

export default Home;
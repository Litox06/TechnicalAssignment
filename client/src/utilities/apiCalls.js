import axios from "axios";

const getAllTodos = () => {
  return axios({
    method: "get",
    url: "/todo",
  });
}

const createTodo = (body) => {
return axios({
  method: "post",
  url: "/todo",
  data: body
});
}

const updateOneTodo = (id, body) => {
return axios({
  method: "put",
   // Example of request : /todo/A8dd8f9d9s0d7
  url: "/todo/" + id,
  data: body
});
}

const deleteOneTodo = (id) => {
return axios({
  method: "delete",
  // Example of request : /todo/A8dd8f9d9s0d7
  url: "/todo/" + id,
});
}

const updateTodoStatus = (id, body) => {
  return axios({
    method: "put",
     // Example of request : /todo/A8dd8f9d9s0d7
    url: "/status/" + id,
    data: body
  });
  }

const objectToExport = {
    getAllTodos,
    createTodo,
    updateOneTodo,
    deleteOneTodo,
    updateTodoStatus
}

export default objectToExport;
 
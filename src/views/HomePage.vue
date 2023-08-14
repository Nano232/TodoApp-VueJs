<template>
  <div class="container">
    <h1>Add New Todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        v-model="todoObject.text"
        placeholder="Enter Your Todo"
        required
      />
      <input type="submit" value="Add" />
      <br />
      <input
        type="date"
        v-model="todoObject.form"
        name=""
        id=""
        placeholder="from"
        required
      />
      <input
        type="date"
        v-model="todoObject.to"
        name=""
        id=""
        placeholder="to"
        required
      />
    </form>
  </div>
</template>

<script setup>
// Data
import { ref, onMounted } from "vue";
const todoList = ref([]);
const todoObject = ref({
  id: "",
  text: "",
  form: "",
  to: "",
  createdAdd: "",
  isCompleted: false,
});

// Methods
// Add Todo
const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoObject.value.createdAdd = new Date();
  todoList.value.push(todoObject.value);
  AddToLocalSt();
  alert("Todo Was Added Successfully");
  todoObject.value = {
    id: "",
    text: "",
    form: "",
    to: "",
    createdAdd: "",
  };
};

// Set To Local Storage
const AddToLocalSt = () => {
  localStorage.setItem("Todos", JSON.stringify(todoList.value));
};

// Update Todo List
const UpdateTodos = () => {
  if (localStorage.getItem("Todos")) {
    todoList.value = JSON.parse(localStorage.getItem("Todos"));
  }
};

// Hooks
onMounted(() => {
  UpdateTodos();
});
</script>

<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
    margin: 0 10px 0 0;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 20px;
    background-color: #2eb72e;
    color: white;
    border: 1px solid #2eb72e;
    border-radius: 5px;
  }
  input[type="date"] {
    margin: 20px 10px;
  }
}
</style>

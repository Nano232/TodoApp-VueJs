<template>
  <div class="show-todos">
    <h1>Show Todos</h1>
    <table v-if="todoList.length > 0">
      <thead>
        <tr>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background: #4ed17194'
              : ' background: transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.form }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAdd).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="markCompleted(todo)">
                {{ todo.isCompleted ? "Incompleted" : "Completed" }}
              </button>
              <button @click="deleteTodo(index)" class="delete">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else style="line-height: 15">No Todos To Show</h2>
  </div>
</template>

<script setup>
// Data
import { onMounted, ref } from "vue";
const todoList = ref([]);

// Methods
const UpdateTodos = () => {
  if (localStorage.getItem("Todos")) {
    todoList.value = JSON.parse(localStorage.getItem("Todos"));
  }
  console.log(todoList.value);
};

// Delete Todo
const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  AddToLocalSt();
};

// Set To Local Storage
const AddToLocalSt = () => {
  localStorage.setItem("Todos", JSON.stringify(todoList.value));
};

// Mark As COmpleted
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  AddToLocalSt();
};

onMounted(() => {
  UpdateTodos();
});
</script>

<style scoped lang="scss">
tr,
td,
th {
  border: 1px solid;
  padding: 5px;
}
table {
  width: 100%;
  button {
    background-color: #2eb72e;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #2eb72e;
    margin: 0 5px;
    &.delete {
      background-color: red;
    }
  }
}
</style>

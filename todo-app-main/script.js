const app = new Vue({
  el: "#app",
  data() {
    return {
      newTodo: null,
      todos: [],
      filter: "all",
      darkTheme: true,
    };
  },
  methods: {
    addNewItem() {
      if (this.newTodo && !this.isKeyPresent(this.newTodo)) {
        const obj = new Object();
        obj.todo = this.newTodo;
        obj.checked = false;
        this.todos.push(obj);
        this.newTodo = null;
      }
    },
    deleteItem(todoToDelete) {
      this.todos = this.todos.filter((todo) => todo.todo !== todoToDelete);
    },
    deleteAllCompleted() {
      this.todos = this.todos.filter((todo) => !todo.checked);
    },
    isKeyPresent(todo) {
      return this.todos.find((value) => value.todo === todo);
    },
  },

  computed: {
    filteredTodos() {
      if (this.filter === "active") {
        return this.todos.filter((todo) => !todo.checked);
      } else if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.checked);
      } else return this.todos;
    },
  },

  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        app.addNewItem();
      }
    });
  },
});

const sun = document.querySelector(".icon-sun");
const moon = document.querySelector(".icon-moon");

moon.addEventListener("click", () => {
  sun.classList.add("show");
  moon.classList.remove("show");
  document.body.classList.remove("light");
});

sun.addEventListener("click", () => {
  moon.classList.add("show");
  sun.classList.remove("show");
  document.body.classList.add("light");
});

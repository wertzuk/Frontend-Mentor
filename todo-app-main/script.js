const app = new Vue({
  el: "#app",
  data() {
    return {
      newTodo: null,
      todos: [],
      checked: [],
    };
  },
  methods: {
    addNewItem() {
      if (this.newTodo && !this.todos.includes(this.newTodo)) {
        this.todos.push(this.newTodo);
        this.newTodo = null;
      }
    },
    deleteItem(index) {
      const item = this.todos[index];
      if (this.checked.includes(item)) {
        const checkedIndex = this.checked.indexOf(item);
        this.checked.splice(checkedIndex, 1);
      }
      this.todos.splice(index, 1);
    },
    getAllActive() {
      return this.todos.filter((todo) => !this.checked.includes(todo));
    },
    getAllCompleted() {
      return this.todos.filter((todo) => this.checked.includes(todo));
    },

    deleteAllCompleted() {
      this.todos = this.getAllActive();
      this.checked.clear();
    },
    showActive() {
      this.todos = this.getAllActive();
    },
    showCompleted() {
      this.todos = this.getAllCompleted();
    },
    showAll() {
      this.todos = this.getAllActive.concat(this.getAllCompleted);
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

/*Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no*/

const { createApp } = Vue;

createApp({
	data() {
		return {
			todoList: [],
			newTodo: '',
			error: ''
		}
	},
	methods: {
		addItem() {
			const newItem = {
				text: this.newTodo,
				done: false
			}

			if (this.newTodo != '') {
				this.todoList.push(newItem);
				this.newTodoItem = '';
			} else {
				this.error = true;
			}


		},
		completedItem(index) {
			this.todoList[index].done = !this.todoList[index].done;
		},
		deleteItem(index) {
			this.todoList.splice(index, 1)
		}
	}
}).mount('#app');
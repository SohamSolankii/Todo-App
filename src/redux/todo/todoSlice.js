import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {  // contains properties and functions(which give state and actions)
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload
			}
			state.todos.push(todo)
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
		},
		updateTodo: (state,action) => {
			const todo = state.todos.find(todo => todo.id === action.payload.id)
			todo.text = action.payload.text
		}
	}
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // for change into component
export default todoSlice.reducer  // to give store


// state: will give current state 
// actions: will give id kind of stuff in which id we need to peroform task
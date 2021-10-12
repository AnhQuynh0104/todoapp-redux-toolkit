import { createSlice } from "@reduxjs/toolkit"

const TodoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "cook", completed: false },
    { id: 2, title: "play", completed: false },
    { id: 3, title: "learn", completed: true }
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    }
  }
})

export const { addTodo, deleteTodo, toggleComplete } = TodoSlice.actions

export default TodoSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const TodoSlice = createSlice({
  name: "todos",
  initialState: [],
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

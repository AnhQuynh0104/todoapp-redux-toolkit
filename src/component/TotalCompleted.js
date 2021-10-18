import { useSelector } from "react-redux"
import styled from "styled-components"

const TextTotal = styled.p`
  padding-top: 20px;
  font-weight: bold;
`

const TotalCompleted = () => {
  const completedTodos = useSelector(state =>
    state.todos.filter(todo => todo.completed === true)
  )
  return <TextTotal>Total completed todos: {completedTodos.length} </TextTotal>
}

export default TotalCompleted

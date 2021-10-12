import { useSelector } from "react-redux"
import styled from "styled-components"
import ItemTodo from "./ItemTodo"

const List = styled.ul`
  width: 100%;
`

const ListTodo = () => {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <List>
        {todos.map(todo => (
          <ItemTodo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </List>
    </>
  )
}

export default ListTodo

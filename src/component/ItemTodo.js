import { useDispatch } from "react-redux"
import styled from "styled-components"
import { deleteTodo, toggleComplete } from "../redux/todoSlice"

const Item = styled.div`
  border: 1px solid #c89595;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  &:last-child {
    border-bottom: 1px solid #c89595;
  }
`

const ItemSpan = styled.span`
  padding-right: 10px;
`
const ItemInput = styled.input`
  margin-right: 10px;
`
const Button = styled.button`
  padding: 5px;
  background-color: #f05945;
  border: none;
  color: #fff;
  border-radius: 5px;
`

const ItemTodo = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  const handleCompleted = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }))
  }
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }))
  }
  return (
    <>
      <Item>
        <ItemSpan>
          <ItemInput
            type="checkbox"
            checked={completed}
            onChange={handleCompleted}
          ></ItemInput>
          {title}
        </ItemSpan>
        <Button onClick={handleDelete}>Delete</Button>
      </Item>
    </>
  )
}

export default ItemTodo

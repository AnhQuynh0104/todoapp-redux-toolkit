import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addTodo } from "../redux/todoSlice"

const FormInput = styled.form`
  padding: 30px 0;
`
const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  border: none;
  width: 340px;
  outline: none;
`
const Button = styled.button`
  padding: 10px;
  background-color: #1db9c3;
  border: none;
  color: #fff;
  border-radius: 5px;
  width: 50px;
`

const AddTodo = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const handleAddTodo = e => {
    e.preventDefault()
    if (value === "") {
      alert("please add todo")
    } else {
      dispatch(
        addTodo({
          title: value
        })
      )
    }
    setValue("")
  }

  return (
    <FormInput>
      <Input
        placeholder="Add new todo"
        onChange={e => setValue(e.target.value)}
        value={value}
      ></Input>
      <Button onClick={handleAddTodo}>Add</Button>
    </FormInput>
  )
}

export default AddTodo

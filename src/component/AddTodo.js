import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addTodo } from "../redux/todoSlice"

const FormInput = styled.div`
  padding: 30px 0;
`
const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  border: none;
`
const Button = styled.button`
  padding: 10px;
  background-color: #1db9c3;
  border: none;
  color: #fff;
  border-radius: 5px;
`

const AddTodo = () => {
  const [value, setValue] = useState("")
  //const [values, setValues] = useState([])
  const dispatch = useDispatch()
  const handleAddTodo = e => {
    e.preventDefault()
    if (value === "") {
      alert("please add todo")
    } else {
      // setValues((prev) => {
      //   const newValue = [...prev, value]
      //   const jsonValue = JSON.stringify(newValue)
      //   localStorage.setItem("todos", jsonValue)
      //   return newValue
      // })
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

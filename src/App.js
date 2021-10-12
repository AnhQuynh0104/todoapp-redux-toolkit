import AddTodo from "./component/AddTodo"
import ListTodo from "./component/ListTodo"
import styled from "styled-components"
import TotalCompleted from "./component/TotalCompleted"

const AppDiv = styled.div`
  text-align: center;
  background-color: #ffc898;
  width: 500px;
  height: 90vh;
  margin: 30px auto;
`
const Title = styled.h1`
  padding-top: 30px;
`

function App() {
  return (
    <AppDiv className="App">
      <Title>Todo App</Title>
      <AddTodo />
      <ListTodo />
      <TotalCompleted />
    </AppDiv>
  )
}

export default App

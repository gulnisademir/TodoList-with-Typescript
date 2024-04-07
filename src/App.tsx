import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { TodoList } from './components/TodoList'

export type Todos = {
  task: string,
  id:number
}
const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos , setTodos] = useState<Todos[]>([])

  const addTodos = () => {
    if(todo){
      setTodos([...todos,{ task:todo, id:todos.length+1}])
      setTodo("")
    }
  }
  const deleteTodos = (id:number) => {
setTodos(todos.filter(item => item.id !== id))
  }
  console.log(todos)
  return (
    <>
     <Input todo ={todo} setTodo={setTodo} addTodos={addTodos}/>
     <TodoList todos={todos} deleteTodos={deleteTodos}/>
    </>
  )
}

export default App

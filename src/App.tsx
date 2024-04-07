import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { TodoList } from './components/TodoList'

export type Todos = {
  task: string,
  id: number,
  isEditing:boolean
}
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])

  const addTodos = () => {
    if (todo) {
      setTodos([...todos, { task: todo, id: todos.length + 1, isEditing:false}])
      setTodo("")
    }
  }
  const deleteTodos = (id: number) => {
    setTodos(todos.filter(item => item.id !== id))
  }
  
  const editTodos = (id:number) =>{
    setTodos(todos.map(item => item.id === id ? {...item,isEditing:true} : item))
  }
  const editTask = (id:number, task:string) => {
    setTodos(todos.map(item => item.id === id ? {...item,task,isEditing:false} : item))
  }

  console.log(todos)
  return (
    <>
      <Input todo={todo} setTodo={setTodo} addTodos={addTodos} />
      <TodoList todos={todos} deleteTodos={deleteTodos} editTodos={editTodos} setTodo={setTodo} editTask={editTask}/>
    </>
  )
}

export default App

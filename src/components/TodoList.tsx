import { Todos } from "../App"
import { MdOutlineDeleteForever } from "react-icons/md";

type todosProps = {
    todos:Todos[],
    deleteTodos:(id:number) => void
}
export const TodoList:React.FC<todosProps> = ({todos,deleteTodos}) => {
  return (
   <div>
   {
    todos.map((todo) =><div key={todo.id}>{todo.task} 
    <button type="button" onClick={()=>deleteTodos(todo.id)}><MdOutlineDeleteForever /></button></div>)
   }
   </div>
  )
}

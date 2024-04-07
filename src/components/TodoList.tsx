import { Todos } from "../App"
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { EditTodo } from "./EditTodo";

type todosProps = {
  todos: Todos[],
  deleteTodos: (id: number) => void,
  editTodos: (id: number) => void,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  editTask:(id: number, task: string) => void
}
export const TodoList: React.FC<todosProps> = ({ todos, deleteTodos, editTodos, editTask}) => {
  

  return (
    <div>
      {
        todos.map((todo) => !todo.isEditing ? (
          <div key={todo.id}>{todo.task}
            <button type="button" onClick={() => editTodos(todo.id)}><BiEdit /></button>
            <button type="button" onClick={() => deleteTodos(todo.id)}><MdOutlineDeleteForever /></button>
          </div>)
          :
          (
            <EditTodo key={todo.id} editTask={editTask} todo= {todo}/>
          )
        )
      }
    </div>
  )
}

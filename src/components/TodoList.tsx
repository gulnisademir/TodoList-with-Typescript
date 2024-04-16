import { Todos } from "../App"
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { EditTodo } from "./EditTodo";

type todosProps = {
  todos: Todos[],
  deleteTodos: (id: number) => void,
  editTodos: (id: number) => void,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  editTask: (id: number, task: string) => void,
  completedTask: (id: number) => void
}
export const TodoList: React.FC<todosProps> = ({ todos, deleteTodos, editTodos, editTask, completedTask }) => {


  return (
    <div>
      {
        todos.map((todo) => !todo.isEditing ? (
          <div className='bg-white mx-60 my-5 flex justify-between px-2 py-1 rounded-md border border-gray-500' key={todo.id}>
            <label>
              <input type="checkbox" onClick={()=>completedTask(todo.id)} checked={todo.isCompleted}/> 
            </label>
            <p onClick={()=>completedTask(todo.id)} className={`${todo.isCompleted ? "line-through" :""}`}>{todo.task}</p>
            <div className="flex gap-1 bg-slate-400 p-2">
              <button className="bg-slate-200 px-1 border border-slate-500 hover:bg-slate-300" type="button" onClick={() => editTodos(todo.id)}><BiEdit /></button>
              <button className="bg-slate-200 px-1 border border-slate-500 hover:bg-slate-300" type="button" onClick={() => deleteTodos(todo.id)}><MdOutlineDeleteForever /></button>

            </div>
          </div>)
          :
          (
            <EditTodo key={todo.id} editTask={editTask} todo={todo} />
          )
        )
      }
    </div>
  )
}

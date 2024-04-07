import { useState } from 'react'

type Iprops = {
    editTask:(id: number, task: string) => void,
    todo:any
}
export const EditTodo:React.FC<Iprops> = ({editTask,todo}) => {
    const [newItem, setNewItem]= useState<string>(todo.task)
  return (
    <>
    <div key={todo.id}>
              <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
              <button onClick={() => editTask(todo.id, newItem)}>Edit</button>
            </div>
    </>
  )
}

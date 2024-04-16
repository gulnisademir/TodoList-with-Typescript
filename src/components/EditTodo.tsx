import { useState } from 'react'

type Iprops = {
  editTask: (id: number, task: string) => void,
  todo: any
}
export const EditTodo: React.FC<Iprops> = ({ editTask, todo }) => {
  const [newItem, setNewItem] = useState<string>(todo.task)
  return (
    <>
      <div className='bg-white mx-60 my-5 flex justify-between px-3 py-2 rounded-md border border-gray-500' key={todo.id}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button className="bg-slate-200 px-1 border border-slate-500" onClick={() => editTask(todo.id, newItem)}>Edit</button>
      </div>
    </>
  )
}

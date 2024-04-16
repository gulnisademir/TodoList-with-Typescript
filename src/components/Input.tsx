export type IProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addTodos: ()=> void
}
export const Input: React.FC<IProps> = ({ todo, setTodo, addTodos }) => {

    return (
        <div className="mb-5">
            <input className="py-1 px-3 rounded-md" type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
            <button className="rounded-sm bg-slate-400 hover:bg-slate-500 text-neutral-100 border border-slate-700 px-3 py-1 ml-2" onClick={addTodos}>Add</button>
        </div>
    )
}

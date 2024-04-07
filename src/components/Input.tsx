export type IProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addTodos: ()=> void
}
export const Input: React.FC<IProps> = ({ todo, setTodo, addTodos }) => {

    return (
        <div>
            <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
            <button onClick={addTodos}>Add</button>
        </div>
    )
}

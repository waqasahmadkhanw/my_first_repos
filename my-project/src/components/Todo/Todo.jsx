import { useDispatch, useSelector } from 'react-redux'
import { add, subtract } from '../../features/todos/todoSlice.js'

function Todo() {
    const value=useSelector((state)=>state.todo.value)
    const dispatch=useDispatch()
    console.log("console values",Todo)
    const addHandle=()=>{
dispatch(add(1))
    }
    const SubtractHandle=()=>{
        dispatch(subtract(1))

    }
  return (
    <>
    <div>{value}</div>
    <button onClick={addHandle}>AddButton</button>
    <button onClick={SubtractHandle}>SubtractButton</button>
    </>
    
  )
}

export default Todo
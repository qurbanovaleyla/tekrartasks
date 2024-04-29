import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Todo({todo , onRemoveTodo}) {
const {id,content}=todo

const removeTodo=()=>{
    onRemoveTodo(id)
}

    return (
        <div className='paragraph-icons'>
            
            <div>
            {todo.content}
            </div>
            <div className='icons'>
            <MdDelete className='todo-icons' onClick={removeTodo} />
            <FaEdit className='todo-icons' />
            </div>
           
           
        </div>


    )
}

export default Todo

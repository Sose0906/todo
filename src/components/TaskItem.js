import React from 'react';
import {FaTrash} from 'react-icons/fa';


export default function TaskItem({task, onTaskToggle, onTaskDelete}) {
    const {id, name, done} = task;
    return (
        (<div style={{color: done ? "grey" : "black"}} className={done ? "checked" : ""}>
            <input onChange={() => onTaskToggle(id)} checked={done} type="checkbox"/>
            {name}
            <FaTrash onClick={() => onTaskDelete(id)}/>
        </div>)
    )

}

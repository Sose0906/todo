import React from 'react';
import TaskItem from "./TaskItem";

export default function TodoList(props) {
    return (
        <div>
            {
                props.currentTask.map(task =>
                    <TaskItem onTaskDelete={props.onTaskDelete} onTaskToggle={props.onTaskToggle} key={task.id} task={task}/>
                )
            }
        </div>
    )

}

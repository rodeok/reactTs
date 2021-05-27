import React from 'react'
import { ITask } from '../Interfaces'

interface Props{
    task: ITask
    completeTask(taskNameToDelete: number): void;
    id: number
}

const TodoTask = ({task, completeTask, id}: Props)=> {
    return <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={()=> {
            completeTask(id)
        }}>X</button>
    </div>
}

export default TodoTask

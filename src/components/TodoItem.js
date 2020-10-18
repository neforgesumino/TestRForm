import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoItem extends Component {
    render() {
        const {id , title, handleDelete, handleEdit, handleDoneTask, completed} = this.props

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className={`mt-1 mb-0 align-middle ${completed ? 'completed-task' : ''}`}>{title}</h6>
                <div className="todo-icon">
                    <span 
                        className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={() => handleDoneTask(id)}
                    >
                        <FontAwesomeIcon icon={`${completed ? 'checksquare' : 'square'}`} />
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon  icon="pen" />
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={handleDelete}
                    >
                        <FontAwesomeIcon icon="trash" />
                    </span>
                </div>
            </li>
        )
    }
}

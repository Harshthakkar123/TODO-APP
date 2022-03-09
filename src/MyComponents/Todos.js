import React from 'react';
import { Todoitem } from "../MyComponents/Todoitem";
export const Todos = (props) => {
    return (
        <div className="container text-center">
            <h3 className="text-center my-3">Todos list</h3>
            {props.todos.length === 0 ? "No todos to dispaly" :
                
                    props.todos.map((todo) => {
                        return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />


                    })
                }
            
     
        </div>


    )
}
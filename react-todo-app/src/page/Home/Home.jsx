import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import TaskForm from "../../component/TaskForm"
import { Button } from "react-bootstrap-v5";
import './Home.css'

export default function Home () {
    const [isAddTask, setIsAskTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    function handleCreateTask () 
    {   
          setIsAskTask(true);
      
    }
   

    
    return(
        <div className="page">
            <TaskForm stateOpen={isAddTask} setStateOpen={setIsAskTask} setTasks={setTasks}></TaskForm>
            <button className="create-task__Btn" onClick={handleCreateTask}>Create Task</button>
            <div>My List Task</div>
          

           <div className="table">
                <div className="table__section table__todo">
                    <div className="table__title">
                        TO DO
                    </div>
                    <div className="table__body">
                             <ul>
                                {tasks.map(item => (
                                        <li  className="table__card" key= {item.id}>
                                               <span className="card__name">{item.name}</span>
                                                <p className="card__desc">{item.desc}</p>
                                        </li>
                                ))}
                                
                            </ul>
                    </div>

                </div>
                <div className="table__section table__doing">
                    <div className="table__title">
                            DOING
                    </div>
                        <div className="table__body">

                        </div>
                </div>
                <div className="table__section table__done">
                    <div className="table__title">
                            DONE
                    </div>
                    <div className="table__body">

                    </div>
                </div>
           </div>
           
        </div>
    )
}
import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import TaskForm from "../../component/TaskForm"
import { Button } from "react-bootstrap-v5";
import DropDown from "../../component/Dropdown";
import './Home.css'

export default function Home () {
    const [isAddTask, setIsAskTask] = useState(false);

    // try to load `boards` from the local storage, if null set empty array to the var
     const storedtasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedtasks);

    function handleCreateTask () 
    {   
          setIsAskTask(true);
      
    }
    useEffect(() => {
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);


    return(
        <div className="page">
            <TaskForm stateOpen={isAddTask} setStateOpen={setIsAskTask}  setTasks={setTasks}></TaskForm>
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
                                                <DropDown></DropDown>
                                                
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
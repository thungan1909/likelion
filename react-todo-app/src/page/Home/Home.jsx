import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import TaskForm from "../../component/TaskForm"
import { Button } from "react-bootstrap-v5";
import DropDown from "../../component/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faL } from "@fortawesome/free-solid-svg-icons";

import './Home.css'

export default function Home () {
    const [isAddTask, setIsAskTask] = useState(false);

    // try to load `tasks` from the local storage, if null set empty array to the var
     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedTasks);
    const [updatedStatus, setUpdatedStatus] = useState();
    const [taskID, setTaskID] = useState();
    const myTaskID = useRef();
 
    function handleCreateTask () 
    {   
         
          setIsAskTask(true);
      
    }
 
    useEffect(() => {
        //console.log(tasks);
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);

    useEffect (() => {
          console.log(taskID);
        //  handleChangeStatus(myTaskID, updatedStatus);
    }, [updatedStatus])

    const handleChangeStatus  = (myTaskID, updatedStatus) => {
    
        const updatedTasks = tasks.map((item) => {
            if (item.id === myTaskID.current)
             {
              return {
                id: item.id,
                name: item.name,
                desc: item.desc,
                status: updatedStatus,
              };
             
            }
            else {
              return item; 
            }
          })
         setTasks(updatedTasks);

    }

    const handleChangeID = (index) => {
        myTaskID.current = index;

      };      
    const handleDeleteTask = (index) => {
        handleChangeID(index);
        const filteredTasks = tasks.filter((item) => item.id !== myTaskID.current);
        setTasks(filteredTasks);
    };
   
    return(
        <div className="page">
            <TaskForm stateOpen={isAddTask} setStateOpen={setIsAskTask}  setTasks={setTasks}></TaskForm>
            <button className="create-task__Btn" onClick={handleCreateTask}>Create Task</button>
            <h1>My list task</h1>

           <div className="table">
                <div className="table__section table__todo">
                    <div className="table__title">
                        TO DO
                    </div>

                    <div className="table__body">
                             <ul>
                                {tasks.map((item) =>  
                                {
                                 if (item.status.value === 1)
                                  {
                                    return (
                                        <li 
                                           className="table__card" key= {item.id} >
                                          <span className="card__name">{item.name}</span>
                                           <p className="card__desc">{item.desc}</p>
                                           <div className="card__action">
                                                <DropDown setTaskID = {setTaskID} taskID ={item.id} status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
                                                <button className="card__Btn" onClick={() => handleDeleteTask(item.id)} >
                                                  <FontAwesomeIcon  icon={faTrash} color ="red"/></button>
                                                <button className="card__Btn"><FontAwesomeIcon  icon={faPencil}/></button>
                                           </div>
                                         
                                   </li>
                               )
                                  }
                                 
                                  
                                }
                                 
                                )}
                                
                            </ul>
                    </div>

                </div>
                <div className="table__section table__doing">
                    <div className="table__title">
                            DOING
                    </div>
                        <div className="table__body">
                        <ul>
                                {tasks.map((item) =>  
                                {
                                 if (item.status.value === 2)
                                  {
                                    return (
                                        <li 
                                           className="table__card" key= {item.id} >
                                          <span className="card__name">{item.name}</span>
                                           <p className="card__desc">{item.desc}</p>
                                           <div className="card__action">
                                                <DropDown  status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
                                                <button className="card__Btn"  onClick={() => handleDeleteTask(item.id)} ><FontAwesomeIcon  icon={faTrash} color ="red"/></button>
                                                <button className="card__Btn"><FontAwesomeIcon  icon={faPencil}/></button>
                                           </div>
                                   </li>
                               )
                                  }
                                 
                                  
                                }
                                 
                                )}
                                
                            </ul>
                        </div>
                </div>
                <div className="table__section table__done">
                    <div className="table__title">
                            DONE
                    </div>
                    <div className="table__body">
                    <ul>
                                {tasks.map((item) =>  
                                {
                                 if (item.status.value === 3)
                                  {
                                    return (
                                        <li 
                                           className="table__card" key= {item.id} >
                                          <span className="card__name">{item.name}</span>
                                           <p className="card__desc">{item.desc}</p>
                                           <div className="card__action">
                                                <DropDown  status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
                                                <button className="card__Btn"  onClick={() => handleDeleteTask(item.id)}><FontAwesomeIcon  icon={faTrash} color ="red"/></button>
                                                <button className="card__Btn"><FontAwesomeIcon  icon={faPencil}/></button>
                                           </div>
                                   </li>
                               )
                                  }
                                 
                                  
                                }
                                 
                                )}
                                
                            </ul>
                    </div>
                </div>
           </div>
           
        </div>
    )
}
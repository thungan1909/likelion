import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import TaskForm from "../../component/TaskForm"
import { Button } from "react-bootstrap-v5";
import DropDown from "../../component/Dropdown";
import './Home.css'

export default function Home () {
    const [isAddTask, setIsAskTask] = useState(false);

    // try to load `tasks` from the local storage, if null set empty array to the var
     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedTasks);
    const [updatedStatus, setUpdatedStatus] = useState();
    const myTaskID = useRef();
 
    function handleCreateTask () 
    {   
          setIsAskTask(true);
      
    }
    useEffect(() => {
        console.log(tasks);
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);

    useEffect (() => {
     
         handleChangeStatus(myTaskID, updatedStatus);
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
                                        <li   onClick={() => {handleChangeID(item.id); }}
                                           className="table__card" key= {item.id} >
                                          <span className="card__name">{item.name}</span>
                                           <p className="card__desc">{item.desc}</p>
                                           <DropDown  status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
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
                                        <li   onClick={() => {handleChangeID(item.id); }}
                                           className="table__card" key= {item.id} >
                                          <span className="card__name">{item.name}</span>
                                           <p className="card__desc">{item.desc}</p>
                                           <DropDown  status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
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
                                        <li   onClick={() => {handleChangeID(item.id); }}
                                           className="table__card" key= {item.id} >
                                          <span className="card__name">{item.name}</span>
                                           <p className="card__desc">{item.desc}</p>
                                           <DropDown  status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
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
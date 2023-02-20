import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import TaskForm from "../../component/TaskForm"
import { Button } from "react-bootstrap-v5";
import DropDown from "../../component/Dropdown";
import AlertDelete from "../../component/AlertDelete";
import TaskFormEditing from "../../component/TaskFormEditing";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faL } from "@fortawesome/free-solid-svg-icons";
import TextField from '@mui/material/TextField';

import './Home.css'

export default function Home () {
   

    // try to load `tasks` from the local storage, if null set empty array to the var
     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedTasks);
    const [taskID, setTaskID] = useState();
    const [isAddTask, setIsAddTask] = useState(false);
    const [updatedStatus, setUpdatedStatus] = useState();
    const [isOpenDeleteAlert, setIsOpenDeleteAlert] = useState(false); 
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);
    const [isEditTask, setIsEditTask] = useState(false);



    //Begin: function when we click on jsx tag

    //function to set state of add task to true when click on add task button
    function handleCreateTask () 
    {    
          setIsAddTask(true); 
    }
    //function to set task ID and show delete alert
    function handleDeleteAlert (id) {
      setTaskID(id);
      setIsOpenDeleteAlert(true);
    }
    //function to set task ID and show edit task alert(dialog)
    function handleEditAlert (id)
    {
          setTaskID(id);
          setIsEditTask(true);
    }
    //End: Function when we click on jsx tag


    //Begin: useEffect

    //to set task to local storge when tasks updated
    useEffect(() => {
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);

    //to change status of task with ID when status change
    useEffect (() => {
         handleChangeStatus(taskID, updatedStatus);
    }, [updatedStatus])

    //to delete task when confirm 
    useEffect (() => {
       if (isConfirmDelete) 
       { handleDeleteTask(taskID);}
    }, [isConfirmDelete])

     //End: useEffect


     //Begin: Function to handle data and update task

     //function to delete a task from tasks list with task ID
    const handleDeleteTask = (taskID) => 
    {

      //filter item different with deleted item => set filtererTask to tasks
      const filteredTasks = tasks.filter((item) => item.id !==  taskID);
      setTasks(filteredTasks);
      setIsConfirmDelete(false);
    }
    //function to change status with task ID and new status
    const handleChangeStatus  = (taskID, updatedStatus) => {
        const updatedTasks = tasks.map((item) => {
            if (item.id === taskID)
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


    return(
        <div className="page">
            <TaskForm stateOpen={isAddTask} setStateOpen={setIsAddTask}  setTasks={setTasks}></TaskForm>
            <AlertDelete isOpenDeleteAlert = {isOpenDeleteAlert} setIsOpenDeleteAlert = {setIsOpenDeleteAlert} setIsConfirmDelete = {setIsConfirmDelete} ></AlertDelete> 
            <TaskFormEditing isEditTask = {isEditTask} setIsEditTask = {setIsEditTask} tasks ={tasks} setTasks={setTasks} taskID = {taskID} ></TaskFormEditing>
            <Button className="create-task__Btn" onClick={handleCreateTask}>Create Task</Button>
            <h1>My list task</h1>

           <div className="table">
              <div className="table__section table__todo">
                <div className="table__title">TO DO </div>
                <div className="table__body">
                  <ul>
                    {tasks.map((item) =>  
                    {
                      if (item.status.value === 1)
                      {
                        return (
                            <li className="table__card" key= {item.id} >
                              <p className="card__name">{item.name}</p>
                              <p className="card__desc">{item.desc}</p>
                              <div className="card__action">
                                <DropDown setTaskID = {setTaskID} taskID ={item.id} status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
                                <button className="card__Btn" onClick={( )=> {handleDeleteAlert(item.id);}} >
                                  <FontAwesomeIcon  icon={faTrash} color ="red"/></button>
                                <button className="card__Btn" onClick={() => {handleEditAlert(item.id)}}>
                                  <FontAwesomeIcon  icon={faPencil}/> </button>
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
                                      <li className="table__card" key= {item.id} >
                                        <p className="card__name">{item.name}</p>
                                        <p className="card__desc">{item.desc}</p>
                                        <div className="card__action">
                                          <DropDown setTaskID = {setTaskID} taskID ={item.id} status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
                                          <button className="card__Btn" onClick={( )=> {handleDeleteAlert(item.id);}} >
                                            <FontAwesomeIcon  icon={faTrash} color ="red"/></button>
                                          <button className="card__Btn" onClick={() => {handleEditAlert(item.id)}}>
                                            <FontAwesomeIcon  icon={faPencil}/> </button>
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
                  <div className="table__title"> DONE </div>
                  <div className="table__body">
                    <ul>
                        {tasks.map((item) =>  
                        {
                          if (item.status.value === 3)
                          {
                            return (
                              <li className="table__card" key= {item.id} >
                                <p className="card__name">{item.name}</p>
                                <p className="card__desc">{item.desc}</p>
                                <div className="card__action">
                                  <DropDown setTaskID = {setTaskID} taskID ={item.id} status={item.status} setUpdatedStatus = {setUpdatedStatus}></DropDown>
                                  <button className="card__Btn" onClick={( )=> {handleDeleteAlert(item.id);}} >
                                    <FontAwesomeIcon  icon={faTrash} color ="red"/></button>
                                  <button className="card__Btn" onClick={() => {handleEditAlert(item.id)}}>
                                    <FontAwesomeIcon  icon={faPencil}/> </button>
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
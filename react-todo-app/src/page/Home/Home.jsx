import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import TaskForm from "../../component/TaskForm"
import { Button } from "react-bootstrap-v5";
import DropDown from "../../component/Dropdown";
import './Home.css'

export default function Home () {
    const [isAddTask, setIsAskTask] = useState(false);

    // try to load `boards` from the local storage, if null set empty array to the var
     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedTasks);
    const [status, setStatus] = useState();
    const myTaskID = useRef();
   // const [isChangeStatus, setIsChangeStatus] = useState(false);

 
    function handleCreateTask () 
    {   
          setIsAskTask(true);
      
    }
    useEffect(() => {
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);

    useEffect (() => {
        // console.log("Changed");
     
        // console.log(status);
     
         handleChangeStatus(myTaskID, status);
    }, [status])


    const handleChangeStatus  = (myTaskID, status) => {
       
        //  newTasks[myTaskID].name = 'New Name';
        // newUsers[index].rollNo = 'New RollNo';
        // setUsers(newUsers);
       
        // const updatedTasks = tasks.map((item) => {
        //     if (item.id === myTaskID.current)
        //      {
        //       return {
        //         id: item.id,
        //         name: item.name,
        //         desc: item.desc,
        //         status: status,
        //       };
        //     }
        //     else {
        //       return tasks; 
        //     }
   
        //   })
        // //  console.log(updatedTasks);
        // //setTasks(updatedTasks);
        // console.log(tasks);
              // return {
              //   id: item.id,
              //   status: status,
                
              //   // text: event.target.note.value,
              // };
            // } else {
            //   return item;
            // }
          // });
       //   console.log(updatedTasks);
         // setTasks(updatedTasks);
          //setNoteEditing("");
    }

    // console.log(isChangeStatus);
    // const handleChangeCard = () => {
    //     console.log("sc");
    // }

    // const handleClick = (id) => {
    //     // task.current = id;
    //     console.log(id);
       
    // }
    const handleChangeID = (index) => {
        
       // console.log(index);
        myTaskID.current = index;
       // console.log(myTaskID);
      };
    
    return(
        <div className="page">
            <TaskForm stateOpen={isAddTask} setStateOpen={setIsAskTask}  setTodoTasks={setTasks}></TaskForm>
            <button className="create-task__Btn" onClick={handleCreateTask}>Create Task</button>
            <h1>My list task</h1>
          

           <div className="table">
                <div className="table__section table__todo">
                    <div className="table__title">
                        TO DO
                    </div>

                    <div className="table__body">
                             <ul>
                                {tasks.map((item, index) =>  
                                {
                                  // if (item === undefined) {
                                  //   return <div>Khoong</div>
                                  // }

                                //  if (item.status.value === 1)
                                  
                                    return (
                                             <li   onClick={() => {handleChangeID(item.id); }}
                                                className="table__card" key= {item.id} >
                                               <span className="card__name">{item.name}</span>
                                                <p className="card__desc">{item.desc}</p>
                                                <DropDown  status={item.status} setStatus = {setStatus}></DropDown>
                                        </li>
                                    )
                                  
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
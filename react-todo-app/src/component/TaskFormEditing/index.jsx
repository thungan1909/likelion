import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useEffect, useState } from "react"
export default function TaskFormEditing ({isEditTask, setIsEditTask, tasks , setTasks,  taskID}) 
{

    const [isOpen, setIsOpen] = useState(isEditTask);
    const [taskEditing, setTaskEditing] = useState("");
    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDesc, setNewTaskDesc] = useState("");
    const [newTask, setNewTask] = useState();
    useEffect (() => {
        setIsOpen(isEditTask);
        tasks.map((item) => {
            if (item.id === taskID)
             {
                setTaskEditing(item);
            }
          });
    }, [isEditTask]);

    function handleEditTask () 
    {
        const updatedTasks = tasks.map((item) => {
            if (item.id === taskID)
             {
              return {
                id: item.id,
                name: newTaskName,
                desc: newTaskDesc,
                status: item.status,
              };
             
            }
            else {
              return item; 
            }
          })
         setTasks(updatedTasks);

    }
    const handleSaveTask = () => {
        handleEditTask();
        setIsOpen(false);
        setIsEditTask(false);
    }
    const handleCancel = () => {
        setIsOpen(false);
        setIsEditTask(false);
    }
  return (
        <>
            <Dialog open={isOpen} >
                <DialogTitle>Enter your task name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus  
                        defaultValue={taskEditing.name}
                        margin="dense"
                        onChange={(e) => setNewTaskName(e.target.value)}
                        label = "Task name"
                        type= "text"
                        fullWidth
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        defaultValue={taskEditing.desc}
                        onChange={(e) => setNewTaskDesc(e.target.value)}
                        label = "Description"
                        type= "text"
                        fullWidth
                    />
                      
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>
                            Cancel
                    </Button>
                    <Button onClick={handleSaveTask}>
                            Save
                    </Button>
                </DialogActions>
              
            </Dialog>
        </>
)}
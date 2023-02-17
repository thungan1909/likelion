import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useEffect, useState } from "react"
export default function TaskForm ({stateOpen, setStateOpen, setTasks}) 
{
    
 
    const [isOpen, setIsOpen] = useState(stateOpen);

  
    const [newTask, setNewTask] = useState();
    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDesc, setNewTaskDesc] = useState("");
    

    useEffect (() => {
        setIsOpen(stateOpen);
    }, [stateOpen])
  
    useEffect (() => {
            if (newTask === undefined) return;
           setTasks(
            prevState => [...prevState, newTask]);
    }, [newTask])
    const handleCancel = () => {
        setIsOpen(false);
        setStateOpen(false);
    }
    const handleSaveTask = () => {

        setNewTask({
            name: newTaskName,
            desc: newTaskDesc
        });
        
       
        setIsOpen(false);
        setStateOpen(false);
    }

    return (
        <>
            <Dialog open={isOpen} >
                <DialogTitle>Enter your task name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus  
                        margin="dense"
                        onChange={(e) => setNewTaskName(e.target.value)}
                        label = "Task name"
                        type= "text"
                        fullWidth
                    />
                     <TextField
                        autoFocus
                        margin="dense"
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

    )
}
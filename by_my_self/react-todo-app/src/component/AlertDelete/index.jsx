import { faL } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

export default function AlertDelete ({isOpenDeleteAlert, setIsOpenDeleteAlert, setIsConfirmDelete}) 
{
    const [isOpen, setIsOpen] = useState(isOpenDeleteAlert);
 
    //to set open alert
    useEffect (() => {
        setIsOpen(isOpenDeleteAlert);
    }, [isOpenDeleteAlert])

      //function to set deleteConfirm state  when click Delete btn
    const handleDeleteConfirm = () => {
       
        setIsConfirmDelete(true);
        setIsOpen(false);
        setIsOpenDeleteAlert(false);
    }
        //function to cancel when click cancel button
    const handleCancelConfirm = () => {
        setIsOpen(false);
        setIsOpenDeleteAlert(false);
    }
    return (
        <Dialog
            open={isOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Be careful! Do you really want to remove this task?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                    This action cannot be reversed.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleDeleteConfirm}>Delete</Button>
            <Button onClick={handleCancelConfirm} autoFocus>
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
    )
}
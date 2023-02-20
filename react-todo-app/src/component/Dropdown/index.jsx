import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const taskStatus = [
  { label: "To do", value: 1 },
  { label: "Doing", value: 2 },
  { label: "Done", value: 3 },
];

export default function DropDown ({setTaskID, taskID, status, setUpdatedStatus}) {
  

 const [newStatus, setNewStatus] = useState(status);

 //function to set task ID and set state updatedStatus when status is changed
  useEffect (() => {
    setUpdatedStatus(newStatus);
    setTaskID(taskID);
  }, [newStatus])
  
  //function to update status with new value
  const handleUpdateTaskStatus = (e) => {
      setNewStatus(e);
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-10"></div>
      <div className="col-md-10">
        <Select options={ taskStatus } defaultValue = {status} isSearchable = {false}
        onChange={e => handleUpdateTaskStatus(e)}
        />
      </div>
      <div className="col-md-9"></div>
    </div>
  </div>
  )
} ;


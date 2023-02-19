import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const taskStatus = [
  { label: "To do", value: 1 },
  { label: "Doing", value: 2 },
  { label: "Done", value: 3 },
];

export default function DropDown ({status, setStatus}) {
  
 const [newStatus, setNewStatus] = useState(status);

  useEffect (() => {
    setStatus(newStatus);
   
    // console.log(newStatus);
  }, [newStatus])
  const handleUpdateTaskStatus = (e) => {
      setNewStatus(e);
     
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-7"></div>
      <div className="col-md-7">
        <Select options={ taskStatus } placeholder="To do" isSearchable = {false}
        onChange={e => handleUpdateTaskStatus(e)}
        />
      </div>
      <div className="col-md-7"></div>
    </div>
  </div>
  )
} ;


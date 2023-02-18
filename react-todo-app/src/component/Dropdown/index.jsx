import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const taskStatus = [
  { label: "To do", value: 1 },
  { label: "Doing", value: 2 },
  { label: "Done", value: 3 },
];

const DropDown = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-7"></div>
      <div className="col-md-7">
        <Select options={ taskStatus } placeholder="To do" isSearchable = {false}/>
      </div>
      <div className="col-md-7"></div>
    </div>
  </div>
);

export default DropDown;
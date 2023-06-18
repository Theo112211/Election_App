import React, { useState } from "react";
import Dropdown from "../../components/input/dropdown/Options";
import Button from "../../components/input/button";
import Input from "../../components/input";

const AddPosition = () => {
    const [state, setState] = useState({ 
        position:"",
        

    })


  return (
    <div className="formSection">
      <h1> Add Voter</h1>
      <form id="form">
        <Input
          name="position"
          id="position"
          type="dropdown"
          title="Student Id"
          onChange={(e) => {
            setState((prevState) => {
              return { prevState, studentId: e.target.value };
            });
          }}
        />
        <Dropdown />

        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

export default AddPosition;

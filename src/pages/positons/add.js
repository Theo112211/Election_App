import React, { useState } from "react";
import Button from "../../components/input/button";
import Input from "../../components/input";

const AddPosition = () => {
    const [state, setState] = useState({ 
        position:"",

    })


  return (
    <div id="formSection" >
      
      <form id="form">
      <h1> Add Position</h1>
        <Input
          name="position"
          id="position"
          type="text"
          placeholder="What position are you an aspirant of?"
          title="Position"
          onChange={(e) => {
            setState((prevState) => {
              return { prevState, studentId: e.target.value };
            });
          }}
        />
        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

export default AddPosition;

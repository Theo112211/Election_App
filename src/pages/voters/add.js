import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/input/button";

const AddVoter = () => {
const [state,setState]=useState({studentId:"", studentName:"", email:"", telephone:"", password:"" })

  return (
    <div>
      <form>
        <Input name="studentId" id="studentId" type="text" title="Student Id" onChange={(e)=> {
          setState(prevState =>{
            return{prevState,studentId:e.target.value}
          })
        }}/>
        <Input name="studentName" id="studentName" type="text" title="Student Name" onChange={(e) => {
          setState(prevState =>{
            return{prevState,studentName:e.target.value}
          })
        }} />
        <Input name="email" id="email" type="email" title="Email" onChange={(e) => {}} />
        <Input name="telephone" id="telephone" type="tell" title="Telephone" />
        <Input name="password" id="password" type="password" title="Password" />
        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

export default AddVoter;

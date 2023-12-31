import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/input/button";

const Addcandidates = () => {
  const [state, setState] = useState({
    candidateId: "",
    candidateName: "",
    email: "",
    telephone: "",
  });

  return (
    <div id="formSection">
      <h1>Add Candidate</h1>
      <form id="form">
        <Input
          name="candidateName"
          id="candidateName"
          type="text"
          title="Candidate Name"
          onChange={(e) => {
            setState((prevState) => {
              return { prevState, candidateName: e.target.value };
            });
          }}
        />

        <Input
          name="candidateId"
          id="candidateId"
          type="text"
          title="Candidate Id"
          onChange={(e) => {
            setState((prevState) => {
              return { prevState, candidateId: e.target.value };
            });
          }}
        />

        <Input
          name="email"
          id="email"
          type="email"
          title="Email"
          onChange={(e) => {
            setState((prevState) => {
              return { prevState, email: e.target.value };
            });
          }}
        />

        <Input
          name="password"
          id="password"
          type="password"
          title="Password"
          onChange={(e) => {
            setState((prevState) => {
              return { prevState, password: e.target.value };
            });
          }}
        />

        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

export default Addcandidates;

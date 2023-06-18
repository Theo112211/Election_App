import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
// import Candidates from "./Candidates";
// import Dashboard from "./Dashboard";
import Voters from "./voters";
import AddVoter from "./voters/add";
import VoterList from "./voters/list";


const MainApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="voters" element={<Voters />}>
          <Route path="add" element={<AddVoter />} />
          <Route path="list" element={<VoterList />} />
        </Route>
        {/* <Route path="candidates" element={<Candidates />} /> */}
      </Routes>
    </div>
  );
};

export default MainApp;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Candidates from "./candidates";

import Voters from "./voters";
import AddVoter from "./voters/add";
import VoterList from "./voters/list";
import CandidateList from "./candidates/list";
import Addcandidates from "./candidates/add";
import Position from "./positons";
import AddPosition from "./positons/add";
import PositionsList from "./positons/list";

const MainApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

{/* Voter page route */}
        <Route path="voters" element={<Voters />}>
          <Route path="add" element={<AddVoter />} />
          <Route path="list" element={<VoterList />} />
        </Route>
{/*         
{/* Candidate page route */}
        <Route path="candidates" element={<Candidates />}>
          <Route path="add" element={<Addcandidates />} />
          <Route path="list" element={<CandidateList />} />
        </Route>

{/* positions route */}
      <Route path="positions" element={<Position/>}>
        <Route path="add" element={<AddPosition/>}/>
        <Route path="list" element={<PositionsList/>}/>
      </Route>

      </Routes>
    </div>
  );
};

export default MainApp;

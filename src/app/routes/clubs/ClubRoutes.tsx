import React from "react";
import { Route, Routes } from "react-router-dom";
import Club from "../../pages/clubs/Club";
import Clubs from "../../pages/clubs/Clubs";
import ClubSignUp from "../../pages/clubs/ClubSignUp";

function ClubRoutes() {
  return (
    <Routes>
      <Route path=":clubId" element={<Club />} />
      <Route path="/new" element={<ClubSignUp />} />
    </Routes>
  );
}

export default ClubRoutes;

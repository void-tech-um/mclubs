import React from "react";
import { Route, Routes } from "react-router-dom";
import Club from "../../pages/clubs/Club";
import Clubs from "../../pages/clubs/Clubs";

function ClubRoutes() {
  return (
    <Routes>
      <Route index element={<Clubs />} />
      <Route path=":clubId" element={<Club />} />
    </Routes>
  );
}

export default ClubRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Profile from "../../pages/users/Profile";
function UserRoutes() {
  return (
    <Routes>
      <Route path=":uid" element={<Profile />} />
    </Routes>
  );
}

export default UserRoutes;

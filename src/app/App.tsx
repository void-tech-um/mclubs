import React from "react";
import Layout from "./components/shared/layout/Layout";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/shared/NotFound";
import ClubRoutes from "./routes/clubs/ClubRoutes";
import UserRoutes from "./routes/users/UserRoutes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs/*" element={<ClubRoutes />} />
        <Route path="/users/*" element={<UserRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

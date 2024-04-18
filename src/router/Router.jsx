import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("./home"));
const CounterPage = lazy(() => import("./counter/ui"));
const UserPage = lazy(() => import("./user/ui"));
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};

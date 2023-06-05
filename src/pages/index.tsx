import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const CounterPage = lazy(() => import('./counter/ui'));
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
};

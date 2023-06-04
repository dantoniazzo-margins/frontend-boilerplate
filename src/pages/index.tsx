import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Counter } from '@/pages/Counter/Counter';
const Home = lazy(() => import('./Home'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Counter } from '@/features/counter/Counter';
const Home = lazy(() => import('./home'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

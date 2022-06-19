import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HOME = lazy(() => import('./Konten/HOME'));
const ABOUTME = lazy(() => import('./Konten/ABOUTME'));
const INTERIOR = lazy(() => import('./Konten/INTERIOR'));
const EKSTERIOR = lazy(() => import('./Konten/EKSTERIOR'));
const API = lazy(() => import('./Konten/API'));
// const Iphone11promax = lazy(() => import('./Iphone/Iphone11promax'));
// const Iphone11 = lazy(() => import('./Iphone/Iphone11'));


const App = () => (

<Router>
 <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<HOME />} />
    <Route path="/HOME" element={<HOME />} />
    <Route path="/ABOUTME" element={<ABOUTME />} />
    <Route path="/INTERIOR" element={<INTERIOR />} />
    <Route path="/EKSTERIOR" element={<EKSTERIOR />} />
    <Route path="/API" element={<API />} />
    {/* <Route path="/Iphone11promax" element={<Iphone11promax />} />
    <Route path="/Iphone11" element={<Iphone11/>} /> */}
 </Routes>
</Suspense>
</Router>

);

export default App;

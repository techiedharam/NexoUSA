// import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import Home from '../pages/Home';
import AboutNexoUSA from '../pages/AboutNexoUSA';
import ProductRange from '../pages/ProductRange';
import FastenersDivision from '../pages/FastenersDivision';
import FabricationDivision from '../pages/FabricationDivision';
import Warehouse from '../pages/Warehouse';
import ContactUs from '../pages/ContactUs';

const AllRouter = () => {
  return (
    <Routes>
      {/* Top-Level Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about-nexo-usa" element={<AboutNexoUSA />} />
      <Route path="/product-range" element={<ProductRange />} />
      <Route path="/fasteners-division" element={<FastenersDivision />} />
      <Route path="/fabrication-division" element={<FabricationDivision />} />
      <Route path="/warehouse" element={<Warehouse />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AllRouter;

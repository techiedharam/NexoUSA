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

//All Submenu pages
// About Nexo USA pages - 4 imports 
import AboutUs from "../pages/subMenusPages/abousNexoUSA/AboutUs"
import ResearchAndDevelopment from "../pages/subMenusPages/abousNexoUSA/ResearchAndDevelopment"
import ApprovalAndCertifications from "../pages/subMenusPages/abousNexoUSA/ApprovalAndCertifications"
import Quality from "../pages/subMenusPages/abousNexoUSA/Quality"
// Fasteners Division pages imports  - 10 
import ThreadedRods from "../pages/subMenusPages/FastenersDivision/ThreadedRods"
import InfrastructureforFabricationDivision from "../pages/subMenusPages/FastenersDivision/InfrastructureforFabricationDivision"
import Structures from "../pages/subMenusPages/FastenersDivision/Structures"
import Foundations from "../pages/subMenusPages/FastenersDivision/Foundations"
import WindMillAndRefinery from "../pages/subMenusPages/FastenersDivision/WindMillAndRefinery"
import TransmissionLine from "../pages/subMenusPages/FastenersDivision/TransmissionLine"
import RailwaysElectrical from "../pages/subMenusPages/FastenersDivision/RailwaysElectrical"
import SteelWoodenCrashBarrier from "../pages/subMenusPages/FastenersDivision/SteelWoodenCrashBarrier"
import GeneralUses from "../pages/subMenusPages/FastenersDivision/GeneralUses"
import InfrastructureforFastenersDivision from "../pages/subMenusPages/FastenersDivision/InfrastructureforFastenersDivision"

// Fabrication Division pages imports  - 7
import FarmPartDivision from "../pages/subMenusPages/FabricationDivision/FarmPartDivision"
import CrowdControlBarriersAndTemporaryFencing from "../pages/subMenusPages/FabricationDivision/CrowdControlBarriersAndTemporaryFencing"
import PostSupportBracketsAndOuters from "../pages/subMenusPages/FabricationDivision/PostSupportBracketsAndOuters"
import FarmAgricultureGates from "../pages/subMenusPages/FabricationDivision/FarmAgricultureGates"
import OtherFarmAgricultureProducts from "../pages/subMenusPages/FabricationDivision/OtherFarmAgricultureProducts"
import MountingAccessories from "../pages/subMenusPages/FabricationDivision/MountingAccessories"
import StrutsChannelsAndBrackets from "../pages/subMenusPages/FabricationDivision/StrutsChannelsAndBrackets"



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
      {/* subMenu Routes */}
      {/* About Nexo USA route  */}
      <Route path="/about-nexo-usa/about-us" element={<AboutUs />} />
      <Route path="/about-nexo-usa/research-and-development" element={<ResearchAndDevelopment />} />
      <Route path="/about-nexo-usa/approval-and-certifications" element={<ApprovalAndCertifications />} />
      <Route path="/about-nexo-usa/quality" element={<Quality />} />
      {/* Fasteners Division route  */}
      <Route path="/fasteners-division/threaded-rods" element={<ThreadedRods />} />
      <Route path="/fasteners-division/infrastructure-for-fabrication-division" element={<InfrastructureforFabricationDivision />} />
      <Route path="/fasteners-division/structures" element={<Structures />} />
      <Route path="/fasteners-division/foundations" element={<Foundations />} />
      <Route path="/fasteners-division/wind-mill-and-refinery" element={<WindMillAndRefinery />} />
      <Route path="/fasteners-division/transmission-line" element={<TransmissionLine />} />
      <Route path="/fasteners-division/railways-electrical" element={<RailwaysElectrical />} />
      <Route path="/fasteners-division/steel-wooden-crash-barrier" element={<SteelWoodenCrashBarrier />} />
      <Route path="/fasteners-division/general-uses" element={<GeneralUses />} />
      <Route path="/fasteners-division/infrastructure-for-fasteners-division" element={<InfrastructureforFastenersDivision />} />
      {/* Fabrication Division route  */}
      <Route path="/fabrication-division/farm-part-division" element={<FarmPartDivision />} />
      <Route path="/fabrication-division/crowd-control-barriers-and-temporary-fencing" element={<CrowdControlBarriersAndTemporaryFencing />} />
      <Route path="/fabrication-division/post-support-brackets-and-outers" element={<PostSupportBracketsAndOuters />} />
      <Route path="/fabrication-division/farm-agriculture-gates" element={<FarmAgricultureGates />} />
      <Route path="/fabrication-division/other-farm-agriculture-products" element={<OtherFarmAgricultureProducts />} />
      <Route path="/fabrication-division/mounting-accessories" element={<MountingAccessories />} />
      <Route path="/fabrication-division/struts-channels-and-brackets" element={<StrutsChannelsAndBrackets />} />

    </Routes>
  );
};

export default AllRouter;

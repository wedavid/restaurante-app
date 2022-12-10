import React from "react";
import { Navbar } from "./ui/Navbar";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { NuevoRestaurante } from "./components/NuevoRestaurante";
import { BuscarRestaurante } from "./components/BuscarRestaurante";

export const MainApp = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="inicio" element={<Inicio />} />
          <Route path="nuevo" element={<NuevoRestaurante />} />
          <Route path="buscar" element={<BuscarRestaurante />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

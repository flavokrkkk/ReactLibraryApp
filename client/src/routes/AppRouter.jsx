import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import AuthPage from "../pages/AuthPage/AuthPage";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" Component={AuthPage} />
    </Routes>
  );
};

export default AppRouter;

import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <main>
      {children}
      <Outlet />
    </main>
  );
};

export default MainLayout;

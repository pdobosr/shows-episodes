import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

const ShowPage = lazy(() => import("./pages/ShowPage"));
const EpisodePage = lazy(() => import("./pages/EpisodePage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="*" element={<div>NOT FOUND</div>} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ShowPage />} />
          <Route path="/episodes/:id" element={<EpisodePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

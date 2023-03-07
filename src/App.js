import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const allStates = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// <Route path="*" element={<NotFoundPage />} />
// bu sayfayi diger sayfalarin en altina yazariz.
// Yildizin(*) anlami: diger path'lere uymiyorsa bu sayfa gosterilsin 
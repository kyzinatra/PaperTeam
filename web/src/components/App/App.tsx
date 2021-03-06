import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Constructor from "../Constructor/Constructor";

import { useSelector } from "../../service/redux/store";
import Load from "../Load/Load";
import Contact from "../Contact/Contact";

const App: FC = () => {
  const isLoading = useSelector(a => a.solution.isLoading || a.construcor.isLoading);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Load isLoading={isLoading} />
    </BrowserRouter>
  );
};

export default App;

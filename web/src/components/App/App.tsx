import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import style from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Page404 from "../Page404/Page404";
import { Provider } from "react-redux";
import { store, useSelector } from "../../service/types/redux/store";
import Toast from "../Toast/Toast";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Toast />
    </Provider>
  );
};

export default App;

import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Constructor from "../Constructor/Constructor";

import { Provider } from "react-redux";
import { store } from "../../service/redux/store";
import Toast from "../Toast/Toast";

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/constructor" element={<Constructor />} />
        </Routes>
        <Toast />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

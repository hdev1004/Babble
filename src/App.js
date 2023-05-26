import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import "./App.css";

import ClientMain from "./page/client/main/ClientMain";
import ClientHeader from "page/client/header/ClientHeader";
import ClientLogin from "./page/client/login/ClientLogin";
import NotFound from "page/notfound/Notfound";
import { styled } from "styled-components";
import Userid from "page/client/login/Userid";
//import ClientMain from "./page/client/main/ClientMain";

const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const App = () => {
  return (
    <AppDiv>
    <ClientHeader />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLogin />} />
        <Route path="/login/*" element={<ClientLogin />} />
        <Route path="/find_id/*" element={<Userid />} />
        <Route path="/main/*" element={<ClientMain />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AppDiv>
  );
}

export default App;

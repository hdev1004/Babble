import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import ClientMain from "./page/client/main/ClientMain";
import ClientHeader from "page/client/header/ClientHeader";
import ClientLogin from "./page/client/login/ClientLogin";
import NotFound from "page/notfound/Notfound";
//import ClientMain from "./page/client/main/ClientMain";

const App = () => {
  return (
    <div>
    <ClientHeader />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLogin />} />
        <Route path="/login/*" element={<ClientLogin />} />
        <Route path="/main/*" element={<ClientMain />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

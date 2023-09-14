import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageBase } from "./Pages/PageBase";
import { Terceirizacao } from "./Pages/Terceirizacao";
import { Servicos } from "./Pages/Servicos";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}></Route>
        <Route path="/servicos" element={<Servicos />}></Route>
        <Route path="/vantagens" element={<Terceirizacao />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

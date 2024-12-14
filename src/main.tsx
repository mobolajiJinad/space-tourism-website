import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Home from "./pages/Home.tsx";
import RootLayout from "./RootLayout.tsx";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

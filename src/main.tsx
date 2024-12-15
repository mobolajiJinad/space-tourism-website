import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import RootLayout from "./RootLayout.tsx";
import Home from "./pages/Home.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";
import Technology from "./pages/Technology.tsx";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />}></Route>
        <Route path="technology" element={<Technology />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

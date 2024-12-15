import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import RootLayout from "./RootLayout.tsx";
import Home from "./pages/Home.tsx";
import Destination from "./pages/Destination.tsx";
import DestinationMoon from "./components/destination/DestinationMoon.tsx";
import DestinationMars from "./components/destination/DestinationMars.tsx";
import DestinationEuropa from "./components/destination/DestinationEuropa.tsx";
import DestinationTitan from "./components/destination/DestinationTitan.tsx";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />}>
          <Route index element={<DestinationMoon />} />
          <Route path="moon" element={<DestinationMoon />} />
          <Route path="mars" element={<DestinationMars />} />
          <Route path="europa" element={<DestinationEuropa />} />
          <Route path="titan" element={<DestinationTitan />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

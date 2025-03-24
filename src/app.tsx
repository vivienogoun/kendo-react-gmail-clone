import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerRouterContainer from "./drawer-router-container";
import Mail from "./Mail";

import "@progress/kendo-theme-material/dist/all.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <DrawerRouterContainer>
        <Routes>
          <Route path="/" element={<Mail />} />
        </Routes>
      </DrawerRouterContainer>
    </BrowserRouter>
  );
}

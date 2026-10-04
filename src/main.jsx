import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Router from "../src/router/Router";
import ThemeProvider from "./contexts/ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mx-auto h-flex">
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </div>
  </StrictMode>,
);

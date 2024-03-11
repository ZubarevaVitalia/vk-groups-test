import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);

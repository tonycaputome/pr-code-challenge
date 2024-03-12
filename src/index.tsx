import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { StoreProvider } from "./context";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

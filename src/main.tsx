import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TranslationProvider } from "./providers/TranslationProvider";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </StrictMode>
);

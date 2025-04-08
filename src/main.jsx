import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TranslationProvider } from "./Providers/TranslationProvider";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}

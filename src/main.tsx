import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TranslationProvider } from "./providers/TranslationProvider";
import { PortfolioProvider } from "./providers/PortfolioProvider";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <TranslationProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </TranslationProvider>
  </StrictMode>
);

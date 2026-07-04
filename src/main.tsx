import { createRoot } from "react-dom/client";
import { AppProviders } from "./AppProviders";
import { AppRouter } from "app/routing/AppRouter";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found in document.");
}

createRoot(rootElement).render(
  <AppProviders>
    <AppRouter />
  </AppProviders>,
);

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";


/**
 * Note:
 * React.StrictMode is intentionally removed to prevent
 * double rendering in development (which can trigger
 * duplicate API calls, animations, or side effects).
 */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
import Layout from "./layout/layout";
import { LandingPage, AboutUs } from "./modules";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Root application component
 */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Default Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Other Routes */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
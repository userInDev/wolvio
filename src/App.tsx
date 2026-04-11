import Layout from "./layout/layout";
import { LandingPage, AboutUs } from "./modules";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Root application component
 */
const HIDE_SITE = true;
function App() {

  if (HIDE_SITE) {
    return <h1 style={{ textAlign: "center", marginTop: "20%" }}>
      Site under maintenance
    </h1>;
  }

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
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ResumePage from "./pages/ResumePage";
import InternshipsPage from "./pages/InternshipsPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/resume"
          element={<ResumePage />}
        />

        <Route
          path="/internships"
          element={<InternshipsPage />}
        />

      </Routes>
    </>
  );
}

export default App;
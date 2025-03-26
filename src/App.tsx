import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";

import { Home } from "./routes/home";
import { Artist } from "./routes/artist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

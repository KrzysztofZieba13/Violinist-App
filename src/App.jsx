import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Recordings from "./pages/Recordings";
import HeaderNav from "./components/HeaderNav";
import Repertoire from "./pages/Repertoire";
import ContactFooter from "./pages/ContactFooter";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="nagrania" element={<Recordings />} />
        <Route path="repertuar/:panel" element={<Repertoire />} />
        <Route path="kontakt" element={<ContactFooter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

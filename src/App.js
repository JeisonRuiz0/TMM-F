import "./App.css";
import HomeSection from "./Sections/HomeSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateProfile from "./Sections/CandidateProfile";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomeSection/>}></Route>
          <Route path="/perfil" element={<CandidateProfile/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

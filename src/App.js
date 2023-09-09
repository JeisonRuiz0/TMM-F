import "./App.css";
import HomeSection from "./Sections/HomeSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateProfile from "./Sections/CandidateProfile";
import FormSection from "./Sections/FormSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/TMM-F" element= {<HomeSection/>}></Route>
          <Route path="/TMM-F/perfil" element={<CandidateProfile/>}></Route>
          <Route path="/TMM-F/aporte" element={<FormSection/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;

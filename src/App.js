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
          <Route path="/" element= {<HomeSection/>}></Route>
          <Route path="/" element={<CandidateProfile/>}></Route>
          <Route path="/" element={<FormSection/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;

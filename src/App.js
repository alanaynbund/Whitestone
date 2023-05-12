import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./views/home/Home"
import ContactPage from "./views/contactPage/ContactPage";
import Privacy from "./views/privacyPolicy/Privacy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/policy" element={<Privacy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

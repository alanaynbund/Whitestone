import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./views/home/Home"
import ContactPage from "./views/contactPage/ContactPage";
import Privacy from "./views/privacyPolicy/Privacy";
import About from "./views/about/About";
import Industries from "./views/industries/Industries";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/policy" element={<Privacy/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/industries" element={<Industries/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

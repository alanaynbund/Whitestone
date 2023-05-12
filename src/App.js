import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./views/home/Home"
import ContactPage from "./views/contactPage/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

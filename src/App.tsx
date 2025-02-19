import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeComponent } from "./components/homeComponent/HomeComponent"
import { ProjectComponent } from "./components/projectComponent/ProjectComponent"
import { FooterComponent } from "./components/footerComponent/FooterComponent"
import { HeaderComponent } from "./components/headerComponent/HeaderComponent"
import { ContactComponent } from "./components/contactComponent/ContactComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <BrowserRouter>
      <div className="mainContainer">
        <HeaderComponent />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/projects" element={<ProjectComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  )
}

export default App

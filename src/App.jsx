import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/ui/Nav";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <main className="bg-slate-300/20">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

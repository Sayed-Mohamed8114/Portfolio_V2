import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/ui/Nav";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

function App() {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index="/" element={<Home />} />
          <Route index="/projects" element={<Projects />} />
          <Route index="/about" element={<About />} />
          <Route index="/contact" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

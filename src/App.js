import './App.css';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from "./views/NotFound";
import { Routes, Route } from "react-router-dom";
import News from './views/News';
import Header from './components/headerSection/Header';


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  );
}

export default App;

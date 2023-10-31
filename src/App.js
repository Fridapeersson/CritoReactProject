import './App.css';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from "./views/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import News from './views/News';
import ArticleDetails from './components/news/ArticleDetails';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/articledetails/:id" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

import "./assets/scss/Index.scss";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import News from "./views/News";
import ArticleDetails from "./components/news/ArticleDetails";
import AutoScrollToTop from "./generics/AutoScrollToTop";
import ScrollToTopButton from "./generics/ScrollToTopButton";
import { ArticleProvider } from "./context/ArticleContext";
import Service from "./views/Service";

import { HeaderProvider } from "./context/HeaderContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <ArticleProvider>
            <AutoScrollToTop />
            <ScrollToTopButton />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<ArticleDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ArticleProvider>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

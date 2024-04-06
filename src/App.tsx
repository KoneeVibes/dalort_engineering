import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Service } from './pages/service';
import { useRef } from 'react';
import ScrollToTop from './scrollToTop';

function App() {
  const aboutRef = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const calendlyRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                aboutRef={aboutRef}
                footerRef={footerRef}
                calendlyRef={calendlyRef}
              />
            }
          />
          <Route
            path='/:service'
            element={
              <Service
                footerRef={footerRef}
              />
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

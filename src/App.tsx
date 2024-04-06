import './App.css';
import { Container } from '@mui/material';
import { Navbar } from './components/navigation';
import { Header } from './components/header';
import { Services } from './containers/services';
import { About } from './containers/about';
import { CoreValue } from './containers/coreValue';
import { Testimonial } from './containers/testimonial';
import { FAQ } from './components/faq';
import { Footer } from './components/footer';
import { useRef } from 'react';
import { Professionals } from './containers/professionals';
import { Calendly } from './containers/calendly';

function App() {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const calendlyRef = useRef(null)

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Navbar footerRef={footerRef} />
      <Header aboutRef={aboutRef} calendlyRef={calendlyRef} />
      <Services />
      <About aboutRef={aboutRef} />
      <CoreValue />
      <Professionals />
      <Testimonial />
      <Calendly calendlyRef={calendlyRef} />
      <FAQ />
      <Footer footerRef={footerRef} calendlyRef={calendlyRef} />
    </Container>
  );
}

export default App;

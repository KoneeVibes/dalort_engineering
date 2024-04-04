import './App.css';
import { Container } from '@mui/material';
import { Navbar } from './containers/navigation';
import { Header } from './containers/header';
import { Services } from './containers/services';
import { About } from './containers/about';
import { CoreValue } from './containers/coreValue';
import { Testimonial } from './containers/testimonial';
import { FAQ } from './containers/faq';
import { Footer } from './containers/footer';
import { useRef } from 'react';
import { Professionals } from './containers/professionals';

function App() {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Navbar footerRef={footerRef} />
      <Header aboutRef={aboutRef} />
      <Services />
      <About aboutRef={aboutRef} />
      <CoreValue />
      <Professionals />
      <Testimonial />
      <FAQ />
      <Footer footerRef={footerRef} />
    </Container>
  );
}

export default App;

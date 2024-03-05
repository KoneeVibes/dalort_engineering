import './App.css';
import { Container } from '@mui/material';
import { Navbar } from './containers/navigation';
import { Header } from './containers/header';
import { Services } from './containers/services';
import { About } from './containers/about';
import { Deliverables } from './containers/deliverables';
import { CoreValue } from './containers/coreValue';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Navbar />
      <Header />
      <Services />
      <About />
      <Deliverables />
      <CoreValue />
    </Container>
  );
}

export default App;

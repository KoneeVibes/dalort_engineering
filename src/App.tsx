import './App.css';
import { Container } from '@mui/material';
import { Navbar } from './containers/navigation';
import { Header } from './containers/header';

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
    </Container>
  );
}

export default App;

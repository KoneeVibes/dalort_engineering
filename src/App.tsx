import './App.css';
import { Container } from '@mui/material';
import { Navbar } from './containers/navigation';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Navbar />
    </Container>
  );
}

export default App;

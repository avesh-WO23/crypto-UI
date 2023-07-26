import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './routes/routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

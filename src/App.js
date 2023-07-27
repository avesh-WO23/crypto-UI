import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './routes/routes';
import ThemeLoader from './theme/ThemeLoader';

function App() {
  return (
    <ThemeLoader>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </ThemeLoader>
  );
}

export default App;

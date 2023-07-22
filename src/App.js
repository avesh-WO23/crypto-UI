import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Classifier from "./components/classifier/Classifier";
import { theme } from "./theme";

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Classifier />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;

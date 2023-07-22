import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Classifier from "./pages/Classifier";
import Results from "./pages/Results";
import { theme } from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Classifier />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

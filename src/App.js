import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Classifier from "./pages/Classifier";
import Results from "./pages/Results";
import { theme } from "./theme";
import Layout from "./components/layout/Layout";
// import Routes from "./Routes/routes";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Classifier />} />
              <Route path="/results" element={<Results />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

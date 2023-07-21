import "./App.css";
import Classifier from "./components/classifier/Classifier";
import { Container } from "./components/common/Container";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Classifier />
      </ThemeProvider>
    </div>
  );
}

export default App;

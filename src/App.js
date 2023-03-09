import "./App.css";
import Button from "./components/Button";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}

export default App;

import Main from "./pages/Main/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles"; 
import Home from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;

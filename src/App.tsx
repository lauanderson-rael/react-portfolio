import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ThemeProvider } from "./context/contextTheme";

function App() {
  return (
    <ThemeProvider>
        <Header />
        <Main />
    </ThemeProvider>
  );
}

export default App;

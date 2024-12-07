
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { Main } from "./pages/Main";
import Blog from "./pages/Blog";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";


function Layout() {
  return (
    <>
    <ThemeProvider >

        <Header ></Header>
        <main>
          <Outlet /> {/* Renderiza as rotas filhas */}
        </main>

        <Footer/>

    </ThemeProvider>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main />} /> {/* Rota inicial */}
            <Route path="/blog" element={<Blog/>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

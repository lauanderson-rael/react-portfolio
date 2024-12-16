
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { Main } from "./pages/Main";
import Blog from "./pages/Blog";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login/login";
import ProtectedPage from "./pages/ProtectedPage";
import Page404 from "./pages/page404";
import ScrollToTop from "./components/ScrollToTop";


function Layout() {
  return (
    <>
    <ThemeProvider >
        <Header/>
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
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main />} /> {/* Rota inicial */}
            <Route path="/blog" element={<Blog/>} />

            <Route path="/login" element={<Login />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="*" element={<Page404/>} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

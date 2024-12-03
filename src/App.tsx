
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { Main } from "./pages/Main";
import Blog from "./pages/Blog";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function Layout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet /> {/* Renderiza as rotas filhas */}
      </main>

      <Footer/>
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

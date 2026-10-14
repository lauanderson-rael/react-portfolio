
import { BrowserRouter, Routes, Route, Outlet, useLocation} from "react-router-dom";
import { Main } from "./pages/Main";
import Blog from "./pages/Blog";
import Youtube from "./pages/Youtube";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login/login";
import ProtectedPage from "./pages/ProtectedPage";
import Page404 from "./pages/page404";
import ScrollToTop from "./components/ScrollToTop";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "./lib/gsap";


function Layout() {
  return (
    <>
    <ThemeProvider >
        <Header/>
        <main>
          <RouteFade />
        </main>
        <Footer/>
    </ThemeProvider>
    </>
  );
}

/** Fade sutil de 250ms ao trocar de rota (escopo = wrapper, skill gsap-react). */
function RouteFade() {
  const location = useLocation();
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;
      gsap.from(root.current, {
        opacity: 0,
        y: 8,
        duration: 0.25,
        ease: "power1.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: root, dependencies: [location.pathname] },
  );

  return (
    <div ref={root}>
      <Outlet /> {/* Renderiza as rotas filhas */}
    </div>
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
            <Route path="/youtube" element={<Youtube/>} />

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

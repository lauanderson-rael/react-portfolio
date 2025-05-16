import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Move a página para o topo
  }, [pathname]); // Dispara sempre que a rota mudar

  return null; // Não renderiza nada
};

export default ScrollToTop;

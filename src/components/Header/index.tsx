import { Link, useLocation } from "react-router-dom";
import { Container } from "./styles";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { PiCodeFill } from "react-icons/pi";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { gsap, prefersReducedMotion, useGSAP } from "../../lib/gsap";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isCustomPage = location.pathname === "/blog" || location.pathname === "/youtube";

  const root = useRef<HTMLElement | null>(null);
  const referencia1 = useRef<HTMLDivElement | null>(null);

  // Entrada sutil do header + stagger dos links (escopo = este componente).
  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;
      gsap.from(".menu-desktop li", {
        y: -12,
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.06,
        clearProps: "transform,opacity",
      });
    },
    { scope: root },
  );

  // Callbacks que rodam DEPOIS do useGSAP precisam de contextSafe (skill gsap-react).
  const { contextSafe } = useGSAP({ scope: root });

  const animarLinksMobile = contextSafe(() => {
    if (prefersReducedMotion() || !root.current) return;
    const links = root.current.querySelectorAll(".menu-mobile nav li");
    if (links.length === 0) return;
    gsap.fromTo(
      links,
      { x: 24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35, ease: "power2.out", stagger: 0.05, clearProps: "transform,opacity" },
    );
  });

  const AbrirMenu = contextSafe(() => {
    referencia1.current?.classList.add("abrir-menu");
    animarLinksMobile();
  });

  const FecharMenu = contextSafe(() => {
    referencia1.current?.classList.remove("abrir-menu");
  });

  const onToggleTheme = contextSafe(() => {
    toggleTheme();
  });

  return (
    <Container ref={root}>
      <div className="interface">
        <div className="logo">
          <Link to={"/"}>
            <div style={{ color: "var(--text-color-blue-green)", fontSize: "40px", marginTop: '5px' }}>
              <PiCodeFill />
            </div>
          </Link>

          <div>
            {theme === "dark" ? (
              <MdLightMode onClick={onToggleTheme} />
            ) : (
              <MdNightlight onClick={onToggleTheme} />
            )}
          </div>
        </div>

        {/* inicio menu-desktop */}
        <nav className="menu-desktop">
          <ul>
            <li className="header-blog">
              <Link to={"/"}>Início</Link>
            </li>

            <li className="header-home">
              <Link to={"/"}><IoMdHome size={22}/></Link>
            </li>
            {!isCustomPage && (
              <li className="header-home">
                <Link to={"/login"}>Admin</Link>
              </li>
            )}
            <li className="header-blog">
              <a href="#especialidades">Especialidades</a>
            </li>
            <li className="header-blog">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="header-blog">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="header-blog">
              <a href="#formulario">Contato</a>
            </li>
            <li className="li-blog">
              <Link to={"/blog"} style={{color: location.pathname === "/blog" ? 'var(--text-color-blue-green)' : 'inherit'}}>
                Blog
              </Link>
            </li>
            <li className="li-blog">
              <Link to={"/youtube"} style={{color: location.pathname === "/youtube" ? 'var(--text-color-blue-green)' : 'inherit'}}>
                YouTube
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* fim menu-desktop */}


        <div className="barra-lateral">
          <div className="btn-abrir-menu" onClick={AbrirMenu}>
            <i>
              <BsList />
            </i>
          </div>

          {/* inicio menu-mobile */}
          <div className="menu-mobile" ref={referencia1} onClick={FecharMenu}>
            <div className="btn-fechar">
              <i>
                <IoMdClose />
              </i>
            </div>

            <nav>
              <ul>
                <li className="header-blog">
                  <a href="/#inicio">Início</a>
                </li>

                <li className="header-home">
                   <Link to={"/"}>
                 
                   
                  
                      <IoMdHome size={22}/> 
                 
                   </Link>
                </li>

                {!isCustomPage && (
                  <li className="header-home">
                    <Link to={"/login"}>Admin</Link>
                  </li>
                )}
                <li className="header-blog">
                  <a href="#especialidades">Especialidades</a>
                </li>
                <li className="header-blog">
                  <a href="#sobre">Sobre</a>
                </li>
                <li className="header-blog">
                  <a href="#projetos">Projetos</a>
                </li>
                <li className="header-blog">
                  <a href="#formulario">Contato</a>
                </li>

                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/youtube"}>YouTube</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* fim menu-mobile */}

          <div className="overlay-menu" onClick={FecharMenu}></div>
        </div>
      </div>
    </Container>
  );
}
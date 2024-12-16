import { Link } from "react-router-dom";
import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { PiCodeFill } from "react-icons/pi";
import "../../pages/Main/index";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { MdLightMode, MdNightlight } from "react-icons/md";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const referencia1 = useRef<HTMLDivElement | null>(null);
  const AbrirMenu = () => {
    if (referencia1.current) {
      referencia1.current.classList.add("abrir-menu");
    }
  };

  const referencia2 = useRef<HTMLDivElement | null>(null);
  const FecharMenu = () => {
    if (referencia1.current) {
      referencia1.current.classList.remove("abrir-menu");
    }
  };

  return (
    <Container>
      <div className="interface">
        <div className="logo">
          <Link to={"/"}>
            <div style={{ color: "#00ff08", fontSize: "40px" }}>
              {" "}
              <PiCodeFill />{" "}
            </div>
          </Link>

          <div>
            {theme === "dark" ? (
              <MdLightMode onClick={toggleTheme} />
            ) : (
              <MdNightlight onClick={toggleTheme} />
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
              <Link to={"/"}>Voltar</Link>
            </li>
            <li className="header-home">
              <Link to={"/login"}>Admin</Link>
            </li>
            <li className="header-blog">
              <a href="#especialidades">Especialidades</a>
            </li>
            <li className="header-blog">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="header-blog">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="li-blog">
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </nav>
        {/* fim menu-desktop */}

        <div className="btn-contato header-blog">
          <a href="#formulario">
            <button>Contato</button>
          </a>
        </div>

        <div className="barra-lateral">
          <div className="btn-abrir-menu" onClick={AbrirMenu} ref={referencia2}>
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
                  <Link to={"/"}>Voltar</Link>
                </li>

                <li className="header-home">
                  <Link to={"/login"}>Admin</Link>
                </li>
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

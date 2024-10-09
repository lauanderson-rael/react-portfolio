import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { PiCodeFill } from "react-icons/pi";
import { useRef } from "react";
import { useThemeContext } from "../../context/contextTheme";
import "../Main/index";


export function Header() {
  // obtendo uma tag "div" do nosso documento jsx atraves de useRef
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

  const { isDarkMode, toggleTheme } = useThemeContext();


  return (
    <Container>
      <div className={isDarkMode ? 'light-mode interface' : 'dark-mode interface'}>
        <div className="logo">  
          <a href="#">
          <div style={{color: '#00ff08', fontSize: '40px'}}>  <PiCodeFill/> </div>
          </a>
        </div>

        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#especialidades">Especialidades</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <div onClick={toggleTheme}>
              <a href="#theme">Mudar Tema</a>
            </div>
          </ul>
        </nav>

        <div className="btn-contato">
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



          <div className="menu-mobile" ref={referencia1} onClick={FecharMenu}>
            <div className="btn-fechar">
              <i>
                <IoMdClose />
              </i>
            </div>

            <nav>
              <ul>
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#especialidades">Especialidades</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#projetos">Projetos</a>
                </li>
                <li>
                  <a href="#formulario">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="overlay-menu" onClick={FecharMenu}></div>
        </div>
      </div>
    </Container>
  );
}

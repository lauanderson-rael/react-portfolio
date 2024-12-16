import styled from "styled-components";
import { useLocation } from "react-router-dom";

const VerificarRota = () => {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog" ||  location.pathname === "/login" ||  location.pathname === "/protected";
  return isBlogPage;
}

export const Container = styled.header`
  background-color: var(--background-color-gray);
  color: var(--text-color);
  box-shadow: 0 -15px 25px 10px var(--text-color);
  padding: 10px;
  padding-bottom: 0px;
  position: sticky;
  top: 0;
  z-index: 3000;

  .logo{
    display: flex;
    align-items: center;
    width: 10%;
    justify-content: space-between;
  }

  .header-blog{
    display: ${() => (VerificarRota() ? "none" : "block")};
  }
  .header-home{
    display: ${() => (VerificarRota() ? "block" : "none")};
  }

  .li-blog{
    a{
      text-decoration: underline;
    }
  }


  .barra-lateral {
    display: none;
  }
  padding: 10px 4%;
  .interface {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .interface .menu-desktop ul {
    display: flex;
    gap: 60px;
  }

  img {
    width: 75px;
    height: auto;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    display: inline-block; // para dar zoon no hover
    transition: all.2s;
  }

  nav.menu-desktop a:hover {
    transform: scale(1.05);
    font-weight: 600;
  }

  nav ul {
    list-style-type: none;
  }

  nav .menu-desktop ul li {
    display: inline-block;
    padding: 0 40px; // cima baixo | esq dir
  }

  @media (max-width: 1010px) {
    // barra header fixo aqui
    padding: 10px;
    padding-bottom: 0px;
    position: sticky;
    top: 0;
    z-index: 3000;

    img {
    width: 70px;
    height: auto;
  }

  .logo{
    width: 25%;
  }

    .menu-desktop,
    .btn-contato {
      display: none;
    }

    .barra-lateral {
      display: flex;
    }

    .btn-abrir-menu i {
      color: #00ff08;
      font-size: 38px;
    }

    .menu-mobile {
      background-color: var(--background-color);
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99999; // camadas acima
      width: 0%;
      overflow: hidden;
      transition: all.3s;

      .btn-fechar {
        padding: 20px 5%;
      }

      .btn-fechar i {
        color: #00ff08;
        font-size: 30px;
      }
    }

    .menu-mobile.abrir-menu {
      width: 70%;
    }
    .menu-mobile.abrir-menu ~ .overlay-menu {
      // sempre que existir (.menu-mobile.abrir-menu)
      // .overlay-menu sera alterado para:
      display: block;
    }

    .menu-mobile nav ul {
      text-align: right;

      li a {
        color: var(--text-color);
        font-size: 20px;
        font-weight: 400;
        padding: 20px 8%;
        display: block;
      }

      li a:hover {
        background-color: #00ff08;
        color: #000;
      }
    }

    .overlay-menu {
      background-color: #000000df;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 8888;
      display: none; // vai mudar para display: block;
    }
  }

  /////////// ESTILO - MENU MOBILE ///////////////////
`;

import styled from "styled-components";

export const Container = styled.header`

box-shadow: 0 0 40px 10px #ffffff1d;
  background: black;
  padding: 10px;
  padding-bottom: 0px;
  position: sticky;
  top: 0;
  z-index: 3000;

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
    color: #7c7c7c;
    text-decoration: none;
    display: inline-block; // para dar zoon no hover
    transition: all.2s;
  }

  nav.menu-desktop a:hover {
    color: #fff;
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
    background: black;
    position: sticky;
    top: 0;
    z-index: 3000;

    img {
    width: 70px;
    height: auto;
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
      background-color: #000;
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
        color: #fff;
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

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: var(--background-color2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }

  /* SELECIONADO*/
  nav ul li a {
    text-decoration: none;
    padding: 10px;
    display: block;
    color: var(--text-color2);
  }

  nav ul li a.active {
    background-color:rgb(123, 123, 123); /* Cor de fundo para o item selecionado */
    color: white; /* Cor do texto */
    border-radius: 4px;
  }

  nav {
    h3 {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      a {
        display: block;
        padding: 12px;
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        margin: 10px 0;
        border-radius: 5px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color:rgb(175, 175, 175);
        }
      }
    }
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 5px 20px;
  @media (max-width: 768px){
    padding: 5px 10px;
  }


  .lista {
    border: 1px solid var(--background-color2);
    border-radius: 10px;
    height: 70vh;
    overflow-y: scroll;
    padding: 20px;

    @media (max-width: 768px){
      display: none}
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 770px;

  .lista-mobile{
    display: none;
    @media (max-width: 768px){
      display: block;
      height: 600px;
      overflow-y: scroll;
      border: 1px solid var(--background-color2);
      border-radius: 10px;
      padding: 10px;
    }
  }

  /* @media (max-width: 768px) {
      // mostrar so no mobile
      .lista-mobile{
        display: block;
      }

      width: 90vw;
      padding: 10px; /* Diminui o padding nas caixas */


  .caixa {
    background-color: var(--background-color3);
    border-radius: 8px;
    padding: 15px;
    border: 1px solid var(--background-color2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }



  h3 {
    font-size: 1.25rem;
    color: var(--text-color);
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 1.1rem; /* Ajusta o tamanho da fonte do título */
    }
  }

  .form-new {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .flex-items{
      display:  grid;
      grid-template-columns:1fr 1fr;
      gap: 15px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;

      }

    }

    input, textarea {

      padding: 5px;
      border-radius: 6px;
      border: 1px solid var(--background-color2);
      font-size: 1rem;
      transition: border 0.3s ease;

      &::placeholder{
        font-size:small;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem; /* Diminui o tamanho da fonte nos inputs e textarea */
      }

    }

    textarea {
      min-height: 100px;
      resize: vertical;
    }

    button {
      padding: 12px 20px;
      background-color: #00ff08;
      color: #000;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        transform: none;
        background-color: rgb(5, 185, 11);
      }

      @media (max-width: 768px) {
        padding: 10px 15px; /* Diminui o padding do botão */
        font-size: 0.9rem; /* Diminui o tamanho da fonte do botão */
      }
    }
  }


`;

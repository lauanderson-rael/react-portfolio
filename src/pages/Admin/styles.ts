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
    width: 200px; /* Diminui a largura da sidebar em telas menores */
    padding: 10px; /* Reduz o padding para otimizar o espaço */
    nav ul li a {
      font-size: 0.9rem; /* Reduz o tamanho da fonte */
    }
  }

  /* SELECIONADO*/
  nav ul li a {
    text-decoration: none;
    padding: 10px;
    display: block;
    color: var(--text-color2);
  }

  nav ul li a.active {
    background-color: #007bff; /* Cor de fundo para o item selecionado */
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
          background-color: #34495e;
        }
      }
    }
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 5px 20px;

  .lista {
    border: 1px solid var(--background-color2);
    border-radius: 10px;
    height: 600px;
    overflow-y: scroll;
    padding: 20px;

    @media (max-width: 768px) {
      height: 400px; /* Reduz a altura da lista em telas menores */
    }
  }
`;

export const Header = styled.header`
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 1.5rem; /* Ajusta o tamanho da fonte do título */
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  .caixa {
    background-color: var(--background-color3);
    border-radius: 8px;
    padding: 15px;
    border: 1px solid var(--background-color2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      padding: 10px; /* Diminui o padding nas caixas */
    }
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
    gap: 5px;

    label {
      font-weight: 600;
      color: var(--text-color);
      font-size: small;

      @media (max-width: 768px) {
        font-size: x-small; /* Ajusta o tamanho da fonte do label */
      }
    }

    input, textarea {
      padding: 5px;
      border-radius: 6px;
      border: 1px solid var(--background-color2);
      font-size: 1rem;
      transition: border 0.3s ease;

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
        background-color: rgb(5, 185, 11);
      }

      @media (max-width: 768px) {
        padding: 10px 15px; /* Diminui o padding do botão */
        font-size: 0.9rem; /* Diminui o tamanho da fonte do botão */
      }
    }
  }
`;

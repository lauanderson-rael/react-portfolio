import styled from "styled-components";

export const Container = styled.footer`
  transition: var(--transition);
  background-color: var(--background-color-gray);
  padding: 40px 4%;
  box-shadow: 0 20px 40px 10px  var(--text-color);


  img {
    width: 75px;
    height: auto;

  }

  .flex {
    justify-content: space-between;
  }

  .line-footer {
    padding: 20px 0;
    color: #fff;

  }

  .line-footer span, .line-footer p a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:  gray;

  }

  .line-footer p i {
    color: #00ff08;
    font-size: 22px;
  }

  .btn-social button {
        width: 50px;
        height: 50px;
        border-radius: 20%;
        border:none;
        background-color: transparent;
        color: var(--text-color-blue-green);
        font-size: 25px;
        cursor: pointer;
        margin: 0 0px; // cima baixo / laterais
        transition: all.2s;
      }


  @media (max-width: 1020px) {
    .btn-social button {
      font-size: 20px
    }
    font-size: small;
    .flex {
      gap: 30px;
    }
    .line-footer {
      text-align: center;
    }

    .logo-footer{
    display: none;
    }

  }

`;

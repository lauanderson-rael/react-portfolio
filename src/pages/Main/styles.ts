import styled from "styled-components";

export const Container = styled.main`

  // temas
  h2, p{
    color: var(--text-color);
  }

  // TELA 1
  section.topo-do-site {
    padding: 100px 12%;
    height: 80dvh;

    .flex {
      justify-content: space-around;
      align-items: center;
    }
    .arrow-desktop{
      color: var(--text-color);
      rotate: 90deg;
      margin-top: 30px;
      display: grid;
      place-items: center;
      position: relative;
      animation: flutuar 2s ease-in-out infinite alternate;
    }

    .arrow-mobile{
      display: grid;
      place-items: center;
    }

    .txt-topo-site strong {
      font-size: 55px;
      color: #00ff08;
    }

    .informacoes{
      background-color: none;
      padding: 0;
      margin-bottom: 50px;
    }
    .txt-topo-site p {
      font-size: large;
      margin: 10px 0;
      padding: 0;
    }


    .img-topo-site img {
      width: 300px;
      height: 300px;
      border: 8px solid #00ff08;
      border-radius: 50%;
      position: relative; // para funcionar animacao
      //animation: flutuar 2s ease-in-out infinite alternate;
      filter: drop-shadow(0 0 0.8rem #00ff08);
      box-shadow: 1px 1px 0.5rem #00ff08;
    }

    .scroll{
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      bottom: 0;
      gap: 5px;
    }

    //responsivo
    @media (max-width: 1020px) {
      .img-topo-site img{
        animation: flutuar 2s ease-in-out infinite alternate;
      }
      padding: 10px 8%;

      .arrow-desktop{
        display: none;
      }

      .btn-contato button{
        font-size: small;
      }
      .txt-topo-site strong {
        font-size: 32px;
      }
      .txt-topo-site p{
        font-size: medium;
        margin: 0;
      }
      .informacoes{
        margin-top: 30px;
      }
      .flex {
        flex-direction: column-reverse;
        height: 90dvh;

      }

      .img-topo-site img {
        width: 250px;
        height: 250px;
      }
      .btn-contato {
        display: flex;
        justify-content: center;
      }
    }
  }

  // ANIMAÇÃO
  @keyframes flutuar {
    0% {
      top: 0;
    }
    100% {
      top: 30px;
    }
  }

  // SESSAO SOBRE - TELA 2
  .sobre {
    margin-top: 40px;
    padding: 80px 12%;

    .flex {
      align-items: center;
      gap: 60px;
    }

    .img-sobre img {
      width: 344px;
      border-radius: 25px;
    }
    .img-sobre-mobile img{
      display: none;
    }
    .txt-sobre {
      color: #fff;

      h2 {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 30px;
        span {
          color: #00ff08;
          display: block;
        }
      }

      p {
        margin: 20px 0; // cima baixo / laterais
        text-align: justify;
        color: var(--text-color);
      }

      .btn-social button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background-color: #00ff08;
        font-size: 25px;
        cursor: pointer;
        padding-top: 5px;
        margin: 0 5px; // cima baixo / laterais
        transition: all.2s;
      }
    }
    // responsivo - sobre
    @media (max-width: 1020px) {
      padding: 30px 4%;
      .flex {
        flex-direction: column;
      }
      .txt-sobre h2 {
        font-size: 32px;
        line-height: 35px;
        text-align: center;
      }
      .btn-social {
        text-align: center;
      }
      .img-sobre img {
        width: 80%;
        display: none;
      }
      .img-sobre-mobile img{
        width: 100%;
        display: block;
        margin: 0 auto;
      }
    }
  }

// ESPECIALIDADES - TELA 3
.especialidades {

  padding: 80px 12%;

  h2 span {
    color: #00ff08;
  }
  .flex {
    gap: 60px;
  }


// COMPONENTES- SKILLS

  .especialidades-box {
    color: var(--text-color);
    padding: 20px;
    margin: 0 auto;
    margin-top: 45px;
    border-radius: 20px;
    border: 1px solid #7c7c7c;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icone {
      font-size: 45px;
      color: #00ff08;
    }
    strong{
      margin-bottom: 30px;
    }

    .flex-skills{
      display: flex;
      gap: 20px;

    }
    .center{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  // responsivo
  @media (max-width: 1020px) {
    padding: 80px 4%;
    .especialidades-box {
      padding: 0;
      padding: 20px;
    }
    .especialidades-box .flex-skills{
      gap: 15px;
    }
    .especialidades-box .center p{
      font-size: x-small;
    }
  }
}


// SESSAO PORTIFOLIO - TELA 4

  .portfolio {
    margin-top: 30px;
    padding: 80px 12%;

    .grid {
      margin-top: 40px;
      display: grid;
      place-items:center;
      grid-template-columns: 1fr 1fr;
      /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    }
  }

  .img-port {
    border: 2px solid white;
    width: 360px;
    height: 460px;
    color: white;
    cursor: pointer;
    border-radius: 10px;

  }

  // responsivo - portfolio
  @media (max-width: 1020px) {
    .img-port {
      width: 100%;
      max-width: 360px;
      margin: 0 auto;
    }
    .portfolio .grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .portfolio{
      padding: 80px 1%;
    }
  }
`;




// SESSÃO FORMULARIO - TELA 5
export const SessaoFormulario = styled.section`
  padding: 80px 4%;
  margin-top: 40px;

  form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;

    input,
    textarea {
      width: 100%;
      background-color: #b5b5b5;
      border: 0;
      outline: none;
      padding: 20px 15px; // cima baixo - laterais
      border-radius: 15px;
      font-size: 18px;

    }

    textarea {
      resize: none;
      max-height: 180px;
    }
  }

  .btn-enviar {
    margin-top: 20px;
    text-align: center;

    input[type="submit"] {
      color: #000;
      font-weight: 700;
      background-color: #00fe08;
      cursor: pointer;
      transition: all.2s;

    }

    input:hover {
      box-shadow: 0px 0px 8px #00ff08;
      transform: scale(1.03);
    }
  }

  // botao limpar
  input[type="reset"] {
      color: #000;
      font-weight: 700;
      background-color: #fff;
      cursor: pointer;
      transition: all.2s;
      border: 1px solid var(--text-color);
    }
    input[type="reset"]:hover {
      box-shadow: 0px 0px 8px #00ff08;
      transform: scale(1.03);
    }
  // limpar

  @media (max-width: 1020px){
    form input, form textarea{
      font-size: small;

    }
    }
`;

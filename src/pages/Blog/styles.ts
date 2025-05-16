import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-color);
  transition: var(--transition);

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

}

.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main{
  margin-bottom: 20px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 0 12%;
}

header{
  transition: var(--transition);
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: var(--background-color2);
  color: var(--text-color2);
  padding: 0 5px;
  position: fixed;
  top:80px;
  width: 100vw;
  z-index: 100;
}

article{
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: var(--background-color2) 1px 1px 3px;

  h2{
    color: var(--text-color);
    font-size: 1.3rem;
    height: 62.4px;
  }
}
article img{
  border-radius: 7px;
  margin: 10px 0;
  width: 100%;

}

article p, article span, article strong{
  color: var(--text-color);
  font-size: medium;
}

article p{
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
}


article button{
  margin-top: 10px;
  background-color: #d3d3d3;
  background-color: var(--text-color-blue-green);
  padding: 10px 0;
  border-radius: 7px;
  font-weight: 700;
  color: var(--background-color);
  transition: all 0.3s;
  transform: scale(1.02);
  width: 100%;
  border: 2px solid var(--text-color-blue-green);
}
article button:hover{
  opacity: 0.8;
  border: 2px solid var(--text-color-blue-green);
}

article a{
  margin-top: auto;
}


footer {
  margin-top: 50px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(1, 65, 1);
  color: white;
  text-align: center;
}



@media (max-width: 1020px) {
  article{
  //border: 1px solid #d3d3d3;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 30px;
  padding: 20px;
  // box-shadow: 0px 0px 7px var(--background-color2);

  h2{
    color: var(--text-color);
  }

}
  main{
    grid-template-columns: 1fr;
    padding: 0 2%;
    place-items: center;

  }

  header{
    top:70px;

  }
  h2{
    font-size: large;
  }
   main, header, footer{
    width: 100%;
   }
}

`


// SESSÃO FORMULARIO - TELA 5
export const SessaoFormulario = styled.section`
   background-color: var(--background-color);
  padding: 20px 4% 100px 4%;


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
      background-color:rgb(231, 231, 231);
      border: 0;
      outline: none;
      padding: 20px 15px; // cima baixo - laterais
      border-radius: 15px;
      /* font-size: 18px; */

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
      color: var(--background-color);
      font-weight: 700;
      background-color: var(--text-color-blue-green);
      cursor: pointer;
      transition: all.2s;

    }

    input:hover {
      box-shadow: 0px 0px 8px var(--text-color-blue-green);
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
      box-shadow: 0px 0px 8px var(--text-color-blue-green);
      transform: scale(1.03);
    }
  // limpar

  @media (max-width: 1020px){
    form input, form textarea{
      font-size: small;

    }
    }
`;

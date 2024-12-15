import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);

`;


export const Main = styled.main`
  padding: 40px 20%;

  h3{
    padding-bottom: 10px;
    text-align: justify;
  }
  h2{
    padding: 0 10px;
    margin-bottom: 5px;
    display: grid;
    place-items: center;
  }

  .caixa{
    border: 1px solid  var(--background-color2);
    border-radius: 8px;
    padding: 10px;
  }

  button{
  border: none;
  background-color: #00ff08;
  transition: all.2s;
  transform: none;
  padding: 3px 10px;

  }



  article{
    background-color:var(--background-color3) ;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid  var(--background-color2);
    border-radius: 8px;
  }

  .form-new{
    display: flex;
    flex-direction: column;
    gap: 5px;

    label{
      font-weight: 700;
      font-size: small;
    }

    input{
     padding: 5px 0px;
     border-radius: 4px;
     padding: 3px;
    }
    textarea{
     border-radius: 4px;
     height: 100px;
     padding: 3px;

    }
  }

  @media (max-width: 1020px){
    padding: 10% 2%;

    article{
      font-size: small;
      width: 98%;
    }

    h2{
      display: flex;
      justify-content: center;
      font-size: 17px;
    }
  }
`;

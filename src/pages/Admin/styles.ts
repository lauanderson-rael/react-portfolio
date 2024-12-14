import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);
`;



export const Main = styled.main`
  padding: 0 20%;

  h3{
    padding-bottom: 10px;
  }

  button{
  border-radius: 5%;
  border: none;
  background-color: #00ff08;
  transition: all.2s;
  padding: 3px 10px;

  }



  article{
    width: 80%;
    padding: 10px;
    border: 1px solid  var(--background-color2);
    border-radius: 10px;
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
    }
    textarea{
     border-radius: 4px;
    }
  }

  @media (max-width: 1020px){
    padding: 0 3%;

    article{
      font-size: small;
      width: 98%;
    }

    h2{
      display: flex;
      justify-content: center;
    }
  }
`;

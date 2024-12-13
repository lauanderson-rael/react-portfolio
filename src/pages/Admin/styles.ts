import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);

  header{
    top: 80px;
    position: absolute;
    background-color: var(--background-color2);
    color: var(--background-color);
    width: 100%;
    display: flex;
    font-weight: 700;
    justify-content: center; 
  }

  @media (max-width: 1020px){
    header{
      top: 70px;
      justify-content: center;
      align-items: center;
    }
  }

`;

export const Main = styled.main`
  margin-top: 30px;
  padding: 0 20%;

  article{
    width: 80%;
    padding: 5px;
    border: 1px solid  var(--background-color2);
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

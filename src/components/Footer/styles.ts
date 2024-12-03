import styled from "styled-components";

export const Container = styled.footer`
  padding: 40px 4%;
  box-shadow: 0 0 40px 10px #ffffff1d;

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
    color: #7c7c7c;

  }

  .line-footer p i {
    color: #00ff08;
    font-size: 22px;
  }


  @media (max-width: 1020px) {
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
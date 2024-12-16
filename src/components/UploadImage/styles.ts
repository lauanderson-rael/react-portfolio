import styled from 'styled-components'

export const Container = styled.div`

form{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

input{

}

button{
    border: none;
    background-color: #00ff08;
    transition: all.2s;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

}

@media (max-width: 1020px){
    button{
        margin-left: 0;
        margin-top: 10px;
    }
    form{
        grid-template-columns: auto;
        margin-bottom: 10px;
    }
  }

`;

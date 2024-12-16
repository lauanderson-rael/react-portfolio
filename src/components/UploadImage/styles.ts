import styled from 'styled-components'

export const Container = styled.div`

form{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}


button{
    border: none;
    border-radius: 6px;
    background-color: #00ff08;
    transition: all.2s;
    padding: 3px 10px;
    max-width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover{
        transform: none;
        background-color: rgb(5, 185, 11);
    }
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

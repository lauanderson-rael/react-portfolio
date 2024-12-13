import styled from 'styled-components'

export const Container = styled.div`

button{
    background-color: green;
    padding: 2px 3px;
    color: #fff ;
    margin-left: 5px ;
}

@media (max-width: 1020px){
    button{
        margin-left: 0;
        margin-top: 10px;
    }
  }

`;

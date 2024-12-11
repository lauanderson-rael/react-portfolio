import styled from 'styled-components'

export const ContainerPost = styled.div`
    border: 1px solid var(--background-color2);
    display: flex;
    padding: 10px;
    margin: 10px 0;
    gap: 20px;

    img{
        width: 120px;
        height: 80px;
    }
    
    p{
        font-size: small;
    }
    button{
        background-color: red;
        padding: 2px 3px;
        color: #fff;
        width: 100%;
        border: 1px solid var(--text-color);    
    }

    strong{
        color: cadetblue;
    }

`;
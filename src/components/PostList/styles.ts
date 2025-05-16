import styled from 'styled-components'

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;


    @media(max-width: 1020px){
        font-size: small;

        h2{
            font-size: 17px;
        }
    }
`;

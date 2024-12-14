    import styled from 'styled-components'

    export const ContainerPost = styled.div`
        border: 1px solid var(--background-color2);
        display: flex;
        padding: 10px;
        margin: 10px 0;
        gap: 20px;

        img{
            width: 170px;
            height: 80px;
        }

        p{
            font-size: small;
        }
        .caixa{
            max-width: 170px;
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

        @media (max-width: 1020px){
            display: flex;
            flex-direction: column-reverse;

        }
    `;

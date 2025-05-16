    import styled from 'styled-components'

    export const ContainerPost = styled.div`
        display: flex;
        padding: 10px;
        margin: 10px 0;
        gap: 20px;
        border: 1px solid var(--text-color);
        border-radius: 8px;
        max-width: 700px;

        section{
        display: flex;
        padding: 5px;
        margin: 10px 0;
        gap: 20px;


        }


        p{
            font-size: small;
        }
        .caixa{
            max-width: 170px;
            border: none;
            img{
                width: 150px;
                height: 80px;
            }
        }
        button{
            background-color: red;
            padding: 2px 3px;
            color: #fff;
            width: 100%;
            border: 1px solid var(--text-color);
            border-radius: 4px;
        }

        strong{
            color: cadetblue;
        }

        @media (max-width: 1020px){
            section{
                display: block;
            }

            .caixa{
            max-width: 400px;
            img{
                width: 100%;
                height: 100%;
            }
            }
    }
    `;

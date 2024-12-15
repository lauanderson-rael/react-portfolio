import styled from 'styled-components'

export const Container =  styled.div`
    color: var(--text-color);

    h3{
        font-size: medium;
    }
    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: var(--background-color2);
        color: var(--text-color2);
        padding: 5px;

        position: fixed;
        top:80px;
        width: 100vw;

        z-index: 100;
    }

    @media (max-width: 1020px){
        header{
            top: 70px;
        }
    }



`;

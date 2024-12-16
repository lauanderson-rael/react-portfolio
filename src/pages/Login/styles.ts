import styled from 'styled-components'

export const Container = styled.div`
    color: var(--text-color);
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;

    form{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        max-width: 360px;

        button{
            margin-top: 15px;
            border: none;
            background-color: #00ff08;
            transition: all.2s;
            padding: 8px 10px;
            border-radius: 4px;
        }

        input{
            padding: 8px;
            border-radius: 4px;
            margin: 5px 0px;
        }
    }

    @media(max-width:1080px){
        form{
            font-size: small;
        }
    }

`;

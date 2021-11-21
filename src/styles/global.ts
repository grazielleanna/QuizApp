import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #5256A1;
        --red: #EA8282;
        --green: #60BF88;
        --yellow: #F9A826;

        --purple: #5c62c2;
        
        --text-title: #1D355D;
        --text-body: rgba(96, 102, 208, 0.8);
       
        --white: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: var(--background);
        

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            background-color: transparent;
            /* width of the entire scrollbar */
        }

        &::-webkit-scrollbar-track {
            background: var(--background);
            /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
            border: 2px solid var(--purple);
            border-radius: 4px;
            background-color: var(--background);
        }
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
    }
`;

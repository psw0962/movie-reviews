import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: Noto Sans;
        font-size: 10px;

        @media screen and (max-width: 765px) {
            font-size: 9px;
        }

        @media screen and (max-width: 375px) {
            font-size: 7px;
        }
    }
`;

export default GlobalStyle;

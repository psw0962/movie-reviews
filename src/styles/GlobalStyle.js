import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    html {
        font-family: Noto Sans;
        font-size: 10px;

        @media screen and (max-width: 767px) {
            font-size: 9px;
        }
    }

    body {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
    }

    input {
        padding: 0;
    }
`;

export default GlobalStyle;

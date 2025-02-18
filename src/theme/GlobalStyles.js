import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700&display=swap&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Kanit:300,400,700,900&display=swap&subset=latin-ext');
    *,*::before,*::after
    {
        box-sizing:border-box;
        margin:0;
        padding:0;
        -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
    }
    body{
        font-family: 'Kanit', sans-serif;
        &.noscroll{
            height:100%;
            overflow:hidden;
        }
    }
    .noview{
        opacity:0;
    }
`;

export default GlobalStyles;

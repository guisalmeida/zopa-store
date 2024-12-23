import { createGlobalStyle } from 'styled-components';
import './reset.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`

:root {   
    --main-color: #000000;
    --sub-color: #808080;
    --highlight: #4285f4;
    --border: #e6e6e6;
    
    --black: #000000;
    --white: #fff;
    --dark: #212529;
    --grey: #a7a7a7;
    --light-grey: #f9f9f9;
    --red: #cf3838;

    --break-small: 450px;
    --break-medium: 768px;
    --break-large: 1170px;
    --break-huge: 1440px;

    --primary-font: "Noto Sans", sans-serif;
    --secondary-font: "Merriweather", serif;
    
    font-size: 16px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-family: var(--primary-font);
    font-weight: 400;
}

*,
:after,
:before {
    box-sizing: border-box;
}

body,
body button,
body input,
html,
html button,
html input {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--primary-font);
    font-weight: 400;
    line-height: normal;
}

body {
    background-color: var(--light-grey);
    color: var(--dark);
    min-height: 100vh;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
}

button {
    outline: none;
    border: none;
    background-color: transparent;
}

button, a {
    cursor: pointer;
}

.container {
    width: 100%;
    max-width: var(--break-large);
}
`;
export default GlobalStyles;

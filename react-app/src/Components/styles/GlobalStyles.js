import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
    }
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
`

export default GlobalStyles;
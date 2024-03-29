import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    cursor: pointer;
}

button,
._btn {
    cursor: pointer;
}

ul li {
    list-style: none;
}

//-------------------------------//

// ========== fonts ========
@font-face {
    font-family: 'Stratos';
    src: url(${'Stratos-Black.woff2'}) format('woff2'),
    url(${'Stratos-Black.woff'}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}


@font-face {
    font-family: 'Stratos';
    src: url(${'Stratos-Bold.woff2'}) format('woff2'),
        url(${'Stratos-Bold.woff'}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-BlackItalic.woff2') format('woff2'),
        url('Stratos-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-BoldItalic.woff2') format('woff2'),
        url('Stratos-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-ExtraBold.woff2') format('woff2'),
        url('Stratos-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-ExtraBoldItalic.woff2') format('woff2'),
        url('Stratos-ExtraBoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-ExtraLight.woff2') format('woff2'),
        url('Stratos-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-ExtraLightItalic.woff2') format('woff2'),
        url('Stratos-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-Light.woff2') format('woff2'),
        url('Stratos-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-Italic.woff2') format('woff2'),
        url('Stratos-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-LightItalic.woff2') format('woff2'),
        url('Stratos-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-Medium.woff2') format('woff2'),
        url('Stratos-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-MediumItalic.woff2') format('woff2'),
        url('Stratos-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-Regular.woff2') format('woff2'),
        url('Stratos-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-SemiBold.woff2') format('woff2'),
        url('Stratos-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-SemiBoldItalic.woff2') format('woff2'),
        url('Stratos-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos SemiLight';
    src: url('Stratos-SemiLight.woff2') format('woff2'),
        url('Stratos-SemiLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-Thin.woff2') format('woff2'),
        url('Stratos-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos';
    src: url('Stratos-ThinItalic.woff2') format('woff2'),
        url('Stratos-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Stratos SemiLight';
    src: url(${'../fonts/Stratos-SemiLightItalic.woff2'}) format('woff2'),
        url(${'../fonts/Stratos-SemiLightItalic.woff'}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

//--------------------------

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #ffffff;
}

.wrapper {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
}

`;

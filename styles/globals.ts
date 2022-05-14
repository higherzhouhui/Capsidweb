import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    font-display: auto;
    @font-face {
        font-family: 'HarmonyOs-Bold';
        src: url('/static/font/AlibabaPuHuiTi-2-85-Bold.otf');
    }
    @font-face {
        font-family: 'HarmonyOs-SemBold';
        src: url('/static/font/AlibabaPuHuiTi-2-75-SemiBold.otf');
    }
    @font-face {
        font-family: 'HarmonyOs-Medium';
        src: url('/static/font/AlibabaPuHuiTi-2-65-Medium.otf');
    }
    @font-face {
        font-family: 'HarmonyOs-Regular';
        src: url('/static/font/AlibabaPuHuiTi-2-55-Regular.otf');
    }
    body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, input, p, form, a, textarea{
        margin: 0;
        padding: 0;
        font-size: 12px; 
        font-family: HarmonyOs-Regular;
    }
    html, body{
        width: 100%;
        height: 100%;
        min-width: 1000px;
    }
    
    ol, ul, li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        display: block;
    }
    
    img{
        border: none;
        display: block;
    }
    
    /* 给需要清除浮动的标签的class加上clearfloat类 */
    .clearfloat {  
        zoom: 1;        /* 适配IE */
    }
    .clearfloat:after {
        display: block;
        clear: both;
        content: '';
        visibility: hidden;
        height: 0;  
    }

    .show {
        display: block;
    }

    .hide {
        display: none;
    }
`;

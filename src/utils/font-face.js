import { createGlobalStyle } from "styled-components";
import fontFiles from "./fonts";

export default createGlobalStyle `
    
    @font-face {
        font-family: "Didot";
        font-style: normal;
        font-weight: normal;
        src: local("Didot-Reg"), local("Didot-Reg"), url(${fontFiles.DidotRegWOFF}) format("woff");
    }

    @font-face {
        font-family: "Didot";
        font-style: italic;
        font-weight: normal;
        src: local("Didot-Italic"), local("Didot-Italic"), url(${fontFiles.DidotItalicWOFF}) format("woff");
    }

    @font-face {
        font-family: "Didot";
        font-style: normal;
        font-weight: 400;
        src: local("Didot-Bold"), local("Didot-Bold"), url(${fontFiles.DidotBoldWOFF}) format("woff");
    }

    @font-face {
        font-family: "GillSansMTPro";
        font-style: normal;
        font-weight: 100;
        src: local("GillSansMTPro-Light"), local("GillSansMTPro-Light"), url(${fontFiles.GillSansMTProLightWOFF}) format("woff");
    }

    @font-face {
        font-family: "GillSansMTPro";
        font-style: italic;
        font-weight: 100;
        src: local("GillSansMTPro-LightItalic"), local("GillSansMTPro-LightItalic"), url(${fontFiles.GillSansMTProLightItalicWOFF}) format("woff");
    }

    @font-face {
        font-family: "GillSansMTPro";
        font-style: normal;
        font-weight: 400;
        src: local("GillSansMTPro-Medium"), local("GillSansMTPro-Medium"), url(${fontFiles.GillSansMTProMediumWOFF}) format("woff");
    }

    @font-face {
        font-family: "GillSansMTPro";
        font-style: italic;
        font-weight: 400;
        src: local("GillSansMTPro-MediumItalic"), local("GillSansMTPro-MediumItalic"), url(${fontFiles.GillSansMTProMediumItalicWOFF}) format("woff");
    }
`
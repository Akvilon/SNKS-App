

export type ThemeColors = {
    background: string,
    btnBackground: string,
    btnHoverBackground: string,
    border: string,
    btnBorder: string,
    btnHoverBorder: string,
    mainGradient: string,
    modalLayout: string,
    mainShadow: string,
    text: string,
    textHover: string,
    contrastText: string,
}


export type Theme = {
    colors: ThemeColors;
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}
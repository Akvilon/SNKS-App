

export type ThemeColors = {
    main: string;
    background: string;
    mainShadow: string;
    text: string;
    contrastText: string;
}


export type Theme = {
    colors: ThemeColors;
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}
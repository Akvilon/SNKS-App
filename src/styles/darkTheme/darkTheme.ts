import { baseFontFamily, baseFontSize } from "../variables.styles";
import { Theme } from "../theme.types";
import { darkThemeColors } from "../colors.styles";


export const darkTheme: Theme = {
    colors: darkThemeColors,
    typo: {
        fontFamily: baseFontFamily.join(', '),
        fontSize: baseFontSize,
    }
}


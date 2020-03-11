
import { baseFontFamily, baseFontSize } from "../variables.styles";
import { Theme } from "../theme.types";
import { lightThemeColors } from "../colors.styles";


export const lightTheme: Theme = {
    colors: lightThemeColors,
    typo: {
        fontFamily: baseFontFamily.join(', '),
        fontSize: baseFontSize,
    }
}


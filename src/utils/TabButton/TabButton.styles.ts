import { createUseStyles } from "react-jss";
import { Theme, getContrastTextStyle, getBtnBackgroundStyle, getBtnHoverBackgroundStyle,  } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    tabButton: {
        height: '42px',
        width: '100%',
        color: getContrastTextStyle(theme),
        background: getBtnBackgroundStyle(theme),
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        padding: '0px 30px',
        textAlign: 'left'
    },
    tabButtonActive: {
        background: getBtnHoverBackgroundStyle(theme),
        // animationName: '$slideLeft',
        // animationDuration: '.1s',
        // animationTimingFunction: 'ease-out',
        // animationDirection: 'normal'
    },
    '@keyframes slideLeft': {
        from: {width: '100%'},
        to: {width: '95%'}
      },
}))
import { createUseStyles } from "react-jss";
import { Theme, getBtnBackgroundStyle, getBtnHoverBackgroundStyle } from "../../styles";
import loader from '../../assets/loader.svg';

export default createUseStyles((theme: Theme) => ({
    spinner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    spinnerIcon: {
        height: '120px',
        width: '140px',
        position: 'relative',
        '& img': {
            height: '120px',
            width: '140px'
        }
    },
    spinnerDots: {
      display: 'flex',
      position: 'absolute',
      bottom: '10px',
      left: '42px',
      '& div': {
          height: '8px',
          width: '8px',
          borderRadius: '100%',
          background: `linear-gradient(to right, ${getBtnBackgroundStyle(theme)} 0%, ${getBtnHoverBackgroundStyle(theme)} 100%)`,
          marginRight: '20px'
      }

    },
    spinnerFirstDot: {
        animation: '$scale 2s linear infinite'
    },
    spinnerSecondDot: {
        animationDelay: '.5s',
        animation: '$scale 2s linear infinite'
    },
    spinnerThirdDot: {
        animationDelay: '.75s',
        animation: '$scale 2s linear infinite'
    },
    '@keyframes scale': {
        '0%': {transform: 'scale(1)'},
        '25%': {transform: 'scale(3)'},
        '50%': {transform: 'scale(1)'},
        '100%': {transform: 'scale(1)'},
      },
}))
import { base, Theme } from '../styles';
import { createUseStyles } from 'react-jss';

export default createUseStyles((theme: Theme) => ({
    ...base(theme)
})) 


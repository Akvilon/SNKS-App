import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './TabButton.styles'

type TabButtonProps = {
    type: any;
    title: string;
    isSelected: boolean;
    index: number;
    handleTabClick: (index: number) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ isSelected, type, index, title, handleTabClick }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <button
            className={isSelected ? `${classes.tabButton} ${classes.tabButtonActive}` : classes.tabButton}
            type={type}
            onClick={() => handleTabClick(index)}
        >{title}
        </button>
    )
}

export { TabButton };
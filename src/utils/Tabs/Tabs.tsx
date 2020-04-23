import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TabButton } from '../TabButton';
import { TabsInfo } from '../../models/TabsInfo';
import { useTheme } from 'react-jss';
import useStyles from './Tabs.styles';


type TabsProps = {
    activeTabIndex: number,
    info: Array<TabsInfo>,
    handleTabClick: (index: number) => void
}
const Tabs: React.FC<TabsProps> = ({ activeTabIndex, info, handleTabClick }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            {
                info.map(({ title }, index) => {
                    const isSelected = activeTabIndex === index;
                    return (
                        <div key={uuidv4()} className={classes.tabButtonContainer}>
                            <TabButton
                                type="button"
                                title={title}
                                index={index}
                                isSelected={isSelected}
                                handleTabClick={handleTabClick}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export { Tabs };
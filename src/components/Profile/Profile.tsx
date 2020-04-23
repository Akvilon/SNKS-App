import * as React from 'react';
import { User } from '../../models/User';
import { useState, useEffect } from 'react';
import { useTheme } from 'theming';
import useStyles from './Profile.styles';
import { Tabs } from '../../utils/Tabs';
import { UserInfo } from '../UserInfo';
import { ThemeSetting } from '../ThemeSetting';
import { TabContent } from '../../utils/TabContent';
import { Favorites } from '../Favorites';
import { PurhasedGoods } from '../PurhasedGoods';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';


type ProfileProps = {
    activeUser: Array<User>
    onLogOut: (activeUser: Array<User>) => void
}

const Profile: React.FC<ProfileProps> = ({ activeUser, onLogOut }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabsInfo, setTabsInfo] = useState([
        {
            title: 'User info',
            content: <UserInfo />
        },
        {
            title: 'Theme',
            content: <ThemeSetting />
        },
        {
            title: 'Favorites',
            content: <Favorites />
        },
        {
            title: 'Purhased goods',
            content: <PurhasedGoods />
        },
    ])


    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
    }

    const activeItem = tabsInfo[activeTabIndex];

    return (
        <div className={classes.profile}>
            <div className={classes.profileTabs}>
                <Tabs
                    activeTabIndex={activeTabIndex}
                    info={tabsInfo}
                    handleTabClick={handleTabClick} />

                <div className={classes.logoutBtn}>
                    <Button type="button" variant={ButtonVariant.TEXT} onClick={() => onLogOut(activeUser)}>
                        <p>Log out</p>
                    </Button>
                </div>
            </div>
            <div className={classes.profileTabContent}>
                <TabContent>
                    {activeItem.content}
                </TabContent>
            </div>
        </div>
    )
}

export { Profile }
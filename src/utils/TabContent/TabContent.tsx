import * as React from 'react';

type TabContent = {
    children: React.ReactNode
}

const TabContent: React.FC<TabContent> = ({ children }) => {

    return (
        <>
            {children}
        </>
    )
}

export { TabContent };
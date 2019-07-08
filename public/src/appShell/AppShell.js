import { h } from 'preact';
import HeaderLayout from 'component/header';
import MiddleSection from 'component/MiddleSection';

import './appShell.scss';

const AppShell = (props) => {
    const { children } = props;
    return (
        <div class="app-shell">
            <HeaderLayout />
            <MiddleSection />
        </div>
    );
};

export default AppShell;

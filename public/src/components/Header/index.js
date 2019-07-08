import { h } from 'preact';
import './header.scss';

const HeaderLayout = props => (
    <div>
        <header class="header">
            <div class="logo">
                <img class="logo-img" src="https://static11.jassets.com/live/images/pwa/juice.svg" alt="Juice" />
            </div>
        </header>
    </div>
);

export default HeaderLayout;

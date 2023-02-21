import { FC } from 'react';
import styles from '@/styles/AppComponents/LogicUI/Navbars/NavigationMessageIndicate.module.scss';
import { INavigationMessageIndicate } from './Interface/Navbar.interface';

const NavbarMesageIndicate: FC<INavigationMessageIndicate> = ({CountMessage}) => {
    if (CountMessage == 0) {
        return <></>;
    } else {
        return (
            <div className={styles.messageIndicate}>
                <a>{CountMessage}</a>
            </div>
        );
    }
};

export default NavbarMesageIndicate;
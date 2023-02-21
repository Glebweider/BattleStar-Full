import styles from '@/styles/AppComponents/LogicUI/Navbars/NavigationErrorMenu.module.scss';
import { useState } from 'react';

const NavbarErrorMenu = () => {

    return (
        <div className={styles.ErrorMenu}>
            <div className={styles.ErrorStatus}>
                <img src={`.svg`} alt='!' />
            </div>
            <div className={styles.ErrorText}>
                <a>{}</a>
            </div>
        </div>
    );
};

export default NavbarErrorMenu;
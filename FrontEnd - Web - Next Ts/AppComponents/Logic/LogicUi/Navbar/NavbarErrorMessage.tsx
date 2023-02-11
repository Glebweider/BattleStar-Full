import { Alert } from "@mui/material";
import { FC, useEffect, useState } from "react";
import styles from '@/styles/AppComponents/UI/Navigations/Navbar.module.scss';
import { IErrorMenu } from "./Interface/Navbar.interface";


const NavbarErrorMessage:FC<IErrorMenu> = ({Severity, SetIsOpen, TextAlert}) => {
    const [IsOpenError, setIsOpenError] = useState(false);
    useEffect(() => {
        setIsOpenError(SetIsOpen)
    }, [])

    if (IsOpenError == true) {
        setTimeout(() => {setIsOpenError(false)}, 2500)
    }
    
    return (
        <>
        {
            IsOpenError 
            ?
            <div className={styles.errorMenu}>
              <Alert 
                severity={Severity} 
                className={styles.Error} 
                onClose={() => setIsOpenError(false)}>
                    {TextAlert}
              </Alert>
            </div> 
            : 
            <></>
        }
        </>
    );
};

export default NavbarErrorMessage;
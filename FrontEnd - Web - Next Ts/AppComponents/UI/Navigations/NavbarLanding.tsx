import { GetIpData } from '@/AppComponents/Logic/Data/GetIpData.data';
import styles from '@/styles/AppComponents/UI/Navigations/LandingNavbar.module.scss';
import { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';

const NavbarLanding = () => {
    const [IsLangUser, setIsLangUser] = useState("")
    useEffect(() => {
        (async () => {
            const Data = await GetIpData()
            setIsLangUser(Data.country)   
        })()
      }, [])

    return (
        <div className={styles.NavbarLanding}>
            <a className={styles.NavbarLeft}>Для партнёров</a>
            <div className={styles.NavbarRight}>
                <div className={styles.NavbarButtons}>
                    <div className={styles.NavbarButtonDownload}>
                        <DownloadIcon className={styles.DownloadIcon} />
                        <a>Cкачать клиент</a>
                    </div>
                    <div className={styles.NavbarButtonCreate}>
                        <a>Создать аккаунт</a>
                    </div>
                </div>
                <div className={styles.NavbarLang}>
                    <a>{IsLangUser}</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarLanding;
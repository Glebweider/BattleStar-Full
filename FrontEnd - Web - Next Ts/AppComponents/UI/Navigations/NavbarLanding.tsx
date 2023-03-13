import { GetIpData } from '@/AppComponents/Logic/Data/GetIpData.data';
import styles from '@/styles/AppComponents/UI/Navigations/LandingNavbar.module.scss';
import { FC, useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { INavbarLandingNavigate } from './Interface/Navigations.interface';
import { useRouter } from 'next/router';

const NavbarLanding:FC<INavbarLandingNavigate> = ({DownloadSystems}) => {
    const Router = useRouter()
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
                    <div onClick={DownloadSystems} className={styles.NavbarButtonDownload}>
                        <DownloadIcon className={styles.DownloadIcon} />
                        <a>Cкачать клиент</a>
                    </div>
                    <div onClick={() => Router.push('/auth')} className={styles.NavbarButtonCreate}>
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
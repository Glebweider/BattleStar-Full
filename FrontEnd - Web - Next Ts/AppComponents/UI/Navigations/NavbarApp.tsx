import styles from '@/styles/AppComponents/UI/Navigations/AppNavbar.module.scss';
import classNames from 'classnames';
import { 
  FC, 
  PropsWithChildren, 
  useState
} from 'react';
import Logo from '../Assets/Logo';
import { Coins } from '@/AppComponents/Misc/Config';
import NavbarSettingsMenu from '@/AppComponents/Logic/LogicUi/Navbars/NavbarSettingsMenu';
import NavbarNotMenu from '@/AppComponents/Logic/LogicUi/Navbars/NavbarNotMenu';
import NavbarChatMenu from '@/AppComponents/Logic/LogicUi/Navbars/NavbarChatMenu';
import NavbarMesageIndicate from '@/AppComponents/Logic/LogicUi/Navbars/NavbarMesageIndicate';
import NavbarMenulink from '@/AppComponents/Logic/LogicUi/Navbars/NavbarMenulink';
import NavbarErrorMenu from '@/AppComponents/Logic/LogicUi/Navbars/NavbarErrorMenu';

const Navbar:FC<PropsWithChildren> = ({children}) => {
  const [IsLoadingData, setIsLoadingData] = useState(false);
  const [IsAuthUser, setIsAuthUser] = useState(false);

  const OpenMenuChat = () => {
    document.querySelector('#ButtonMenuChat')?.classList.toggle('AppNavbar_activeMenuButton__TtQ0_');
    document.querySelector('#ButtonMenuNot')?.classList.remove('AppNavbar_activeMenuButton__TtQ0_');
    document.querySelector('#ChatMenu')?.classList.toggle('AppNavbar_activeMenu__MTIa0');
    document.querySelector('#NotMenu')?.classList.add('AppNavbar_activeMenu__MTIa0');
  }
  const OpenMenuNotoffication = () => {
    document.querySelector('#ButtonMenuChat')?.classList.remove('AppNavbar_activeMenuButton__TtQ0_');
    document.querySelector('#ButtonMenuNot')?.classList.toggle('AppNavbar_activeMenuButton__TtQ0_');
    document.querySelector('#ChatMenu')?.classList.add('AppNavbar_activeMenu__MTIa0');
    document.querySelector('#NotMenu')?.classList.toggle('AppNavbar_activeMenu__MTIa0');
  }
  const OpenMenuUser = () => {
    document.querySelector('#buttonMenuUser')?.classList.toggle('AppNavbar_activeMenuButton__TtQ0_');
    document.querySelector('#SettingsMenu')?.classList.toggle('AppNavbar_activeMenu__MTIa0');
  }

  return (
    <>
      <header className={styles.navigatePanel}>
          <div className={styles.Na}> 
            <div className={styles.lefticon}> 
              <img className={styles.IconGame} src='./GamesIcons/csgo.png' alt='Cs:Go'/>
              <a>CS:GO</a>
            </div>
            {
            IsAuthUser 
            ?                     
              <a className={styles.Auth} href='/auth'>
                <div className={styles.ButtonAuth}>
                  Авторизуйтесь
                </div>
              </a> 
              :
              <div className={styles.nain}>
                <div className={styles.Money}>
                  <div className={styles.MoneyBal}>
                    <a className={styles.BalanceText}>Баланс</a>                    
                    <a href='/' className={styles.ButtonAddMoney}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" fill="#606060" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </a>
                  </div>
                  <a className={styles.BalanceUser}>
                    {IsLoadingData ? "Loading" : 2000} {Coins}
                  </a>                    
                </div>
                <div className={styles.messagers}>
                  <div className={styles.messagerChat}>
                    <div 
                    onClick={OpenMenuChat} 
                    id='ButtonMenuChat' 
                    className={styles.messageChat}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F8F8F8" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                      </svg>
                    </div>
                    <NavbarMesageIndicate CountMessage={4} />
                  </div>
                  <div className={styles.messagerNot}>
                    <div 
                    onClick={OpenMenuNotoffication} 
                    id='ButtonMenuNot' 
                    className={styles.messageNot}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22.75px" height="19.5px" fill="#F8F8F8" viewBox="0 0 16 16">
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                      </svg>
                    </div>
                    <NavbarMesageIndicate CountMessage={3} />
                  </div>
                </div>
                <div 
                onClick={OpenMenuUser} 
                id="buttonMenuUser" 
                className={styles.name}>
                  <div className={styles.avatardiv}>
                    <img className={styles.avatar} src={IsLoadingData ? '' : ''} alt='Аватар'/>
                  </div>
                  <div className={styles.UsernameAndRank}>
                    <a className={styles.nam}>
                        {IsLoadingData ? "Loading" : 'Ku_r_umi'}
                    </a>
                    <a className={styles.rank}>
                        Elo: {IsLoadingData ? "Loading" : 2003}
                    </a>
                  </div>
                  <div className={styles.dow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="#F8F8F8" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                  </div>
                </div>
              </div>
            }
          </div>  
      </header>
      <div className={styles.allMenus}>
        <div
          id='ErrorMenu'
          className={styles.errorMenu}
        >
          <NavbarErrorMenu />
        </div>
        <div 
        id='ChatMenu'
        className={classNames(styles.domenu3, styles.activeMenu)}>
          <NavbarChatMenu user_username='123' />
        </div>    
        <div 
        id='NotMenu' 
        className={classNames(styles.domenu2, styles.activeMenu)}>
          <NavbarNotMenu user_username='123' />
        </div>
        <div 
        id='SettingsMenu' 
        className={classNames(styles.domenu, styles.activeMenu)}>
          <NavbarSettingsMenu user_username='123' />  
        </div>
      </div>
      <div className={styles.sideBar}>
          <div className={styles.Logo}>
            <Logo 
              width={65} 
              height={69} 
              href='/' 
            />
          </div>
          <NavbarMenulink />
      </div>
      <div>
          {children}
      </div>
    </>
  )
}

export default Navbar
import styles from '@/styles/AppComponents/UI/Navigations/Navbar.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { 
  FC, 
  PropsWithChildren, 
  useState, 
  useEffect
} from 'react';
import Logo from '../Assets/Logo';
import { Coins } from '@/AppComponents/Misc/Config';
import NavbarSettingsMenu from '@/AppComponents/Logic/LogicUi/Navbar/NavbarSettingsMenu';
import NavbarNotMenu from '@/AppComponents/Logic/LogicUi/Navbar/NavbarNotMenu';
import NavbarChatMenu from '@/AppComponents/Logic/LogicUi/Navbar/NavbarChatMenu';

const Navbar:FC<PropsWithChildren> = ({children}) => {
  const [IsLoadingData, setIsLoadingData] = useState(false);
  const [IsAuthUser, setIsAuthUser] = useState(false);

  const OpenMenuChat = () => {
    document.querySelector('#buttonMenuChat')?.classList.toggle('Navbar_activeMenuButton__gpjH7');
    document.querySelector('#buttonMenuNot')?.classList.remove('Navbar_activeMenuButton__gpjH7');
    document.querySelector('#ChatMenu')?.classList.toggle('Navbar_activeMenu___PZfh');
    document.querySelector('#NotMenu')?.classList.add('Navbar_activeMenu___PZfh');
  }
  const OpenMenuNotoffication = () => {
    document.querySelector('#buttonMenuChat')?.classList.remove('Navbar_activeMenuButton__gpjH7');
    document.querySelector('#buttonMenuNot')?.classList.toggle('Navbar_activeMenuButton__gpjH7');
    document.querySelector('#ChatMenu')?.classList.add('Navbar_activeMenu___PZfh');
    document.querySelector('#NotMenu')?.classList.toggle('Navbar_activeMenu___PZfh');
  }
  const OpenMenuUser = () => {
    document.querySelector('#buttonMenuUser')?.classList.toggle('Navbar_activeMenuButton__gpjH7');
    document.querySelector('#SettingsMenu')?.classList.toggle('Navbar_activeMenu___PZfh');
  }

  return (
    <>
        <header className={styles.nav}>
          <div className={styles.Na}> 
            <div className={styles.lefticon}> 
              <img className={styles.IconGame} src='csgo.png' alt='Cs:Go'/>
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
                    <a href='/' className={styles.Plus}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" fill="#787878" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </a>
                  </div>
                  <a className={styles.BalanceUser}>
                    {IsLoadingData ? "Loading" : 2000} {Coins}
                  </a>                    
                </div>
                <div className={styles.messager}>
                  <div 
                  onClick={OpenMenuChat} 
                  id='ButtonMenuChat' 
                  className={styles.chat}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F8F8F8" viewBox="0 0 16 16">
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                    </svg>
                  </div>
                  <div className={styles.m}>
                    <a>4</a>
                  </div>
                  <div 
                  onClick={OpenMenuNotoffication} 
                  id='ButtonMenuNot' 
                  className={styles.message}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.75px" height="19.5px" fill="#F8F8F8" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                  </div>
                  <div className={styles.m}>
                    <a>4</a>
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
        <div className={styles.parmenu}>        
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
        <div className={styles.menu}>
          <Logo 
            width={65} 
            height={69} 
            href='/' 
          />
          <Link href="/" className={styles.gb}>
            <div className={styles.BlY}>
              <img className={styles.gla} src="/../NavigationsIcons/Main.svg" alt="" />
            </div>
          </Link>
          <Link href="/matchs">
            <div className={classNames(styles.mat, styles.BlY)}>
              <img className={styles.matc} src="/../NavigationsIcons/Matchs.svg" alt="" />
            </div>
          </Link> 
          <Link href="/tournaments">
            <div className={classNames(styles.tyrnir, styles.BlY)}>
              <img className={styles.ty} src="/../NavigationsIcons/Tournaments.svg" alt="" />
            </div>
          </Link>
          <Link href="/teams">
            <div className={classNames(styles.comm, styles.BlY)}>
              <img className={styles.com} src="/../NavigationsIcons/Teams.svg" alt="" />
            </div>
          </Link>
          <Link href="/friends/users">
            <div className={classNames(styles.fri, styles.BlY)} >
              <img className={styles.fr} src="/../NavigationsIcons/Friends.svg" alt="" />   
            </div>
          </Link>
        </div> 
        <div>
            {children}
        </div>
    </>
  )
}

export default Navbar
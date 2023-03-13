import styles from '@/styles/AppComponents/UI/Navigations/FooterLanding.module.scss';
import Link from 'next/link';
import Logo from '../Assets/Logo';

const FooterLanding = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterLeft}>
                <Logo width={160} height={172} href='/' />
            </div>
            <div className={styles.FooterRight}>
                <div className={styles.FooterNavigation}>
                    <div className={styles.FooterNav}>
                        <h3>Новости</h3>
                        <div className={styles.NavLinksTop}>
                            <Link className={styles.FooterNavLink} href={'#'}>Обновление 1.2</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Рейтинг игроков</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Лучшие команды</Link>
                        </div>                            
                    </div>
                    <div className={styles.FooterNav}>
                        <h3>Турниры</h3>
                        <div className={styles.NavLinksTop}>
                            <Link className={styles.FooterNavLink} href={'#'}>Любительские</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Профессионаьные</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Трансляции</Link>
                        </div>                            
                    </div>
                    <div className={styles.FooterNav}>
                        <h3>Трансляции</h3>
                        <div className={styles.NavLinksTop}>
                            <Link className={styles.FooterNavLink} href={'#'}>Прямые эфиры</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Записи матчей</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Турнирные игры</Link>
                        </div>                            
                    </div>
                    <div className={styles.FooterNav}>
                        <h3>О BattleStar</h3>
                        <div className={styles.NavLinksTop}>
                            <Link className={styles.FooterNavLink} href={'#'}>Поддержка</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Партнёрам</Link>
                        </div>
                        <div className={styles.NavLinks}>
                            <Link className={styles.FooterNavLink} href={'#'}>Как играть</Link>
                        </div>                            
                    </div>                
                    <div className={styles.FooterNavLinks}>
                        <div className={styles.FooterButtons}>
                             <div className={styles.FooterButton}>
                                <a>Скачать на Mac</a>
                                <svg width="23" height="25" viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5559 19.3972C21.1834 20.2425 20.7232 21.0486 20.1824 21.8029C19.4601 22.8073 18.8669 23.5014 18.4122 23.8877C17.706 24.5189 16.9473 24.8437 16.1361 24.862C15.555 24.862 14.8528 24.7009 14.035 24.3736C13.2144 24.0475 12.4611 23.8877 11.771 23.8877C11.0487 23.8877 10.2739 24.0475 9.44389 24.3736C8.61526 24.7009 7.94536 24.8725 7.43285 24.8882C6.65668 24.9209 5.88051 24.5883 5.10703 23.8877C4.61335 23.4686 3.99592 22.7484 3.25472 21.7295C2.46107 20.6439 1.80866 19.3802 1.29749 17.9436C0.750002 16.3892 0.475586 14.8858 0.475586 13.4296C0.475586 11.7625 0.84551 10.3233 1.5867 9.11847C2.1473 8.17227 2.94876 7.38257 3.91386 6.82543C4.86553 6.26974 5.95192 5.97054 7.06158 5.9585C7.68036 5.9585 8.4915 6.14446 9.49635 6.51114C10.5012 6.87782 11.1469 7.06377 11.428 7.06377C11.6406 7.06377 12.3549 6.84508 13.5709 6.41161C14.7183 6.00958 15.6869 5.84326 16.4805 5.90874C18.6328 6.07767 20.2484 6.9027 21.3232 8.39036C19.3995 9.52575 18.4485 11.1142 18.4673 13.1532C18.4835 14.7417 19.0767 16.0631 20.2389 17.112C20.7528 17.5907 21.3523 17.9738 22.0078 18.2422C21.8653 18.6442 21.7146 19.0279 21.5559 19.3972ZM16.6231 0.498943C16.6231 1.74303 16.155 2.90592 15.2255 3.98107C14.1009 5.2592 12.7423 5.9991 11.2693 5.88255C11.25 5.72611 11.2406 5.56867 11.241 5.41111C11.241 4.21548 11.7737 2.93735 12.7248 1.89101C13.1983 1.36194 13.8009 0.920622 14.5313 0.569659C15.2604 0.223935 15.9492 0.032739 16.5975 0C16.615 0.167624 16.6231 0.333938 16.6231 0.498943Z" fill="#F8F8F8"/>
                                </svg>
                            </div>
                            <div className={styles.FooterButton}>
                                <a>Скачать на Windows</a>
                                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.238281 4.30717L10.4541 2.92013L10.4596 12.7443L0.248001 12.8025L0.238281 4.30717ZM10.4499 13.8767L10.4582 23.7092L0.246613 22.3097V13.8102L10.4499 13.8767ZM11.6885 2.73879L25.2341 0.767578V12.6197L11.6885 12.7263V2.73879ZM25.2383 13.9694L25.2341 25.7676L11.6885 23.86L11.6691 13.9473L25.2383 13.9694Z" fill="#F8F8F8"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.FooterIcons}>
                            <Link href={'#'}>
                                <svg width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.3186 27V14.3308H0V9.7693H3.3186V5.87318C3.3186 2.81156 5.27891 0 9.79588 0C11.6247 0 12.9771 0.176985 12.9771 0.176985L12.8705 4.43667C12.8705 4.43667 11.4913 4.42311 9.98632 4.42311C8.35743 4.42311 8.09646 5.18087 8.09646 6.43856V9.7693H13L12.7866 14.3308H8.09646V27H3.3186Z" fill="#F4F1EA"/>
                                </svg>
                            </Link>
                            <Link href={'#'}>
                                <svg width="27" height="27" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4964 8.99808C11.0175 8.99808 8.99454 11.0211 8.99454 13.5C8.99454 15.9789 11.0175 18.0019 13.4964 18.0019C15.9752 18.0019 17.9982 15.9789 17.9982 13.5C17.9982 11.0211 15.9752 8.99808 13.4964 8.99808ZM26.9985 13.5C26.9985 11.6357 27.0154 9.78837 26.9107 7.92748C26.806 5.76602 26.3129 3.84773 24.7324 2.26716C23.1485 0.683215 21.2336 0.19351 19.0722 0.0888138C17.2079 -0.0158819 15.3606 0.00100455 13.4997 0.00100455C11.6355 0.00100455 9.78819 -0.0158819 7.92734 0.0888138C5.76592 0.19351 3.84766 0.686593 2.26712 2.26716C0.683203 3.85111 0.193506 5.76602 0.0888122 7.92748C-0.0158816 9.79174 0.00100453 11.6391 0.00100453 13.5C0.00100453 15.3609 -0.0158816 17.2116 0.0888122 19.0725C0.193506 21.234 0.68658 23.1523 2.26712 24.7328C3.85103 26.3168 5.76592 26.8065 7.92734 26.9112C9.79156 27.0159 11.6389 26.999 13.4997 26.999C15.364 26.999 17.2113 27.0159 19.0722 26.9112C21.2336 26.8065 23.1518 26.3134 24.7324 24.7328C26.3163 23.1489 26.806 21.234 26.9107 19.0725C27.0188 17.2116 26.9985 15.3643 26.9985 13.5ZM13.4964 20.4268C9.66323 20.4268 6.56969 17.3332 6.56969 13.5C6.56969 9.66679 9.66323 6.57319 13.4964 6.57319C17.3295 6.57319 20.423 9.66679 20.423 13.5C20.423 17.3332 17.3295 20.4268 13.4964 20.4268ZM20.7067 7.90722C19.8118 7.90722 19.089 7.18448 19.089 6.2895C19.089 5.39452 19.8118 4.67179 20.7067 4.67179C21.6017 4.67179 22.3244 5.39452 22.3244 6.2895C22.3247 6.50202 22.283 6.7125 22.2018 6.90889C22.1206 7.10528 22.0015 7.28373 21.8512 7.434C21.7009 7.58427 21.5225 7.70342 21.3261 7.78462C21.1297 7.86583 20.9192 7.90749 20.7067 7.90722Z" fill="#F4F1EA"/>
                                </svg>
                            </Link>
                            <Link href={'#'}>
                                <svg width="33" height="27" viewBox="0 0 33 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.8892 3.17148C31.6797 3.70741 30.3804 4.06953 29.0145 4.23321C30.4239 3.3899 31.4783 2.06261 31.981 0.499028C30.6569 1.28554 29.2077 1.83916 27.6964 2.13581C26.6801 1.0507 25.334 0.331477 23.8671 0.0897948C22.4002 -0.151887 20.8945 0.0974971 19.5838 0.79923C18.2731 1.50096 17.2308 2.61578 16.6186 3.97061C16.0065 5.32543 15.8587 6.84446 16.1984 8.29186C13.5153 8.15714 10.8906 7.45978 8.49451 6.24502C6.09842 5.03025 3.98454 3.32525 2.29005 1.24065C1.71066 2.2401 1.37751 3.39889 1.37751 4.63299C1.37686 5.74397 1.65045 6.83793 2.17399 7.81782C2.69754 8.7977 3.45486 9.63321 4.37876 10.2502C3.30728 10.2161 2.25945 9.92659 1.32246 9.40574V9.49265C1.32236 11.0508 1.86135 12.5611 2.84798 13.7671C3.83461 14.9731 5.20812 15.8007 6.73544 16.1093C5.74146 16.3783 4.69936 16.4179 3.68783 16.2252C4.11875 17.5659 4.95814 18.7383 6.0885 19.5783C7.21885 20.4183 8.58358 20.8838 9.99162 20.9096C7.60139 22.786 4.64946 23.8038 1.61071 23.7993C1.07243 23.7994 0.5346 23.768 0 23.7051C3.08451 25.6884 6.67509 26.7409 10.3422 26.7368C22.7556 26.7368 29.5418 16.4555 29.5418 7.53865C29.5418 7.24895 29.5345 6.95636 29.5215 6.66666C30.8415 5.71207 31.9809 4.53 32.8863 3.17582L32.8892 3.17148Z" fill="#F4F1EA"/>
                                </svg>
                            </Link>
                            <Link href={'#'}>
                                <svg width="32" height="22" viewBox="0 0 32 22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.3332 3.67594C31.152 3.02958 30.799 2.4444 30.3118 1.98261C29.8109 1.50661 29.1969 1.16612 28.5278 0.993272C26.0238 0.333272 15.9918 0.333272 15.9918 0.333272C11.8096 0.285689 7.62842 0.494971 3.47185 0.959938C2.80277 1.14556 2.18993 1.49365 1.68785 1.97327C1.19451 2.44794 0.83718 3.03327 0.650513 3.67461C0.202104 6.09026 -0.0157643 8.54306 -0.000153652 10.9999C-0.0161537 13.4546 0.20118 15.9066 0.650513 18.3253C0.83318 18.9639 1.18918 19.5466 1.68385 20.0173C2.17851 20.4879 2.79451 20.8279 3.47185 21.0079C6.00918 21.6666 15.9918 21.6666 15.9918 21.6666C20.1794 21.7143 24.3659 21.505 28.5278 21.0399C29.1969 20.8671 29.8109 20.5266 30.3118 20.0506C30.8052 19.5799 31.1558 18.9946 31.3318 18.3573C31.792 15.9425 32.0157 13.4887 31.9998 11.0306C32.0345 8.56208 31.811 6.09669 31.3332 3.67461V3.67594ZM12.8025 15.5653V6.43594L21.1492 11.0013L12.8025 15.5653Z" fill="#F4F1EA"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLanding;
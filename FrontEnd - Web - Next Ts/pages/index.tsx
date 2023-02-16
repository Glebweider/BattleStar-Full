import styles from '@/styles/pages/Home.module.scss';
import HeaderMeta from '@/AppComponents/Logic/Meta/Header.meta';
import Navbar from '@/AppComponents/UI/Navigations/Navbar';
import Image from 'next/image';
import MainWrapper from '@/public/Wrappers/WrapperMainPage.png'

export default function Home() {
  return (
    <>
      <HeaderMeta title_description='Главная' description='' />
      <Navbar />
      <main className={styles.Wrapper}>
        <Image 
          className={styles.WrapperImage}
          src={MainWrapper} 
          alt={'MainPage'} 
        />
      </main>
    </>
  )
}

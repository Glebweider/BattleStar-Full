import styles from '@/styles/pages/Home.module.scss'
import HeaderMeta from '@/AppComponents/Logic/Meta/Header.meta'
import Navbar from '@/AppComponents/UI/Navigations/Navbar'

export default function Home() {
  return (
    <>
      <HeaderMeta title_description='Главная' description='' />
      <Navbar />
    </>
  )
}

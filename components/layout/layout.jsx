import Head from 'next/head';
import styles from '../../styles/Layout.module.css';

import Banner from '../../components/header/banner';
import Footer from '../../components/footer/footer';
import NavBar from '../header/navbar';
import Organizer from '../footer/organizers';
import SideBar from '../sidebar/sidebar';

export default function Layout({
  children,
  headerData,
  footerData,
  bannerData,
  organizer
  sidebarData,
}) {
  return (
    <>
      <Head>
        <title>
          Hội thảo khoa học quốc gia Công nghệ thông tin và ứng dụng trong các
          lĩnh vực
        </title>
        <meta
          name="description"
          content="The Conference on Information Technology and Its Applications"
        />
      </Head>

      <header>
        <NavBar data={headerData} />
        <Banner data={bannerData} />
      </header>

      <main className={styles.main}>
        <div className="flex w-full min-h-screen bg-[#FFEFD1] py-12 px-32 gap-8">
          <div className="w-2/3 text-center">{children}</div>

          <div className="w-1/3 text-center">
            <SideBar data={sidebarData} />
          </div>
        </div>
      </main>

      <footer>
        <Organizer organizer={organizer} />
        <Footer data={footerData} />
      </footer>
    </>
  );
}

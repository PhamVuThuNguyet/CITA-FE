import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';

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
  sidebarData,
  organizer,
}) {
  return (
    <>
      <Head>
        <title>International Scientific Conference CITA</title>
        <meta
          name="description"
          content="The Conference on Information Technology and Its Applications"
        />
      </Head>

      <header>
        <NavBar data={headerData} side={sidebarData} />
        <Banner data={bannerData} />
      </header>

      <main className={styles.main}>
        <div className="flex w-full min-h-screen bg-[#FFEFD1] py-12 px-32 gap-8">
          <div
            className={['w-2/3 text-center', styles['main-panel']].join(' ')}
          >
            {children}
            <div className={styles['side-panel-mobile']}>
              <SideBar data={sidebarData} />
            </div>
          </div>

          <div
            className={['w-1/3 text-center', styles['side-panel']].join(' ')}
          >
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

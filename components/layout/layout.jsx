import Head from 'next/head';
import styles from '../../styles/Layout.module.css';

import Banner from '../../components/header/banner';
import Footer from '../../components/footer/footer';
import NavBar from '../header/navbar';
import Organizer from '../footer/organizers';

export default function Layout({
  children,
  headerData,
  footerData,
  bannerData,
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
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=EB Garamond"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=EB Garamond"
          rel="stylesheet"
        ></link>
      </Head>

      <header>
        <NavBar data={headerData} />
        <Banner data={bannerData} />
      </header>

      <main className={styles.main}>
        <div className="flex w-full min-h-screen bg-[#FFEFD1] py-12 px-32 gap-8">
          <div className="w-2/3 text-center bg-slate-400">
            {children}
          </div>

          <div className="w-1/3 text-center bg-gray-400">RIGHT</div>
        </div>
      </main>

      <footer>
        <Organizer />
        <Footer data={footerData} />
      </footer>
    </>
  );
}

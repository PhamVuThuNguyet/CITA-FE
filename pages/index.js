import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/header/header";
import HomeContent from "../components/home/home-content";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Hội thảo khoa học quốc gia Công nghệ thông tin và ứng dụng trong các
          lĩnh vực
        </title>
        <meta
          name='description'
          content='The Conference on Information Technology and Its Applications'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=EB Garamond'
          rel='stylesheet'></link>
      </Head>

      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <HomeContent />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

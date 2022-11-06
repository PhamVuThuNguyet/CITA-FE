import styles from '../../styles/Header.module.css';
import Image from 'next/future/image';
import banner from '../../public/banner.jpg';
import { convertArrayToObject } from '../../utils';

export default function Header({ data }) {
  const bannerData = convertArrayToObject(data.elements);
  return (
    <div className={styles.header}>
      <div>
        <Image
          src={banner}
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
          }}
          alt="Banner"
        />

        <div className={styles.header__content}>
          <div
            className={styles.header__title}
            dangerouslySetInnerHTML={{ __html: bannerData.Home_Banner_Title }}
          ></div>
          <div
            className={styles.header__sub_title}
            dangerouslySetInnerHTML={{ __html: bannerData.Home_Banner_SubTitle }}
          ></div>
          <div
            className={styles.header__time}
            dangerouslySetInnerHTML={{ __html: bannerData.Home_Banner_Time }}
          ></div>
          <button className={styles.header__submit_button}
          dangerouslySetInnerHTML={{__html: bannerData.Home_Banner_Call_Button}}>
          </button>
        </div>
      </div>
    </div>
  );
}

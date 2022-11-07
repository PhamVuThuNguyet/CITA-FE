import styles from '../../styles/Banner.module.scss';
import Image from 'next/future/image';
import { convertArrayToObject } from '../../utils';

export default function Banner({ data }) {
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
            dangerouslySetInnerHTML={{ __html: bannerData.Banner_Title }}
          ></div>
          <div
            className={styles.header__sub_title}
            dangerouslySetInnerHTML={{ __html: bannerData.Banner_SubTitle }}
          ></div>
          <div
            className={styles.header__time}
            dangerouslySetInnerHTML={{ __html: bannerData.Banner_Time }}
          ></div>
          <button className={styles.header__submit_button}
          dangerouslySetInnerHTML={{__html: bannerData.Banner_Call_Button}}>
          </button>
        </div>
      </div>
    </div>
  );
}

import styles from '../../styles/Banner.module.scss';
import Image from 'next/future/image';
import { convertArrayToObject } from '../../utils';

export default function Banner({ data }) {
  const bannerData = convertArrayToObject(data.elements);
  return (
    <div className={styles.header}>
      <div>
        <Image
          src={bannerData.Banner_Image?.image?.publicUrl}
          width={100}
          height={100}
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
          }}
          alt="Banner"
        />

        <div className={styles.header__content}>
          <div className={styles['header__conf-name']}>
            The 12th Conference on Information Technology and Its Application
          </div>
          <div>
            <div
              className={styles.header__title}
              dangerouslySetInnerHTML={{
                __html: bannerData.Banner_Title.value,
              }}
            ></div>
            <div
              className={styles.header__sub_title}
              dangerouslySetInnerHTML={{
                __html: bannerData.Banner_SubTitle.value,
              }}
            ></div>
          </div>
          <div>
            <div
              className={styles.header__time}
              dangerouslySetInnerHTML={{ __html: bannerData.Banner_Time.value }}
            ></div>
            <button
              className={styles.header__submit_button}
              url={bannerData.Banner_Call_Button.url}
              dangerouslySetInnerHTML={{
                __html: bannerData.Banner_Call_Button.value,
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

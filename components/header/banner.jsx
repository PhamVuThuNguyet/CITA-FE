import styles from '../../styles/Banner.module.scss';
import { convertArrayToObject } from '../../utils';

export default function Banner({ data }) {
  const bannerData = convertArrayToObject(data.elements);
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(
          rgba(55, 79, 138, 0), 
          rgba(255, 255, 255, 0.9)
        ), url('${bannerData.Banner_Image.image.publicUrl}')`,
      }}
    >
      <div>
        <a
          href={bannerData.Banner_Main_Logo.url}
          id={styles['main-logo-mobile']}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: bannerData.Banner_Main_Logo.value,
            }}
            className={[styles['main-logo-mobile']].join(' ')}
          ></div>
        </a>
      </div>
      <div className={styles['banner__logo']}>
        <img src={bannerData.Banner_VKU_Logo.image.publicUrl} />
        <img src={bannerData.Banner_FISU_Logo.image.publicUrl} />
      </div>
      <div>
        <div
          className={styles.banner__title}
          dangerouslySetInnerHTML={{
            __html: bannerData.Banner_Title.value,
          }}
        ></div>
      </div>
      <div className={styles['banner__sponsors']}>
        {bannerData.Banner_Sponsors.content.map((sponsor) => (
          <img src={sponsor.image.publicUrl} />
        ))}
      </div>
      <div
        className={styles.banner__time}
        dangerouslySetInnerHTML={{ __html: bannerData.Banner_Time.value }}
      ></div>
      <div className={styles['banner_bottom']}>
        {bannerData.Banner_Timeline && (
          <div
            className={styles.banner__timeline}
            dangerouslySetInnerHTML={{
              __html: bannerData.Banner_Timeline.value,
            }}
          ></div>
        )}

        <a href={bannerData.Banner_Call_Button.url}>
          <button
            className={styles.banner__submit_button}
            dangerouslySetInnerHTML={{
              __html: bannerData.Banner_Call_Button.value,
            }}
          ></button>
        </a>
      </div>
    </div>
  );
}

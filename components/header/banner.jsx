import styles from '../../styles/Banner.module.scss';
import { convertArrayToObject } from '../../utils';


export default function Banner({ data }) {
  const bannerData = convertArrayToObject(data.elements);
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(
          rgba(55, 79, 138, 0.45), 
          rgba(55, 79, 138, 0.95)
        ), url('${bannerData.Banner_Image.image.publicUrl}')`,
      }}
    >
      <div className={styles['banner__vku-logo']}>
        <img src={bannerData.Banner_VKU_Logo.image.publicUrl} />
      </div>
      <div
        className={styles['banner__vku-name']}
        dangerouslySetInnerHTML={{
          __html: bannerData.Banner_VKU_Name.value,
        }}
      ></div>
      <div>
        <div
          className={styles.banner__title}
          dangerouslySetInnerHTML={{
            __html: bannerData.Banner_Title.value,
          }}
        ></div>
        <div
          className={styles.banner__sub_title}
          dangerouslySetInnerHTML={{
            __html: bannerData.Banner_SubTitle.value,
          }}
        ></div>
      </div>
      <div className={styles['banner__sponsors']}>
        {bannerData.Banner_Sponsors.content.map((sponsor) => (
          <img src={sponsor.image.publicUrl} />
        ))}
      </div>
      <div>
        <div
          className={styles.banner__time}
          dangerouslySetInnerHTML={{ __html: bannerData.Banner_Time.value }}
        ></div>

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

import styles from '../../styles/Footer.module.scss';
import { convertArrayToObject } from '../../utils';

export default function Footer({ data }) {
  const footerData = convertArrayToObject(data.elements);
  return (
    <div className={styles.footer}>
      <div
        dangerouslySetInnerHTML={{ __html: footerData.Footer_School_Name.value }}
      ></div>
      <div
      className={styles.footer__copyright}
        dangerouslySetInnerHTML={{ __html: footerData.Footer_CopyRight.value }}
      ></div>
      <div className={styles.footer__contact}>
        <div className={styles.footer__contact_item}>
          Phone:&nbsp;
          <div
            dangerouslySetInnerHTML={{ __html: footerData.Footer_Phone.value }}
          ></div>
        </div>
        <div className={styles.footer__contact_item}>
          Hotline:&nbsp;
          <div
            dangerouslySetInnerHTML={{ __html: footerData.Footer_Hotline.value }}
          ></div>
        </div>
        <div className={styles.footer__contact_item}>
          Email:&nbsp;
          <div
            dangerouslySetInnerHTML={{ __html: footerData.Footer_Email.value }}
          ></div>
        </div>
      </div>
    </div>
  );
}

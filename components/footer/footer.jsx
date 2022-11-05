import styles from "../../styles/Footer.module.scss";
import { convertArrayToObject } from '../../utils';

export default function Footer({ data }) {
  const footerData = convertArrayToObject(data.elements)
  return (
    <div className={styles.footer}>
      <div dangerouslySetInnerHTML={{ __html: footerData.Footer_School_Name }}></div>
      <div dangerouslySetInnerHTML={{ __html: footerData.Footer_CopyRight }}></div>
    </div>
  );
}

import { convertArrayToObject } from '../../utils';
import styles from '../../styles/NavBar.module.css';
import { useEffect, useState } from 'react';
export default function NavBar({ data }) {
  const headerData = convertArrayToObject(data.elements);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  });
  return (
    <div
      className={styles.navbar} style={{backgroundColor: color?'#374F8A':'transparent'}}
    >
      <div className={styles.navbar__item}>
        <div
          dangerouslySetInnerHTML={{ __html: headerData.Header_Information }}
        ></div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div className={styles.navbar__item}>
        <div
          dangerouslySetInnerHTML={{ __html: headerData.Header_Program }}
        ></div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: headerData.Header_Logo }}
        className={styles['navbar__main-logo']}
      ></div>
      <div className={styles.navbar__item}>
        <div
          dangerouslySetInnerHTML={{ __html: headerData.Header_Submition }}
        ></div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div className={styles.navbar__item}>
        <div
          dangerouslySetInnerHTML={{ __html: headerData.Header_Support }}
        ></div>
        <i class="fa fa-caret-down"></i>
      </div>
    </div>
  );
}

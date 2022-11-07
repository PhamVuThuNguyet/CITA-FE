import { convertArrayToObject } from '../../utils';
import styles from '../../styles/NavBar.module.scss';
import { useEffect, useState } from 'react';
export default function NavBar({ data }) {
  const navData = convertArrayToObject(data.elements);
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
      className={styles.navcont}
      style={{ backgroundColor: color ? '#374F8A' : 'transparent' }}
    >
      <div
        className={styles.navbar}
        style={{ width: color ? '100%' : '80%' }}
      >
        <div className={styles.navbar__item}>
          <div
            dangerouslySetInnerHTML={{ __html: navData.Header_Information.value }}
          ></div>
          <i class="fa fa-caret-down"></i>
        </div>
        <div className={styles.navbar__item}>
          <div dangerouslySetInnerHTML={{ __html: navData.Header_Program.value }}></div>
          <i class="fa fa-caret-down"></i>
        </div>
        <a href="/">
          <div
            dangerouslySetInnerHTML={{ __html: navData.Header_Logo.value }}
            className={styles['navbar__main-logo']}
          ></div>
        </a>
        <div className={styles.navbar__item}>
          <div
            dangerouslySetInnerHTML={{ __html: navData.Header_Submition.value }}
          ></div>
          <i class="fa fa-caret-down"></i>
        </div>
        <div className={styles.navbar__item}>
          <div dangerouslySetInnerHTML={{ __html: navData.Header_Support.value }}></div>
          <i class="fa fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

import { convertArrayToObject } from '../../utils';
import styles from '../../styles/NavBar.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
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
    <nav
      className={styles.navcont}
      style={{ backgroundColor: color ? '#374F8A' : 'transparent' }}
    >
      <div
        className={styles.navbar}
        style={{
          width: color ? '100%' : '70%',
        }}
      >
        <div className={styles.navbar__item}>
          <div
            dangerouslySetInnerHTML={{
              __html: navData.Header_Information.value,
            }}
          ></div>
          <i className="fa fa-caret-down"></i>
          <div className={styles.navbar_sub_item}>
            {navData.Header_Information.content.map((item) => (
              <a
                href={item.url}
                key={item.name}
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></a>
            ))}
          </div>
        </div>
        <div className={styles.navbar__item}>
          <div
            dangerouslySetInnerHTML={{ __html: navData.Header_Program.value }}
          ></div>
          <i className="fa fa-caret-down"></i>
          <div className={styles.navbar_sub_item}>
            {navData.Header_Program.content.map((item) => (
              <a
                key={item.name}
                href={item.url}
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></a>
            ))}
          </div>
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
          <i className="fa fa-caret-down"></i>
          <div className={styles.navbar_sub_item}>
            {navData.Header_Submition.content.map((item) => (
              <a
                key={item.name}
                href={item.url}
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></a>
            ))}
          </div>
        </div>
        <div className={styles.navbar__item}>
          <div
            dangerouslySetInnerHTML={{ __html: navData.Header_Support.value }}
          ></div>
          <i className="fa fa-caret-down"></i>
          <div className={styles.navbar_sub_item}>
            {navData.Header_Support.content.map((item) => (
              <a
                key={item.name}
                href={item.url}
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

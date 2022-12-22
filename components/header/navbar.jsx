import { convertArrayToObject } from '../../utils';
import styles from '../../styles/NavBar.module.scss';
import { useEffect, useState } from 'react';

export default function NavBar({ data }) {
  const navData = convertArrayToObject(data.elements);
  const [color, setColor] = useState(false);
  const [show, setShow] = useState(false);

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

  function toggleSidePanel() {
    setShow(!show);
  }

  return (
    <>
      <div
        className={[styles.icon, show ? styles['icon-open'] : ''].join(' ')}
        onClick={toggleSidePanel}
      >
        <div />
        <div />
        <div />
      </div>
      <nav
        className={[styles.navcont, show ? styles['navcont-open'] : ''].join(
          ' '
        )}
        style={{
          backgroundColor: color ? '#374F8A' : 'transparent',
        }}
      >
        <div
          className={styles.navbar}
          style={{
            width: color ? '100%' : '70%',
          }}
        >
          <div className={styles.navbar__item} id={styles['menu-information']}>
            <div
              dangerouslySetInnerHTML={{
                __html: navData.NavBar_Information.value,
              }}
            ></div>
            <i className="fa fa-caret-down"></i>
            <div className={styles.navbar_sub_item}>
              {navData.NavBar_Information.content.map((item) => (
                <a
                  href={item.url}
                  key={item.name}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></a>
              ))}
            </div>
          </div>
          <div className={styles.navbar__item} id={styles['menu-program']}>
            <div
              dangerouslySetInnerHTML={{ __html: navData.NavBar_Program.value }}
            ></div>
            <i className="fa fa-caret-down"></i>
            <div className={styles.navbar_sub_item}>
              {navData.NavBar_Program.content.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></a>
              ))}
            </div>
          </div>
          <a href="/" id={styles['main-logo']}>
            <div
              dangerouslySetInnerHTML={{ __html: navData.NavBar_Logo.value }}
              className={styles['navbar__main-logo']}
            ></div>
          </a>
          <div className={styles.navbar__item} id={styles['menu-submissions']}>
            <div
              dangerouslySetInnerHTML={{
                __html: navData.NavBar_Submission.value,
              }}
            ></div>
            <i className="fa fa-caret-down"></i>
            <div className={styles.navbar_sub_item}>
              {navData.NavBar_Submission.content.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></a>
              ))}
            </div>
          </div>
          <div className={styles.navbar__item} id={styles['menu-support']}>
            <div
              dangerouslySetInnerHTML={{ __html: navData.NavBar_Support.value }}
            ></div>
            <i className="fa fa-caret-down"></i>
            <div className={styles.navbar_sub_item}>
              {navData.NavBar_Support.content.map((item) => (
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
    </>
  );
}

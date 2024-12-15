import { convertArrayToObject } from '../../utils';
import styles from '../../styles/NavBar.module.scss';
import { useEffect, useState } from 'react';

export default function NavBar({ data, side }) {
  const navData = convertArrayToObject(data.elements);
  const sideData = convertArrayToObject(side.elements);
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
          className={[
            styles.navbar,
            color ? styles['navbar-text-color'] : '',
          ].join(' ')}
        >
          <a href={navData.NavBar_Information.url}>
            <div
              className={styles.navbar__item}
              id={styles['menu-information']}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: navData.NavBar_Information.value,
                }}
              ></div>
            </div>
          </a>
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
          <a href={navData.NavBar_Committees.url}>
            <div
              className={styles.navbar__item}
              id={styles['menu-information']}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: navData.NavBar_Committees.value,
                }}
              ></div>
            </div>
          </a>

          <a href={navData.NavBar_Logo.url} id={styles['main-logo']}>
            <div
              dangerouslySetInnerHTML={{ __html: navData.NavBar_Logo.value }}
              className={[
                styles['navbar__main-logo'],
                color ? styles['navbar__main-logo-color'] : '',
              ].join(' ')}
            ></div>
          </a>

          <div
            className={styles.navbar__item}
            id={styles['menu-specialsession']}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: navData.NavBar_SpecialSession.value,
              }}
            ></div>
            <i className="fa fa-caret-down"></i>
            <div className={styles.navbar_sub_item}>
              {navData.NavBar_SpecialSession.content.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></a>
              ))}
            </div>
          </div>

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

          <div
            className={styles.navbar__item}
            id={styles['menu-previous-years']}
          >
            <div>Previous Years</div>
            <i className="fa fa-caret-down"></i>
            <div
              className={styles.navbar_sub_item}
              dangerouslySetInnerHTML={{
                __html: sidebar.Sidebar_Previous_Content.value,
              }}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
}

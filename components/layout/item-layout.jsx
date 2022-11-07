import styles from '../../styles/ItemLayout.module.scss';
export default function ItemLayout({ section_title = '', section_content = '', children }) {
  return (
    <div>
      <div className={styles.section_title} dangerouslySetInnerHTML={{ __html: section_title}}></div>

      <div className={styles.section_content} dangerouslySetInnerHTML={{ __html: section_content}}></div>
      {children}
    </div>
  );
}

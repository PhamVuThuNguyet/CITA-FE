import styles from '../../styles/ItemLayout.module.scss';
export default function ItemLayout({ section_title, section_content }) {
  return (
    <div>
      <div className={styles.section_title}>{section_title}</div>

      <div className={styles.section_content}>{section_content}</div>
    </div>
  );
}

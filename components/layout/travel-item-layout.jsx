import styles from '../../styles/ItemLayout.module.scss';
import exclusive_styles from '../../styles/TravelItem.module.scss';
export default function TravelItemLayout({ section_title = '', section_content='',images_list = [] }) {
  return (
    <div>
      <div className={exclusive_styles.section_title} dangerouslySetInnerHTML={{ __html: section_title}}></div>

      <div className={styles.section_content} dangerouslySetInnerHTML={{ __html: section_content}}></div>

      <div className={exclusive_styles.grid_wrapper}>
        {
          images_list.map((src, i) => {
            return (
              <div>
                <img src={src} key={i} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

import general_styles from '../../styles/ItemLayout.module.scss';
import exclusive_styles from '../../styles/AccommodationItem.module.scss';
export default function AccommodationItemLayout({ section_title = '', section_content = '', map_address = '' }) {
    return (
        <div>
                <div className={general_styles.section_title} dangerouslySetInnerHTML={{ __html: section_title }}></div>

                {/* <div className={general_styles.section_content} dangerouslySetInnerHTML={{ __html: section_content }}></div> */}

            <div className={exclusive_styles.container}>
                <div className={general_styles.section_content} dangerouslySetInnerHTML={{ __html: section_content }}></div>

                <div className={exclusive_styles.map}>
                <div className={exclusive_styles.mapouter}><div class={exclusive_styles.gmap_canvas}><iframe 
                    src={map_address}
                    frameborder="0"
                    loading='lazy'
                    scrolling="no">
                </iframe>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

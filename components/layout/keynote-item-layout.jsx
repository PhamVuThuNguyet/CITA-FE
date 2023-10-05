import Image from 'next/image';
import styles from '../../styles/KeyNoteItem.module.scss';
import myLoader from '../../utils/image-loader';
export default function KeyNoteItem({ data }) {
  return (
    <div className={styles['keynote-item']}>
      {data.image && (
        <div className={styles['keynote-item__image']}>
          <Image
            loader={myLoader}
            src={data.image.publicUrl}
            width={300}
            height={300}
          />
        </div>
      )}
      <div className={styles['keynote-item__info']}>
        <div
          className={styles['keynote-item__info__title']}
          dangerouslySetInnerHTML={{ __html: data.content[0].value }}
        ></div>
        <div
          className={styles['keynote-item__info__author']}
          dangerouslySetInnerHTML={{ __html: data.content[1].value }}
        ></div>
        <div
          className={styles['keynote-item__info__position']}
          dangerouslySetInnerHTML={{ __html: data.content[2].value }}
        ></div>
        <div
          className={styles['keynote-item__info__address']}
          dangerouslySetInnerHTML={{ __html: data.content[3].value }}
        ></div>
        <div
          className={styles['keynote-item__info__intro']}
          dangerouslySetInnerHTML={{ __html: data.content[4].value }}
        ></div>
      </div>
    </div>
  );
}

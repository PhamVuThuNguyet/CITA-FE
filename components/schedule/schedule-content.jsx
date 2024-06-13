import { convertArrayToObject } from '../../utils';
import styles from '../../styles/Schedule.module.scss';
import myLoader from '../../utils/image-loader';
import Image from 'next/future/image';

export default function ScheduleContent({ data }) {
  const file = convertArrayToObject(data).Schedule_Timeline.elements[0].file;

  if (file) {
    const fileURL = file.publicUrl;
    return (
      <>
        <Image
          loader={myLoader}
          src={fileURL}
          width={100}
          height={100}
          className={styles.schedule__pdf}
          alt="Schedule"
        />
      </>
    );
  }

  return (
    <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: 'Futura' }}>
      UPDATING...
    </h1>
  );
}

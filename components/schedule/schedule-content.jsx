import { convertArrayToObject } from '../../utils';
import { API_URL } from '../../config';
import styles from '../../styles/schedule.module.scss';

export default function ScheduleContent({ data }) {
  const file = convertArrayToObject(data).Schedule_Timeline.elements[0].file;

  if (file) {
    const fileURL = file.publicUrl;
    return (
      <iframe
        className={styles.schedule__pdf}
        src={fileURL}
        title="Schedule CITA"
      ></iframe>
    );
  }

  return (
    <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: 'Futura' }}>
      UPDATING...
    </h1>
  );
}

import { convertArrayToObject } from '../../utils';

export default function ScheduleContent({ data }) {
  const file = convertArrayToObject(data).Schedule_Timeline.elements[0].file;

  if (file) {
    const fileURL = file.publicUrl;
    return (
      <>
        <iframe src={fileURL} width={100} height={100}></iframe>
      </>
    );
  }

  return (
    <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: 'Futura' }}>
      UPDATING...
    </h1>
  );
}

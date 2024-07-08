import { convertArrayToObject } from '../../utils';
const SubmittedPaperContent = ({ data }) => {
  if (convertArrayToObject(data)['Submitted-Paper_All'].elements.length == 0) {
    return (
      <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: 'Futura' }}>
        UPDATING...
      </h1>
    );
  } else {
    const file =
      convertArrayToObject(data)['Submitted-Paper_All'].elements[0].file;
    if (file) {
      const fileURL = file.publicUrl;
      return (
        <>
          <iframe src={fileURL} width="100%" height="100%"></iframe>
        </>
      );
    } else {
      return (
        <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: 'Futura' }}>
          UPDATING...
        </h1>
      );
    }
  }
};

export default SubmittedPaperContent;

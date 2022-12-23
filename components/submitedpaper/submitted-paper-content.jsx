import styles from '../../styles/SubmittedPaper.module.scss';
import { convertArrayToObject } from '../../utils';
const SubmittedPaperContent = ({ data }) => {
  if (convertArrayToObject(data)['Submitted-Paper_All'].elements.length == 0) {
    return <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: "Futura"}}>UPDATING...</h1>;
  } else {
    return (
      <>
        <table className={styles.table}>
          <colgroup>
            <col span="1" style={{ width: '10%' }}></col>
            <col span="1" style={{ width: '50%' }}></col>
            <col span="1" style={{ width: '40%' }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr>
                <td>{index + 1}</td>
                <td
                  dangerouslySetInnerHTML={{ __html: row.content[0].value }}
                ></td>
                <td
                  dangerouslySetInnerHTML={{ __html: row.content[1].value }}
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
};

export default SubmittedPaperContent;

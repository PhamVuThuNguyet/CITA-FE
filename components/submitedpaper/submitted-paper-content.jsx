import styles from '../../styles/SubmittedPaper.module.scss';

const SubmittedPaperContent = ({ data }) => {
  return (
    <>
      <table className={styles.table}>
        <colgroup>
            <col span="1" style={{width: "10%"}}></col>
            <col span="1" style={{width: "50%"}}></col>
            <col span="1" style={{width: "40%"}}></col>
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
};

export default SubmittedPaperContent;

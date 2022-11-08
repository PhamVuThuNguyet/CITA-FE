import ItemLayout from '../layout/item-layout';
import styles from '../../styles/SubmitedPaper.module.scss';
import { convertArrayToObject } from '../../utils';

const SubmitedPaperContent = ({ data }) => {
  return (
    <>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Author</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td dangerouslySetInnerHTML={{ __html: row.value }}></td>
                        <td dangerouslySetInnerHTML={{ __html: row.content[0].value }}></td>
                        <td dangerouslySetInnerHTML={{ __html: row.content[1].value }}></td>
                    </tr>
                    ))}
            </tbody>
        </table>
    </>
  );
};

export default SubmitedPaperContent;

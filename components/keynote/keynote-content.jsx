import styles from '../../styles/KeyNote.module.scss';
import KeyNoteItem from '../layout/keynote-item-layout';
export default function KeyNoteContent({ data }) {
  return (
    <div>
      {data.map((layout) =>
        layout.elements.map((element) => <KeyNoteItem data={element} />)
      )}
    </div>
  );
}

import styles from '../../styles/KeyNote.module.scss';
import { convertArrayToObject } from '../../utils';
import KeyNoteItem from '../layout/keynote-item-layout';
export default function KeyNoteContent({ data }) {
  if (convertArrayToObject(data).Keynote_All.elements.length == 0){
    return(
      <h1 style={{color: "red", fontSize: "5rem", fontFamily: "Futura"}}>UPDATING...</h1>
    );
  }else{
    return (
      <div>
        {data.map((layout) =>
          layout.elements.map((element) => <KeyNoteItem data={element} />)
        )}
      </div>
    );
  }
  
}

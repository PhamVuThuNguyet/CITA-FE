import ItemLayout from '../layout/item-layout';
import styles from '../../styles/Callforpaper.module.scss';
import { convertArrayToObject } from '../../utils';

const CallforpaperContent = ({ data }) => {
  if (convertArrayToObject(data)['CallForPaper_General'].elements.length == 0) {
    return (
      <h1 style={{ color: 'red', fontSize: '5rem', fontFamily: 'Futura' }}>
        UPDATING...
      </h1>
    );
  } else {
    return (
      <>
        {data.map((layout) => (
          <ItemLayout
            section_title={layout.elements[0].value}
            section_content={layout.elements[1].value}
          ></ItemLayout>
        ))}
      </>
    );
  }
};

export default CallforpaperContent;

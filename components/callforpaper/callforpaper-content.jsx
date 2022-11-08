import ItemLayout from '../layout/item-layout';
import styles from '../../styles/Callforpaper.module.scss';
import { convertArrayToObject } from '../../utils';

const CallforpaperContent = ({ data }) => {
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
};

export default CallforpaperContent;

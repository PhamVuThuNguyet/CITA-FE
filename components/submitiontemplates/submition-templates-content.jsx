import ItemLayout from '../layout/item-layout';
import styles from '../../styles/SubmitionTemplates.module.scss';
import { convertArrayToObject } from '../../utils';
const SubmitionTemplatesContent = ({ data }) => {
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

export default SubmitionTemplatesContent;

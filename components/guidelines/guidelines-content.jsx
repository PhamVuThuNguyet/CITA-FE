import { convertArrayToObject } from '../../utils';
import ItemLayout from '../layout/item-layout';

export default function GuidelinesContent({ data }) {
  const layouts = convertArrayToObject(data);
  const generalInformation = convertArrayToObject(
    layouts.Rule_GeneralInformation.elements
  );
  return (
    <div>
      <ItemLayout
        section_title={generalInformation.Rule_GeneralInformation_Title.value}
        section_content={
          generalInformation.Rule_GeneralInformation_Content.value
        }
      />
    </div>
  );
}

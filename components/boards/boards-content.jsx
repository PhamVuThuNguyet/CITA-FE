import Image from 'next/image';
import { convertArrayToObject } from '../../utils';
import ItemLayout from '../layout/item-layout';

export default function BoardsContent({ data }) {
  const layouts = convertArrayToObject(data);
  const internationalAdvisors = convertArrayToObject(
    layouts.Boards_InternationalAdvisors.elements
  );

  return (
    <div>
      <ItemLayout
        section_title={
          internationalAdvisors.Boards_InternationalAdvisors_Title.value
        }
        section_content={
          internationalAdvisors.Boards_InternationalAdvisors_Content.value
        }
      >
      </ItemLayout>
    </div>
  );
}

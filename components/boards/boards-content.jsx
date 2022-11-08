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
        <Image
          src={
            internationalAdvisors.Boards_InternationalAdvisors_Content.image
              ? internationalAdvisors.Boards_InternationalAdvisors_Content.image
                  .publicUrl
              : ''
          }
          width={256}
          height={256}
        />
      </ItemLayout>
    </div>
  );
}

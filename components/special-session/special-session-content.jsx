import Image from 'next/image';
import { convertArrayToObject } from '../../utils';
import ItemLayout from '../layout/item-layout';

export default function SpecialSEssionContent({ data }) {
  return (
    <>
      {data.map((layout) =>
        layout.elements.length > 0 ? (
          <ItemLayout
            section_title={layout.elements[0].value}
            section_content={layout.elements[1].value}
          ></ItemLayout>
        ) : (
          <></>
        )
      )}
    </>
  );
}

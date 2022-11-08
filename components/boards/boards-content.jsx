import Image from 'next/image';
import { convertArrayToObject } from '../../utils';
import ItemLayout from '../layout/item-layout';

export default function BoardsContent({ data }) {
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

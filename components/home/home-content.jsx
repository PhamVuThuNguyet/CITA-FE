import Image from 'next/future/image';
import { convertArrayToObject } from '../../utils';
import ItemLayout from "../layout/item-layout";
import myLoader from '../../utils/image-loader';

export default function HomeContent({ data }) {
  const layouts = convertArrayToObject(data);
  const homePoster = layouts.Home_Poster.elements[0];
  const introductionLayout = convertArrayToObject(layouts.Home_Introduction.elements);
  const topicLayout = convertArrayToObject(layouts.Home_Topic.elements);
  const instructionLayout = convertArrayToObject(layouts.Home_Instruction.elements);


  return (
    <div>
      <Image
        loader={myLoader}
        src={homePoster.image.publicUrl}
        width={100}
        height={100}
        style={{
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
          marginBottom: '12px'
        }}
        alt="Banner"
      />
      <ItemLayout section_title={introductionLayout.Home_Introduction_Title.value} section_content={introductionLayout.Home_Introduction_Content.value} />
      <ItemLayout section_title={topicLayout.Home_Topic_Title.value} section_content={topicLayout.Home_Topic_Content.value} />
      <ItemLayout section_title={instructionLayout.Home_Instruction_Title.value} section_content={instructionLayout.Home_Instruction_Content.value} />

    </div>
  );
}

import ItemLayout from '../layout/item-layout';

const SubmissionTemplatesContent = ({ data }) => {
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

export default SubmissionTemplatesContent;

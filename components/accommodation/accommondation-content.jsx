import AccommodationItemLayout from '../layout/accommodation-item-layout';
import styles from '../../styles/Accommodation.module.scss';

const AccommodationContent = () => {
  return (
    <>
      <h1 className={styles.title}>Accommodation Information</h1>

      <AccommodationItemLayout
        section_title="Wyndham Hoi An Royal Beachfront Resort & Villas"
        section_content="Hoi An, Vietnam"
        map_address="https://www.google.com/maps/embed/v1/place&q=ChIJX8hf7joRQjEREPPlXdd6NfI"
      ></AccommodationItemLayout>
    </>
  );
};

export default AccommodationContent;

import AccommodationItemLayout from '../layout/accommodation-item-layout';
import styles from '../../styles/Accommodation.module.scss';
import { convertArrayToObject } from '../../utils';

const AccommodationContent = ({ data }) => {
    return (
        <>
        <h1 className={styles.title}>Accommodation Information</h1>
            {/* {data.map((layout) => (
        <AccommodationItemLayout
          section_title={layout.elements[0].value}
          section_content={layout.elements[1].value}
          map_address=""
        ></AccommodationItemLayout>
      ))} */}

            <AccommodationItemLayout
                section_title="Hotel 1"
                section_content="Address"
                map_address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7711301052386!2d108.22108337592951!3d16.077362139218597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183afab4a42d%3A0xd52dbe9e28e83835!2sNovotel%20Danang%20Premier%20Han%20River!5e0!3m2!1sen!2s!4v1694246812072!5m2!1sen!2s"
            ></AccommodationItemLayout>
            <AccommodationItemLayout
                section_title="Hotel 2"
                section_content="Address"
                map_address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7711301052386!2d108.22108337592951!3d16.077362139218597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183afab4a42d%3A0xd52dbe9e28e83835!2sNovotel%20Danang%20Premier%20Han%20River!5e0!3m2!1sen!2s!4v1694246812072!5m2!1sen!2s"
            ></AccommodationItemLayout>
            <AccommodationItemLayout
                section_title="Hotel 3"
                section_content="Address"
                map_address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7711301052386!2d108.22108337592951!3d16.077362139218597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183afab4a42d%3A0xd52dbe9e28e83835!2sNovotel%20Danang%20Premier%20Han%20River!5e0!3m2!1sen!2s!4v1694246812072!5m2!1sen!2s"
            ></AccommodationItemLayout>
        </>

    );
};

export default AccommodationContent;

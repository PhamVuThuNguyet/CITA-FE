import styles from '../../styles/Organizers.module.scss';
export default function Organizer({ organizer }) {
  return (
    <div className={styles.organizers}>
      <div className={styles.organizers__title}>Organizers</div>
      <div className={styles.organizers__list}>
        {organizer.elements.map((item, index) => (
          <img key={index} src={item.image.publicUrl} alt={item.value} />
        ))}
      </div>
    </div>
  );
}

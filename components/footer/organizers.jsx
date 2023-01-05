import styles from '../../styles/Organizers.module.scss';
export default function Organizer({ organizer }) {
  return (
    <div className={styles.organizers}>
      <div className={styles.organizers__title}>Co-Organizers</div>
      <h3 className={styles.coorganizers__title}>FISU Central - Central Highlands</h3>
      <div className={styles.organizers__list}>
      	
        {organizer.elements.map((item, index) => (
          <img key={index} src={item.image.publicUrl} alt={item.value} />
        ))}
      </div>
    </div>
  );
}

import styles from '../../styles/Organizers.module.css'
export default function Organizer(){
    return(<div className={styles.organizers}>
        <div className={styles.organizers__title}>Organizers</div>
        <div className={styles.organizers__list}>
            <img src="/DTU.png"/>
            <img src="/NTU.png"/>
            <img src="/DLU.png"/>
            <img src="/UTE.png"/>
            <img src="/UED.png"/>
            <img src="/TNU.png"/>
            <img src="/QNU.png"/>
            <img src="/DUE.png"/>
            <img src="/HueCIT.png"/>
            <img src="/VKU.png"/>
        </div>
    </div>)
}
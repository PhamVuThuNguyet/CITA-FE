import ItemLayout from '../layout/item-layout';
import styles from '../../styles/Callforpaper.module.scss';

const CallforpaperContent = () => {
    return (
        <>
            <ItemLayout section_title={"Thông tin chung"} section_content={
                `<img class=${styles.fullImg} src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="Italian Trulli"/>
                heehheehehhe
                `
            }/>
        </>
    );
}

export default CallforpaperContent;
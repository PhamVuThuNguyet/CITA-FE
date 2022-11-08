import ItemLayout from '../layout/item-layout';
import styles from '../../styles/Callforpaper.module.scss';
import { convertArrayToObject } from '../../utils';


const CallforpaperContent = ({data}) => {
    //todo: add data for layouts
    const layouts = convertArrayToObject(data);
    return (
        <>
            <ItemLayout section_title={data} section_content={data}/>
        </>
    );
}

export default CallforpaperContent;
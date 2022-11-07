import { convertArrayToObject } from "../../utils";
import ItemLayout from "../layout/item-layout";
import styles from '../../styles/ItemLayout.module.scss';

export default function SideBar({data}){
    const sidebar = convertArrayToObject(data.elements);
    return (<div>
        <ItemLayout section_title={sidebar.Home_Timeline_Title.value} section_content={sidebar.Home_Timeline_Content.value}/>
        <ItemLayout section_title={sidebar.Sidebar_Submit_Title.value} section_content={sidebar.Sidebar_Submit_Content.value}> 
            <a 
                className={styles['sidebar-submit-btn']}
                href={sidebar.Sidebar_Submit_Button.url} 
                target="_blank" 
                dangerouslySetInnerHTML={{ __html: sidebar.Sidebar_Submit_Button.value }}
            >
            </a>
        </ItemLayout>
        <ItemLayout section_title={sidebar.Sidebar_Previous_Title.value} section_content={sidebar.Sidebar_Previous_Content.value}/>
    </div>);
}
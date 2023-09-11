import { convertArrayToObject } from "../../utils";
import ItemLayout from "../layout/item-layout";
import styles from '../../styles/ItemLayout.module.scss';

export default function SideBar({data}){
    const sidebar = convertArrayToObject(data.elements);
    return (<div>
        <ItemLayout section_title={sidebar.Sidebar_News_Title.value} section_content={sidebar.Sidebar_News_Content.value}/>
        <ItemLayout section_title={sidebar.Sidebar_Previous_Title.value} section_content={sidebar.Sidebar_Previous_Content.value}/>
    </div>);
}
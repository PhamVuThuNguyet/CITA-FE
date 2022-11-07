import { convertArrayToObject } from "../../utils";
import ItemLayout from "../layout/item-layout";

export default function SideBar({timelineData}){
    const timeline = convertArrayToObject(timelineData.elements);
    return (<div>
        <ItemLayout section_title={timeline.Home_Timeline_Title.value} section_content={timeline.Home_Timeline_Content.value}/>
        <ItemLayout/>
        <ItemLayout/>
    </div>);
}
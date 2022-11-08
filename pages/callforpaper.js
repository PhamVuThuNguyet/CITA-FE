import CallforpaperContent from '../components/callforpaper/callforpaper-content';
import client from '../apollo-client';
//todo: get data from query
const Callforpaper = ({data}) => {
    return (
        <CallforpaperContent data={data.layouts}/>
    )
};

export default Callforpaper;
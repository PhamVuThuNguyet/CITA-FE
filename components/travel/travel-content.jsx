import TravelItemLayout from '../layout/travel-item-layout';
import styles from '../../styles/Travel.module.scss';
import { convertArrayToObject } from '../../utils';

const TravelContent = ({ data }) => {
    const images_danang = [
        "https://bcp.cdnchinhphu.vn/344443456812359680/2023/5/12/da-nang-beaches-1-16838659816141879075557.jpg",
        "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg",
        "https://a.cdn-hotels.com/gdcs/production126/d1337/a4fd6b39-16b6-4230-bcf1-155a0d9a72c1.jpg",
        "https://content.r9cdn.net/rimg/dimg/ab/98/89f3587d-city-42700-1655c531761.jpg",
        "https://vietnam.travel/sites/default/files/styles/top_banner/public/2018-10/danang%20travel%20guide.jpg",
        "https://image.kkday.com/v2/image/get/s1.kkday.com/product_127224/20220311100624_nVE1x/png",
        "https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_133579/20220924082445_aeDRL/jpg"
    ]

    const images_hoian = [
        "https://images.lifestyleasia.com/wp-content/uploads/2017/10/10190731/iStock-852119148-Angela-Grant.jpg?tr=w-1200,h-900",
        "https://static.vinwonders.com/2022/07/hoi-an-ancient-town-3-1.jpg",
        "https://vietnamtour.in/wp-content/uploads/IN_Things-to-do-in-Hoi-An.jpg",
        "https://journeyonair.com/sites/default/files/styles/article_1/public/2020-02/img-hoi-an_19_1.jpg",
        "https://whc.unesco.org/uploads/thumbs/site_0948_0001-750-750-20151104113241.jpg",
        "https://vietnamnomad.com/wp-content/uploads/2023/02/8-must-try-dishes-in-Hoi-An-Vietnamnomad.jpg",
        "https://culturephamtravel.com/wp-content/uploads/2019/07/Hoi-An-ancient-town-Culture-Pham-Travel.png"

    ]
    return (
        <>
        <h1 className={styles.title}>Travel Information</h1>
            {/* {data.map((layout) => (
        <TravelItemLayout
            section_title={layout.elements[0].value}
            section_content={layout.elements[1].value}
            images_list=
        ></TravelItemLayout>
      ))} */}

            <TravelItemLayout
                section_title="Da Nang"
                section_content="With broad beaches, fantastic street food, the fabled Hai Van Pass, and a growing collection of cafes, restaurants, and bars, it’s no wonder the residents of Da Nang sport some of the broadest smiles in the country. The warm sands of My Khe Beach sweep south from the mountainous Son Tra Peninsula. Da Nang hosts some of Vietnam's top luxury resorts, but much of the beach still belongs to the people who make it their playground, gym, and source of livelihood."
                images_list={images_danang}
            ></TravelItemLayout>

            <TravelItemLayout
                section_title="Hoi An"
                section_content="Hoi An is a place where the bold march of progress peters into a leisurely amble. In this one-time trading port, the Thu Bon River meanders past crumbling shop houses and weathered pagodas, while sampans come and go from the old ferry quay. Outside the Old Town, two-lane roads slice through waving rice fields and emerge at a frothy coastline. Stay a couple of days, and Hoi An's easygoing beauty and lantern-lit nights may leave you hopelessly beguiled."
                images_list={images_hoian}
            ></TravelItemLayout>
        </>

    );
};

export default TravelContent;

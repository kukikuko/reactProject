import Slider from "../../component/Slider/Slider";
import Title  from "../../component/Title/Title";
import MainCarousel from '../../component/Carousel/Carousel';
import Category from "../../component/Category/Category";
import { CategoryDb } from "../../Db/CategoryDb.js"
function Main() {
    return (
        <>  
            <MainCarousel />
            <div>
                <Title title={"베스트 셀러"} />
                <Slider params={"Book"} params2={''} />
            </div>
            <div>
                <Category CategoryDb={CategoryDb}/>
            </div>
            <div>
                <Title title={"외국 도서"} />
                <Slider params={"Foreign"} params2={''}/>
            </div>
            <div>
                <Title title={"음반/앨범"} />
                <Slider params={"Music"} params2={''}/>
            </div>
        </>
    );
}

export default Main;
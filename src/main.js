import Slider from "./Slider/Slider";
import Title  from "./Title/Title";

function Main() {
    return (
        <>
            <Title title={"베스트 셀러"}></Title>
            <Slider params={"Book"} />
            <Title title={"외국 도서"}></Title>
            <Slider params={"Foreign"} />
            <Title title={"음악/앨범"}></Title>
            <Slider params={"Music"} />
        </>
    );
}

export default Main;
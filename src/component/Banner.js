import logo from '../images/logo.png';

function Banner({inputValue, setInputValue}) {
    return(
        <div>
            <img src={logo} alt="kurlyLogo" className="logo" />
            <span>마켓컬리</span>
            <input 
                type="text" name="value" value={inputValue} placeholder="검색어를 입력해주세요" 
                onChange={(event) => {
                    setInputValue(event.target.value);
                }} />
        </div>
    );
}

export default Banner;
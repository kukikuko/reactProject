import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png';
import './Banner.css';
import { FaSearch } from "react-icons/fa";

function Banner({inputValue, setInputValue}) {
    let navigate = useNavigate();

    return(
        <div>
            <p style={{textAlign: "cneter"}}>
                <img src={logo} alt="kurlyLogo" style={{margin : "20px auto", display: "block"}} 
                    onClick={() => {navigate("/");}}/>
            </p>
            <div className="searchBox">
            <form>
                <input 
                    type="text" name="value" value={inputValue} placeholder="검색어를 입력해주세요" 
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }} />
                {/* <FaSearch className="searchIcon"/> */}
            </form>
            </div>
        </div>
    );
}

export default Banner;
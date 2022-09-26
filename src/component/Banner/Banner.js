import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import './Banner.css';

function Banner() {
    let navigate = useNavigate();
    let [inputValue, setInputValue] = useState("");
    console.log(inputValue); 

    return(
        <div className="banner">
            <p style={{textAlign: "center"}}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="kurlyLogo" style={{margin : "20px auto", display: "block"}} 
                    onClick={() => {navigate("/");}}/>
            </p>
            <div className="searchBox">
                <form>
                    <input 
                        type="text" name="value" value={inputValue} placeholder="검색어를 입력해주세요" 
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }} />
                    <button 
                        className="bannerBtn"
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault();
                            navigate(`search/${inputValue}`)
                            setInputValue("");
                        }}>
                        <FaSearch className="icon" />
                    </button>
                    
                </form>
            </div>
        </div>
    );
}

export default Banner;
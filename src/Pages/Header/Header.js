import Banner from '../../component/Banner/Banner.js';
import Nav from '../../component/Nav/Nav.js'
import './Header.css';
import { BookDb } from "../../Db/CategoryDb.js"
import { useNavigate } from "react-router-dom";


function Header () {

    let navigate = useNavigate();

    return(
        <div className='header'>
            <div className='headerDiv1'>
                <button 
                    onClick={()=>{navigate("/signup")}}
                    className='headerBtn purple'>회원가입</button>
                <button 
                    onClick={()=>{navigate("/login")}}
                    className='headerBtn '>로그인</button>
                <button className='headerBtn '>고객센터</button>
            </div>
            <Banner />
            <Nav BookDb={BookDb}/>
        </div>
    );
}

export default Header;
import Banner from '../../component/Banner/Banner.js';
import Nav from '../../component/Nav/Nav.js'
import './Header.css';
import { BookDb } from "../../Db/CategoryDb.js"


function Header () {
    return(
        <div className='header'>
            <div className='headerDiv1'>
                <button className='headerBtn purple'>회원가입</button>
                <button className='headerBtn '>로그인</button>
                <button className='headerBtn '>고객센터</button>
            </div>
            <Banner />
            <Nav BookDb={BookDb}/>
        </div>
    );
}

export default Header;
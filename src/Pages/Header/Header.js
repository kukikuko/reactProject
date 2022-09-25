import './Header.css';

function Header () {
    return(
        <div className='header'>
            <div className='headerDiv1'>
                <button className='headerBtn purple'>회원가입</button>
                <button className='headerBtn '>로그인</button>
                <button className='headerBtn '>고객센터</button>
            </div>
        </div>
    );
}

export default Header;
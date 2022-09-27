import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {

    let navigate = useNavigate();

    return(
        <div className="login">
            <div>로그인</div>
            <div className="loginDiv">
                <form>
                    <div>
                        <div className='regInput'>
                            <input type='text' maxLength='20' name='signup_id' placeholder='이메일을 입력해주세요'  className='LoginText'/>
                        </div>
                        <div className='regInput'>
                            <input type='password' maxLength='15' name='signup_password' placeholder='비밀번호를 입력해주세요' className='LoginText'/>
                        </div>
                    </div>
                    <div>
                        <button>로그인</button>
                        <button>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
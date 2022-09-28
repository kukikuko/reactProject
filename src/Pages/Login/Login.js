import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

function Login() {
  const location = useLocation();
  let userDb = location.state
  const navigate = useNavigate();

  console.log(userDb);




  const validationSchema = Yup.object().shape({
    email: Yup.string().email("올바른 이메일 형식이 아닙니다!").required("이메일을 입력하세요!"),
    password: Yup.string().required("패스워드를 입력하세요!"),
  });
  const submit = ({email, password}) => { 
    if(userDb == null) {
      Swal.fire({ title: "로그인 실패", text: "회원가입을 해주세요", icon: "error" });
    }
    if(userDb.email === email && userDb.password === password) {
      Swal.fire({ title: "로그인 성공", icon: "success" }).then(function () {
        navigate("/");
      });
    } else {
      Swal.fire({ title: "로그인 실패", text: "아이디 또는 비밀번호가 틀렸습니다", icon: "error" });
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <div className="login">
          <div className="loginDiv_1">로그인</div>
          <form onSubmit={handleSubmit} className="loginForm">
            <div className="loginDiv_2">
              <div className="LogInput">
                <input type="text" value={values.email} name="email" placeholder="이메일을 입력해주세요" onChange={handleChange} className="LoginText" />
                <p><ErrorMessage name="email" /></p>
              </div>
              <div className="LogInput">
                <input
                  type="password" value={values.password} name="password" placeholder="비밀번호를 입력해주세요" onChange={handleChange} className="LoginText"/>
                <p><ErrorMessage name="password" /></p>
              </div>
            </div>
            <div className="loginDiv_3">
              <input value={"로그인"} type="submit" className="loginBtn_1" />
              <input value={"회원가입"} type="button" className="loginBtn_2" 
                      onClick={()=>{navigate("/signup")}} />
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Login;

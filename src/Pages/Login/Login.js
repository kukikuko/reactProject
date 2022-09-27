import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("올바른 이메일 형식이 아닙니다!").required("이메일을 입력하세요!"),
    password: Yup.string().required("패스워드를 입력하세요!"),
  });
  const submit = async (values) => {
    const { email, password } = values;
    try {
      Swal.fire({ title: "로그인 성공", icon: "success" }).then(function () {
        navigate("/");
      });
    } catch (e) {
      Swal.fire({ title: "로그인 실패", text: e.response.data.message, icon: "error" });
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
          <form onSubmit={handleSubmit}>
            <div className="loginDiv_2">
              <div className="LogInput">
                <input type="text" value={values.email} name="email" placeholder="이메일을 입력해주세요" onChange={handleChange} className="LoginText" />
                <ErrorMessage name="email" />
              </div>
              <div className="LogInput">
                <input
                  type="password" value={values.password} name="password" placeholder="비밀번호를 입력해주세요" onChange={handleChange} className="LoginText"/>
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="registerDiv_3">
              <input value={"로그인"} type="submit" className="regBtn" />
              <input value={"회원가입"} type="button" className="regBtn" />
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Login;

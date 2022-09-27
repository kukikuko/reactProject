import "./Register.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";

function Register() {
  let navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required("이메일을 입력해주세요")
        .email("이메일 형식이 아닙니다."),
    username: yup
      .string()
      .required("닉네임을 입력해주세요")
      .min(2, "최소 2자 이상 가능합니다")
      .max(8, "최대 8자 까지만 가능합니다")
      .matches(/^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/, "닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"),
    password: yup
      .string()
      .required("영문, 숫자포함 8자리를 입력해주세요.")
      .min(8, "최소 8자 이상 가능합니다")
      .max(15, "최대 15자 까지만 가능합니다")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/, "영문 숫자포함 최소 8자리를 입력해주세요."),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
  });

  const submit = async (values) => {
    const { email, password, username } = values;
    try {
      await axios.post("/api/auth/signup", {
        email,
        password,
        username,
      });
      Swal.fire({ title: "회원가입 성공", icon: "success" }).then(function () {
        navigate("/login");
      });
      console.log(values);
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <div className="register">
          <div className="registerDiv_1">
            <span className="star">*</span> 필수입력사항
          </div>
          <form onSubmit={handleSubmit}>
            <div className="registerSection">
              <div className="regTitle">
                이메일<span className="star">*</span>
              </div>
              <div className="regInput">
                <input name="email" placeholder="이메일을 입력해주세요" value={values.email} onChange={handleChange} className="inputText" />
                {errors.email &&<p className="errorMsg">{errors.email}</p>}
              </div>
            </div>
            <div className="registerSection">
              <div className="regTitle">
                닉네임<span className="star">*</span>
              </div>
              <div className="regInput">
                <input name="username" placeholder="닉네임을 입력해주세요" value={values.username} onChange={handleChange} className="inputText" />
                {errors.username &&<p className="errorMsg">{errors.username}</p>}
              </div>
            </div>
            <div className="registerSection">
              <div className="regTitle">
                비밀번호<span className="star">*</span>
              </div>
              <div className="regInput">
                <input type="password" name="password" placeholder="비밀번호를 입력해주세요" value={values.password} onChange={handleChange} className="inputText" />
                {errors.password && <p className="errorMsg">{errors.password}</p>}
              </div>
            </div>
            <div className="registerSection">
              <div className="regTitle">
                비밀번호 확인<span className="star">*</span>
              </div>
              <div className="regInput">
                <input
                  type="password" name="passwordConfirm" placeholder="비밀번호를 한번더 입력해주세요" value={values.passwordConfirm} onChange={handleChange} className="inputText"/>
                {errors.passwordConfirm && touched.passwordConfirm ? <p className="errorMsg">{errors.passwordConfirm}</p> : null}
              </div>
            </div>
            <div className="registerDiv_3">
              <input value={"가입하기"} type="submit" className="regBtn" />
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Register;

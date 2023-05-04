import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../features/user/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from "antd";

const userSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is Required"),
  lastname: Yup.string().required("Last Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is Required"),
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.user
  );

  return (
    <div>
      <div className="ltn__utilize-overlay" />
      {/* SLIDER AREA START (slider-3) */}
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bg="img/bg/9.jpg"
        style={{ backgroundImage: 'url("img/bg/9.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6
                    className="section-subtitle ltn__secondary-color"
                    style={{ color: "#fff !important" }}
                  >
                    Welcome to Kera-Fresh
                  </h6>
                  <h1 className="section-title white-color">Account</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html" style={{ color: "#fff" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ color: "#fff" }}>Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SLIDER AREA END */}
      <div className="ltn__login-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Register <br />
                  Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(register(values));

              setTimeout(() => {
                resetForm();
              }, 1000);
              message.success("You have successfully registered");
              navigate("/login");
            }}
          >
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="account-login-inner">
                  <Form className="ltn__form-box contact-form-box">
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      fdprocessedid="ou9b73"
                    />
                    <ErrorMessage name="firstname" />
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      fdprocessedid="b7cf8z"
                    />
                    <ErrorMessage name="lastname" />
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email*"
                      fdprocessedid="8971r"
                    />
                    <ErrorMessage name="email" />
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password*"
                      fdprocessedid="dohmot"
                    />
                    <ErrorMessage name="password" />
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                        fdprocessedid="wpcqyv"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "CREATE ACCOUNT"}
                      </button>
                    </div>
                  </Form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link to="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;

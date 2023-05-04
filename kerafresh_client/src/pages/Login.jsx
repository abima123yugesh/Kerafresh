import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/user/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, message, Modal, Result } from "antd";
import { useEffect, useState } from "react";

const userSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email Is Required"),
  password: Yup.string().required("Password is Required"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getTokenFromLocalStorage = localStorage.getItem("KeraFreshUser")
  ? JSON.parse(localStorage.getItem("KeraFreshUser")).token
  : null;
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const userState = useSelector((state) => state.user);
  const { user, isError, isSuccess } = userState;

  useEffect(() => {
    if (isSuccess && user && getTokenFromLocalStorage ) {
      setIsModalVisible(true);
      setLoginSuccess(true);
    } else if (isError) {
      message.error("Invalid Credentials")
      setIsInvalidCredentials(true);
      
    }
  }, [user, isSuccess, navigate, getTokenFromLocalStorage, isError])
  return (
    <>
      <div className="ltn__utilize-overlay" />
      {/* SLIDER AREA START (slider-3) */}
      <Modal open={isModalVisible} footer={null} closable={false}>
        <Result
        status="success"
        title={`Welcome back ${user?.firstname} `}
        subTitle="You have successfully Logged In"
        extra={[
          <a href="/shop">
            <Button type="primary" key="console">
              SHOP
            </Button>
          </a>
        ]}
        />
      </Modal>
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
                    <li style={{ color: "#fff" }}>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SLIDER AREA END */}
      <div className="ltn__login-area pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Sign In <br />
                  To Your Account
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
              email: "",
              password: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(login(values));
            }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="account-login-inner">
                  <Form className="ltn__form-box contact-form-box">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email*"
                      fdprocessedid="q8xoc4"
                    />
                    <ErrorMessage name="email" />
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password*"
                      fdprocessedid="txxc7n"
                    />
                    <ErrorMessage name="password" />
                    <div className="btn-wrapper mt-0">
                      <button
                        className="theme-btn-1 btn btn-block"
                        type="submit"
                        fdprocessedid="3ta99u"
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="go-to-btn mt-20">
                      <Link href="#">
                        <small>FORGOTTEN YOUR PASSWORD?</small>
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="account-create text-center pt-50">
                  <h4>DON'T HAVE AN ACCOUNT?</h4>
                  <p>
                    Add items to your wishlistget personalised recommendations{" "}
                    <br />
                    check out more quickly track your orders register
                  </p>
                  <div className="btn-wrapper">
                    <Link to="/register" className="theme-btn-1 btn black-btn">
                      CREATE ACCOUNT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;

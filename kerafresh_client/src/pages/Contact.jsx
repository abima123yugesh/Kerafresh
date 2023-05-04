import { useDispatch } from "react-redux";
import { enquiries } from "../features/enquiry/enquirySlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from "antd";

const enquirySchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  number: Yup.string().required("Phone Numberis Required"),
  service: Yup.string().required("Service Type Required"),
  comment: Yup.string().required("Comment is Required")
});

function Contact() {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(enquiries(values))
      message.success("Enquiry created Successfully!")
      resetForm();
    } catch (error) {
      message.error(error.message)
    }
  }

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
                  <h1 className="section-title white-color">Contact Us</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html" style={{ color: "#fff" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ color: "#fff" }}>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="img/icons/12.png" alt="Icon " />
                </div>
                <h3 className="animated fadeIn">Office Address</h3>
                <p>
                  457/6, Karumanda Koundanoor, Vannamada Post, Kerala 678555
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow"
                style={{ padding: "50px 30px 53px" }}
              >
                <div className="ltn__contact-address-icon">
                  <img src="img/icons/10.png" alt="Icon " />
                </div>
                <h3 className="animated fadeIn">Email Address</h3>
                <p>
                  <a href="mailto:kerafresh@gmail.com">kerafresh@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow"
                style={{ padding: "50px 30px 53px" }}
              >
                <div className="ltn__contact-address-icon">
                  <img src="img/icons/11.png" alt="Icon " />
                </div>
                <h3 className="animated fadeIn">Phone Number</h3>
                <p>
                  <a href="">04923 - 272003</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__contact-message-area" style={{ marginBottom: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">Get A Quote</h4>
                <Formik
                initialValues={{
                  name:"",
                  email:"",
                  number:"",
                  service:"",
                  comment:"",
                }}
                validationSchema={enquirySchema}
                onSubmit={handleSubmit}
                >
                  {({ isSubmitting}) => (
                <Form id="contact-form" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          fdprocessedid="rr1cn9"
                        />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          fdprocessedid="t6lh5i"
                        />
                                                  <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item">
                        <Field
                          className="nice-select"
                          as="select" 
                          name="service"
                        >
                          <option value="" label="Select a service" />
                          <option value="gardening">Gardening </option>
                          <option value="landscaping">Landscaping </option>
                          <option value="vegetables growing">Vegetables Growing</option>
                          <option value="land preparation">Land Preparation</option>
                        </Field>
                        <ErrorMessage name="service" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <Field
                          type="text"
                          name="number"
                          placeholder="Enter phone number"
                          fdprocessedid="p5ult5"
                        />
                        <ErrorMessage name="number" component="div" className="error-message" />
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <Field
                      as="textarea" 
                      name="comment"
                      placeholder="Enter message"
                      
                    />
                    <ErrorMessage name="comment" component="div" className="error-message" />
                  </div>
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                      fdprocessedid="px2e066"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20" />
                </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15681.249490114316!2d76.8694521!3d10.7103721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8417fc41da54b%3A0xd943292644b27a90!2sKera%20Fresh%20Producer%20company%20ltd!5e0!3m2!1sen!2sin!4v1675691843776!5m2!1sen!2sin"
        width="100%"
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Contact;

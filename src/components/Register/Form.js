import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

export default function FormData() {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobileNo: "",
    isSharedData: false,
  });

  const [errors, setErrors] = useState({
    nameErr: false,
    userNameErr: false,
    emailErr: false,
    mobileNoErr: false,
    isSharedDataErr: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);

    const newErrors = {};

    if (formData.name.length === 0) {
      newErrors.nameErr = true;
    }

    if (formData.userName.length === 0) {
      newErrors.userNameErr = true;
    }

    let mailFormat = /\S+@\S+\.\S+/;
    let mobileFormat = /^\d{10}$/;
    if (formData.email.length === 0 || !formData.email.match(mailFormat)) {
      newErrors.emailErr = true;
    }

    if (
      formData.mobileNo.length === 0 ||
      !formData.mobileNo.match(mobileFormat)
    ) {
      newErrors.mobileNoErr = true;
    }

    if (formData.isSharedData === false) {
      newErrors.isSharedDataErr = true;
    }
    setErrors(newErrors);
    Object.keys(newErrors).length === 0 &&
      localStorage.setItem("formdata", JSON.stringify(formData));
    Object.keys(newErrors).length === 0 && navigate("/Category");
  }

  return (
    <>
      <div className="form_container">
        <h2 className="form_title">Super app</h2>
        <p className="form_heading">Create your new account</p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className={errors.nameErr ? "errorInput" : ""}
        ></input>
        {errors.nameErr && formData.name.length <= 0 && (
          <label>Name can not be empty !</label>
        )}
        <input
          type="text"
          placeholder="UserName"
          name="userName"
          onChange={handleChange}
          value={formData.userName}
          className={errors.userNameErr ? "errorInput" : ""}
        ></input>
        {errors.userNameErr && formData.userName.length <= 0 && (
          <label>User name can not be empty !</label>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className={errors.emailErr ? "errorInput" : ""}
        ></input>
        {errors.emailErr && <label>Invalid Email !</label>}
        <input
          type="number"
          placeholder="Mobile"
          name="mobileNo"
          onChange={handleChange}
          value={formData.mobileNo}
          className={errors.mobileNoErr ? "errorInput" : ""}
        ></input>
        {errors.mobileNoErr && <label>Invalid Mobile Number !</label>}
        <div className="terms_checklist">
          <input
            type="checkbox"
            name="isSharedData"
            onChange={handleChange}
            checked={formData.isSharedData}
          ></input>
          <label className="terms_label" htmlFor="isSharedData">
            Share my registration data with Superapp
          </label>
        </div>
        {errors.isSharedDataErr && (
          <label>Check this box if you want to proceed !</label>
        )}
        <button type="submit" className="signUp_Btn" onClick={handleSubmit}>
          Sign up
        </button>
        <div>
          <p className="terms_condi">
            By clicking on Sign up. you agree to Superapp
            <span className="terms_active">Terms and Conditions of Use</span>
          </p>
          <p className="terms_condi">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span className="terms_active">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}

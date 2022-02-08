import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {BsFillCheckCircleFill} from "react-icons/bs";

const Form = () => {

  const [hide,setHide] = useState(false);
  const [submitbox,setsubmitbox] = useState(true)
  const formik = useFormik({
    initialValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      fathername: "",
      mothername: "",
      gender: "",
      dob: "",
      age: "",
      state: "",
      city: "",
      zip: "",
      password: "",
      repassword: "",
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .required("firstname is required")
        .min(3, "firstname is too short")
        .max(15, "firstname is too long"),
      lastname: yup
        .string()
        .required("lastname is required")
        .min(2, "lastname is too short")
        .max(15, "lastname is too long"),
      fathername: yup
        .string()
        .required("please enter your father's name")
        .min(3, `father's name is too short`)
        .max(35, `father's name is too long`),
      mothername: yup
        .string()
        .required("please enter your mother's name")
        .min(3, `mother's name is too short`)
        .max(15, `mother's name is too long`),
      gender: yup.string().required("please select your gender"),
      dob: yup.date().required("please select your 'Date of Birth' "),
      state: yup.string().required("select your state"),
      city: yup.string().required("select your city"),
      zip:yup.string().required('invaild Zip code').min(6,'invaild code').max(6,'invalid code'),
      password: yup
        .string()
        .required("password is required")
        .min(6, "password required at least 6 chars")
        .matches(/[a-z]/, "enter at least one lowercase")
        .matches(/[A-Z]/, "enter at least one uppercase")
        .matches(/[0-9]/, "at least one number"),
        repassword: yup
        .string()
        .oneOf([yup.ref('password'),null],'Re-password must same as password')
        .required("Re-password is required")

    
    }),
    onSubmit: (value) => {
      setHide(true)
    setsubmitbox(false)
    console.log(value);
    
    },
  });



  const homepage = () =>{
    setsubmitbox(true)
    setHide(false)
    
  }
 
  return (
    <React.Fragment>
      <div className="container mt-1 text-center">
        <div
          className=""
          style={hide ? {display:'none'} : {display:'block'}}

        >
          <p class="fs-3 fw-light text-primary">Registration form</p>

          <form
            class="row g-3 "
            onReset={formik.resetForm}
            onSubmit={formik.handleSubmit}
          >
            <div class="col-md-4">
              <label htmlFor="validationCustom01" class="form-label">
                First name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                name="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
                placeholder="first name"
              />
              <div style={{ color: "red" }}>
                {formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : null }
              </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustom02" class="form-label">
                Middle name
              </label>
              <input
                type="text"
                class="form-control"
                id="middlename"
                name="middlename"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.middlename}
                placeholder="middle name"
              />
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustomUsername" class="form-label">
                Last name<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  name="lastname"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  placeholder="last name"
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : null }
                {/* {formik.touched.firstname && formik.errors.lastname} */}
              </div>
            </div>
            <div class="col-md-6">
              <label htmlFor="validationCustomUsername" class="form-label">
                Father's name<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  class="form-control"
                  id="fathername"
                  name="fathername"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fathername}
                  placeholder="father's name"
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.fathername && formik.errors.fathername ? formik.errors.fathername : null }
                {/* {formik.touched.firstname && formik.errors.fathername} */}
                </div>
            </div>
            <div class="col-md-6">
              <label htmlFor="validationCustomUsername" class="form-label">
                Mother's name<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  class="form-control"
                  id="mothername"
                  name="mothername"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mothername}
                  placeholder="mother's name"
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.mothername && formik.errors.mothername ? formik.errors.mothername : null }
                {/* {formik.errors.mothername} */}
                </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustomUsername" class="form-label">
                Gender<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <select
                  class="form-select form-control"
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                >
                  <option selected value="">
                    gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.gender && formik.errors.gender ? formik.errors.gender : null }
                {/* {formik.errors.gender} */}
                </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustomUsername" class="form-label">
                DOB<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <input
                  type="date"
                  class="form-control"
                  id="dob"
                  name="dob"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.dob && formik.errors.dob ? formik.errors.dob : null }
                {/* {formik.errors.dob} */}
                </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustomUsername" class="form-label">
                Age
              </label>
              <div class="input-group has-validation">
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  name="age"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                  placeholder="Age"
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.age && formik.errors.age ? formik.errors.age : null }
                {/* {formik.errors.age} */}
                </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustom04" class="form-label">
                State<span style={{ color: "red" }}>*</span>
              </label>
              <select
                class="form-select"
                id="state"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                onBlur={formik.handleBlur}
              >
                <option selected hidden value="">
                  Choose your state
                </option>
                <option>Uttar pradesh</option>
                <option>Madhya pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Delhi</option>
                <option>maharastra</option>
              </select>
              <div style={{ color: "red" }}>
              {formik.touched.state && formik.errors.state ? formik.errors.state : null }
                {/* {formik.errors.state} */}
                </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustom04" class="form-label">
                City<span style={{ color: "red" }}>*</span>
              </label>
              <select
                class="form-select"
                id="city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              >
                <option selected hidden value="">
                  Choose your city
                </option>
                <option>Raipur</option>
                <option>Lucknow</option>
                <option>Kanpur</option>
                <option>Agra</option>
                <option>Etawah</option>
                <option>Banaras</option>
                <option>Mumbai</option>
                <option>Goa</option>
                <option>Pune</option>
                <option>Bangalore</option>
              </select>
              <div style={{ color: "red" }}>
              {formik.touched.city && formik.errors.city ? formik.errors.city : null }
                {/* {formik.errors.city} */}
                </div>
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustom05" class="form-label">
                Zip
              </label>
              <input
                type="number"
                class="form-control"
                id="zip"
                name="zip"
                placeholder="zip code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip}
              />
              <div style={{ color: "red" }}>
              {formik.touched.zip && formik.errors.zip ? formik.errors.zip : null }
              </div>
              
            </div>
            <div class="col-md-6">
              <label htmlFor="validationCustomUsername" class="form-label">
                Create your password<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Create your password"
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.password && formik.errors.password ? formik.errors.password : null }
                {/* {formik.errors.password} */}
                </div>
            </div>
            <div class="col-md-6">
              <label htmlFor="validationCustomUsername" class="form-label">
                Re-enter your password<span style={{ color: "red" }}>*</span>
              </label>
              <div class="input-group has-validation">
                <input
                  type="password"
                  class="form-control"
                  id="repassword"
                  name="repassword"
                  aria-describedby="inputGroupPrepend"
                  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  value={formik.values.repassword}
                  placeholder="Re-enter your password"
                />
              </div>
              <div style={{ color: "red" }}>
              {formik.touched.repassword && formik.errors.repassword ? formik.errors.repassword : null }
                {/* {formik.errors.repassword} */}
                </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary ms-1 me-1" type="submit">
                register
              </button>
              <button
                class="btn btn-danger ms-1 me-1"
                resetForm={formik.resetForm}
                type="reset"
              >
                clear
              </button>
            </div>
          </form>

        </div>
        <div class="container " style={submitbox ? {display : 'none'} : {display : 'block', border:'0.5px solid green', backgroundColor:'#DCF9D8', margin:'5rem auto',height:'40vh',width:'50%',borderRadius:'5px'}}>
          
        <div style={{fontSize:'50px', color:'green'}}>
        <BsFillCheckCircleFill/>
          </div>
          <div style={{fontSize:'28px'}}>
            Your form was successfully submitted !
          </div>
          <div style={{fontSize:'28px'}}>
            <button type="button" class="btn btn-primary" onClick={homepage}>Go to Form</button>
          </div>
          <span style={{fontSize:'12px',color:'blue'}}>Note :- Please check your console for your entered details</span>
        </div>
         

      </div>
    </React.Fragment>
  );
};

export default Form;

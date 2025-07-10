import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import signupSchema from "../../schemas/SignupSchema";
import { signup } from "../../api/internal";
import { setUser } from "../../store/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const handleSignup = async () => {
    const data = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    const response = await signup(data);
    console.log(response);
    if (response.status === 201) {
      // setUser
      const user = {
        _id: response.data.user._id,
        username: response.data.user.username,
        email: response.data.user.email,
        auth: response.data.auth,
      };

      dispatch(setUser(user));
      // redirect --> homepage
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.message);
    }
  };

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
  });
  return (
    <div className="w-[40%] m-auto py-10 flex items-center justify-center flex-col font-['Playfair_Display'] space-y-2">
      <h1
        className="text-4xl font-bold text-center mb-[40px]"
        style={{ widows: "inherit" }}
      >
        Create an account!
      </h1>
      <TextInput
        type="text"
        placeholder="name"
        name="name"
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.name && touched.name ? 1 : undefined}
        errormessage={errors.name}
      />
      <TextInput
        type="text"
        placeholder="username"
        name="username"
        value={values.username}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />
      <TextInput
        type="text"
        placeholder="email"
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email && touched.email ? 1 : undefined}
        errormessage={errors.email}
      />
      <TextInput
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />
      <TextInput
        type="password"
        placeholder="confirmPassword"
        name="confirmPassword"
        value={values.confirmPassword}
        onBlur={handleBlur}
        onChange={handleChange}
        error={
          errors.confirmPassword && touched.confirmPassword ? 1 : undefined
        }
        errormessage={errors.confirmPassword}
      />
      <button
        className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer font-bold w-full py-[10px] px-[20px] text-xl rounded border-none outline-none mt-10 m-4 disabled:bg-[#6e8dfc]"
        onClick={handleSignup}
        disabled={
          !values.username ||
          !values.password ||
          !values.name ||
          !values.confirmPassword ||
          !values.email ||
          errors.username ||
          errors.password ||
          errors.confirmPassword ||
          errors.name ||
          errors.email
        }
      >
        Sign up
      </button>
      <span className="text-[18px]">
        Already have an account?
        <button
          className="mt-2 ml-1 text-green-700 hover:text-green-800 text-[18px] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </span>

      {error != "" ? (
        <p className="text-[#ea3943] mx-0 my-[20px] text-xl font-bold">
          {error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Signup;

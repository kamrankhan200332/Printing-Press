import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useFormik } from "formik";
import loginSchema from "../../schemas/LoginSchema";
import { login } from "../../api/internal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
  });

  const handleLogin = async () => {
    const data = {
      username: values.username,
      password: values.password,
    };
    const response = await login(data);

    if (response.status === 200) {
      // 1. setUser
      const user = {
        _id: response.data.user._id,
        username: response.data.user.username,
        email: response.data.user.email,
        auth: response.data.auth,
      };

      dispatch(setUser(user));
      // 2. redirect --->  Home page
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.errorMessage);
    }
  };

  return (
    <div className="w-[40%] m-auto py-10 flex items-center justify-center flex-col font-['Playfair_Display'] space-y-2">
      <h1
        className="text-4xl font-bold text-center mb-[40px]"
        // style={{ widows: "inherit" }}
      >
        Login to your account!
      </h1>
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
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />
      <button
        className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer font-bold w-full py-[10px] px-[20px] text-xl rounded border-none outline-none mt-10 m-4"
        onClick={handleLogin}
      >
        Login
      </button>
      <span className="text-[18px]">
        Don't have an account?
        <button
          className="mt-2 ml-1 text-green-700 hover:text-green-800 text-[18px] cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Register
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

export default Login;

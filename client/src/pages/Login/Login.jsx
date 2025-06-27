import React from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useFormik } from "formik";
import loginSchema from "../../schemas/LoginSchema";

const Login = () => {
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
  });
  return (
    <div className="w-[40%] m-auto py-10 flex items-center justify-center flex-col font-['Playfair_Display'] space-y-2">
      <h1
        className="text-4xl font-bold text-center mb-[40px]"
        style={{ widows: "inherit" }}
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
      <button className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer font-bold w-full py-[10px] px-[20px] text-xl rounded border-none outline-none mt-10 m-4">
        Login
      </button>
      <span className="text-[18px]">
        Don't have an account?
        <button className="mt-2 ml-1 text-green-700 hover:text-green-800 text-[18px] cursor-pointer">
          Register
        </button>
      </span>
    </div>
  );
};

export default Login;

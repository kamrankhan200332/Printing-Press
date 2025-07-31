import * as Yup from "yup";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/;

const dataSchema = Yup.object().shape({
  name: Yup.string().max(30).required("name is required!"),
  username: Yup.string().min(5).max(30).required("username is required!"),
  email: Yup.string()
    .email("enter a valid email!")
    .required("email is required!"),
  password: Yup.string()
    .matches(
      passwordPattern,
      "Password must be 8-30 characters and include uppercase, lowercase, and a number"
    )
    .required("password is required!"),
  number: Yup.string()
    .matches(/^\d{10}$/, "Number must be exactly 11 digits, including 0")
    .required("number is required!"),
  dateOfBirth: Yup.date()
    .max(new Date(), "Date can't be in the future")
    .typeError("please enter a valid date")
    .required("dateOfBirth is required!"),
  country: Yup.string()
    .oneOf(
      ["pakistan", "bangladesh", "china", "iran"],
      "Invalid country selected"
    )
    .required("please select a country!"),
  social: Yup.object({
    facebook: Yup.string()
      .url("Invalid Facebook URL")
      .required("facebook is required!"),
    twitter: Yup.string()
      .url("Invalid Twitter URL")
      .required("twitter is required!"),
  }),
  gender: Yup.string().required("gender is required!"),
  skills: Yup.array()
    .min(1, "please select at least one skill")
    .required("skills is required!"),
  tags: Yup.array().of(Yup.string()).min(1, "at least one tag is required!"),
  description: Yup.string().min(10, "minimum 10 characters").notRequired(),
  avatar: Yup.mixed()
    .required("avatar is required!")
    .test(
      "fileSize",
      "file size must be less than 2MB",
      (value) => value && value.size <= 2 * 1024 * 1024
    )
    .test(
      "fileType",
      "Only .jpg, .jpeg, or .png formats are allowed",
      (value) =>
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
    ),
});

export default dataSchema;

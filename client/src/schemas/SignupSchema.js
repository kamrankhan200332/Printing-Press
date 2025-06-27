import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup.string().max(30).required("name is required!"),
  username: yup.string().min(5).max(30).required("username is required!"),
});

export default signupSchema;

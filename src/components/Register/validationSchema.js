import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

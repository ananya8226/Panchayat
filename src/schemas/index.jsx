import * as Yup from "yup";

export const signUpSchema = Yup.object({
    email: Yup.string().email().required("Please enter valid email address"),
    name: Yup.string().min(2).max(30).required("Please enter valid name"),
    password: Yup.string().min(8).max(20).required("Please enter valid password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'), null], "Password must match"),
});
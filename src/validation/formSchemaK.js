import * as Yup from "yup";

const formSchemaK = Yup.object().shape({
    username: Yup
        .string()
        .min(3, "Usermame must be at least 3 characters long.")
        .required("Name is Required"),
    password: Yup
        .string()
        .min(3, "Password must be at least 3 characters long.")
        .required("Password is Required"),
})

export default formSchemaK
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    name: Yup
        .string()
        .min(3, "Usermame must be at least 3 characters long.")
        .required("Name is Required"),
    password: Yup
        .string()
        .min(3, "Password must be at least 3 characters long.")
        .required("Password is Required"),
    role: Yup
        .string()
        .oneOf(['Instructor', 'Client'], "Please select a role")
        .required('Please Select a Roll')
})

export default formSchema
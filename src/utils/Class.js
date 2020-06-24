// import React from 'react'

// const onInputChangeClass = evt => {
//     const { name, value } = evt.target
//     Yup
//         .reach(formSchema, name)
//         .validate(value)
//         .then(valid => {
//             setFormErrors({
//                 ...formErrors,
//                 [name]: ""
//             })
//         })
//         .catch(err => {
//             setFormErrors({
//                 ...formErrors,
//                 [name]: err.errors[0]
//             })
//         })
//     setFormValues({
//         ...formValues,
//         [name]: value
//     })
// }

// const onSubmitClass = evt => {
//     evt.preventDefault()
//     const newClass = {
//         name: classes.name.trim(),
//         email: classes.email.trim(),
//         password: classes.password.trim(),
//         role: classes.role,
//     }
//     postNewClass(newClass)
// }
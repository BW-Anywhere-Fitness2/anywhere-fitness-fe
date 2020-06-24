import * as Yup from "yup";

const formSchemaClass = Yup.object().shape({
    class_name: Yup
        .string()
        .required("Must include a class."),
    instructor_name: Yup
        .string()
        .required("Instructor name is required"),
    class_type: Yup
        .string()
        .oneOf(['cardio', 'weights'], '')
        .required("Class type is required"),
    date_time: Yup
        .string()
        .required("date and time is Required"),
    duration: Yup
        .number()
        .positive('You must select a duration')
        .required('Please input a duration'),
    intensity_level: Yup
        .string()
        .oneOf(['low', 'medium', 'high'], 'You must select an intensity level')
        .required('Please input an intesnity level'),
    location: Yup
        .string()
        .oneOf(['123 west ave', '456 south st', '789 east blvd'], 'You must select a location')
        .required('Please input a location'),
    current_members: Yup
        .number()
        .required('Please input a number of members'),
    max_members: Yup
        .number()
        .required('Please input a maximum number of members')
})

export default formSchemaClass
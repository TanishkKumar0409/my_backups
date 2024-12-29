import * as Yup from "yup";

export const LoginValidationSchema = () => {
    return Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });
}

export const RegisterValidationSchema = () => {
    return Yup.object({
        username: Yup.string().required('Username is required'),
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        contact: Yup.string().matches(/^[0-9]{10}$/, 'Contact number must be 10 digits').required('Contact number is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });
}

export const UpdateProfileSchema = () => {
    return Yup.object({
        name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        contact: Yup.string().matches(/^[0-9]+$/, 'Contact must be a number').required('Contact number is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters'),
    })
}

export const ContactUsSchema = () => {
    return Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        contact: Yup.string()
            .matches(/^\d{10}$/, 'Contact number must be 10 digits')
            .required('Contact number is required'),
        subject: Yup.string()
            .min(3, 'Subject must be at least 3 characters')
            .required('Subject is required'),
        message: Yup.string()
            .min(10, 'Message must be at least 10 characters'),
    })
}
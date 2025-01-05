import * as Yup from "yup";

export const LoginValidationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .matches(/^[^\s]+$/, "Email must not contain spaces")
      .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Email must end with @gmail.com"
      )
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
};

export const RegisterValidationSchema = () => {
  return Yup.object({
    username: Yup.string()
      .matches(
        /^[a-zA-Z0-9]{11}[0-9]{4}$/,
        "Username must be 15 characters, with the last 4 as digits and no spaces"
      )
      .required("Username is required"),
    name: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .matches(/^[^\s]+$/, "Email must not contain spaces")
      .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Email must end with @gmail.com"
      )
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Contact number must be exactly 10 digits with no spaces or characters"
      )
      .required("Contact number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
};

export const UpdateProfileSchema = () => {
  return Yup.object({
    name: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Contact number must be exactly 10 digits with no spaces or characters"
      )
      .required("Contact number is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });
};

export const ContactUsSchema = () => {
  return Yup.object({
    name: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contact: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Contact number must be exactly 10 digits with no spaces or characters"
      )
      .required("Contact number is required"),
    subject: Yup.string()
      .min(3, "Subject must be at least 3 characters")
      .required("Subject is required"),
    message: Yup.string().min(5, "Message must be at least 10 characters"),
  });
};

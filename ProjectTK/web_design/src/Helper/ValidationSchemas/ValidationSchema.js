import * as Yup from "yup";

const BannerValidationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    files: Yup.array()
      .min(1, "At least one file is required")
      .required("Files are required"),
      message: Yup.string()
      .max(500, "Message cannot exceed 500 characters")
      .nullable(), 
  });
};

export default BannerValidationSchema;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { UpdateProfileSchema } from '../../../Helper/FormValidationSchemas/FormValidationSchemas';
import { API } from "../../../Services/API/API";
import { toast } from 'react-toastify';

export default function UpdateProfileForm(props) {
  const userData = props.userData;
  const [profileImage, setProfileImage] = useState(`http://localhost:5000/${userData.profile}`);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const initialValues = {
    name: userData?.name || '',
    email: userData?.email || '',
    contact: userData?.contact || '',
    password: '',
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("contact", values.contact);

      if (values.password) {
        formData.append("password", values.password);
      }

      const fileInput = document.querySelector('#image-upload');
      if (fileInput?.files[0]) {
        formData.append('profile', fileInput.files[0]);
      }

      const response = await API.put(`/user/update/${userData.username}`, formData);

      toast.success(response.data.message);
      localStorage.setItem("admin", JSON.stringify(response.data.updatedUser));

      window.location.reload()
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UpdateProfileSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <div className="text-center mb-2 mt-4">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-circle"
          width="100px"
          height="100px"
          style={{ cursor: 'pointer' }}
          onClick={() => document.getElementById('image-upload').click()}
        />

        <input
          type="file"
          id="image-upload"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='name'
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-2">
        <label htmlFor="formemail" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="formemail"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='email'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-2">
        <label htmlFor="contact" className="form-label">Contact</label>
        <input
          type="text"
          className="form-control"
          id="contact"
          name="contact"
          placeholder="Enter your contact number"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.contact && formik.errors.contact ? (
          <div className="text-danger">{formik.errors.contact}</div>
        ) : null}
      </div>

      <div className="mb-2">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password || `*******`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-custom custom-btn w-100">
        Save Changes
      </button>
    </form>
  );
}

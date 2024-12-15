import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { LoginValidationSchema } from '../../../Helper/FormValidationSchemas/FormValidationSchemas';

export default function Login(props) {
    const initialValues = { email: '', password: '' }

    const handleSubmit = (values) => { console.log('Form submitted with values:', values); }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginValidationSchema,
        onSubmit: handleSubmit
    });

    return (
        <div className="d-flex justify-content-center align-items-center my-5 w-100">
            <div className="w-100 px-5">
                <h3 className="text-center mb-4">Login to Project TK</h3>
                <hr />
                <form onSubmit={formik.handleSubmit} className="form-style">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                            autoComplete='email'
                        />
                        {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.password && formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-custom custom-btn overflow-hidden border-0" disabled={formik.isSubmitting}>
                            Login
                        </button>
                    </div>
                    <p className='text-center mt-3'>Don't have an account? <Link onClick={props.isLogin}>Register</Link></p>
                </form>
            </div>
        </div>
    );
}

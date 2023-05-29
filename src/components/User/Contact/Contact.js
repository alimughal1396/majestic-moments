import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './Contact.css'

import backgroundImage from '../Images/contact-img.jpg'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required')
});


export default function Contact() {
    const handleSubmit = (values, { resetForm }) => {

        const { name, email, message } = values;
        const subject = 'Contact Form Submission';
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

        const mailtoLink = `mailto:contact@mm.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.open(mailtoLink);
        resetForm();
    };

    return (
        <div
            className="background-image"
            style={{
                backgroundImage: 'url(Images/contact-img.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className='mx-auto col-10 col-md-8 col-lg-4 m-5'>
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Get in touch</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <Field type="text" className="form-control" name="name" />
                        <ErrorMessage name="name" component="div" className='text-danger' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <Field type="email" className="form-control" name="email" />
                        <ErrorMessage name="email" component="div" className='text-danger' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <Field as="textarea" className="form-control" name="message" />
                        <ErrorMessage name="message" component="div" className='text-danger' />
                    </div>

                    <button type="submit" className="btn btn-secondary w-100">Send Message</button>
                </Form>
            </Formik >
        </div>


    );
}


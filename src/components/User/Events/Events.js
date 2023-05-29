import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default Event = () => {
    const validateForm = (values) => {
        const errors = {};

        if (!values.eventName) {
            errors.eventName = 'Event name is required';
        }

        if (!values.eventType) {
            errors.eventType = 'Event type is required';
        }

        if (!values.place) {
            errors.place = 'Place is required';
        }

        if (!values.date) {
            errors.date = 'Date is required';
        }

        if (!values.numberOfPersons) {
            errors.numberOfPersons = 'Number of persons is required';
        } else if (isNaN(values.numberOfPersons)) {
            errors.numberOfPersons = 'Number of persons must be a valid number';
        }

        return errors;
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Handle form submission logic here
        console.log(values);
        setSubmitting(false);
        resetForm();
    };

    return (
        <div>
            <h2 className="text-center">Event Form</h2>

            <Formik
                initialValues={{
                    eventName: '',
                    eventType: '',
                    place: '',
                    date: '',
                    numberOfPersons: '',
                    otherDescription: ''
                }}
                validate={validateForm}
                onSubmit={handleSubmit}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <Field
                                type="text"
                                className="form-control form-control-sm"
                                id="eventName"
                                name="eventName"
                            />
                            <ErrorMessage
                                name="eventName"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="eventType">Event Type</label>
                            <Field
                                as="select"
                                className="form-control form-control-sm"
                                id="eventType"
                                name="eventType"
                            >
                                <option value="">Select an event type</option>
                                <option value="official">Official Event</option>
                                <option value="personal">Personal Event</option>
                            </Field>
                            <ErrorMessage
                                name="eventType"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label>Place</label>
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    id="placeOnSite"
                                    name="place"
                                    value="on-site"
                                />
                                <label className="form-check-label" htmlFor="placeOnSite">
                                    On-Site
                                </label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    id="placeHome"
                                    name="place"
                                    value="home"
                                />
                                <label className="form-check-label" htmlFor="placeHome">
                                    Home
                                </label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    id="placeOther"
                                    name="place"
                                    value="other"
                                />
                                <label className="form-check-label" htmlFor="placeOther">
                                    Other
                                </label>
                            </div>
                            {values.place === 'other' && (
                                <div className="mt-2">
                                    <Field
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="otherDescription"
                                        name="otherDescription"
                                        placeholder="Please describe the other place"
                                    />
                                    <ErrorMessage
                                        name="otherDescription"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                            )}
                            <ErrorMessage
                                name="place"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <Field
                                type="date"
                                className="form-control form-control-sm"
                                id="date"
                                name="date"
                            />
                            <ErrorMessage
                                name="date"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="numberOfPersons">Number of Persons</label>
                            <Field
                                type="number"
                                className="form-control form-control-sm"
                                id="numberOfPersons"
                                name="numberOfPersons"
                            />
                            <ErrorMessage
                                name="numberOfPersons"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                Register
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
